import puppeteer from 'puppeteer';
import { PDFDocument } from 'pdf-lib';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync, writeFileSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlPath = join(__dirname, 'pitch-deck.html');
const outPath = join(__dirname, 'QPayments-Pitch-Deck.pdf');
const tmpPath = join(__dirname, 'tmp-vector.pdf');

const W = 1280;
const H = 720;

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: W, height: H, deviceScaleFactor: 2 });
await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
await page.evaluate(() => document.fonts.ready);

// ── vector CSS (same as before, fixes all slides except #product) ──────────
await page.addStyleTag({ content: `
  * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
  @page { size: ${W}px ${H}px; margin: 0; }
  html { width: ${W}px; background: #F5EDE2; }
  body {
    margin: 0 !important; padding: 0 !important;
    width: ${W}px !important; height: auto !important;
    overflow: visible !important; scroll-snap-type: none !important;
    background: #F5EDE2 !important;
  }
  .deck {
    margin: 0 !important; padding: 0 !important;
    display: block !important; width: ${W}px !important;
    height: auto !important; overflow: visible !important;
    scroll-snap-type: none !important;
  }
  .slide-frame {
    width: ${W}px !important; height: ${H}px !important;
    aspect-ratio: unset !important; overflow: hidden !important;
    margin: 0 !important; border-radius: 0 !important;
    box-shadow: none !important;
    break-after: page; page-break-after: always;
    position: relative !important; display: block !important;
  }
  .slide-frame:last-child {
    break-after: avoid !important; page-break-after: avoid !important;
  }
  .slide {
    transform: none !important; position: absolute !important;
    top: 0 !important; left: 0 !important;
    width: ${W}px !important; height: ${H}px !important;
  }
` });

// ── 1. Generate vector PDF ─────────────────────────────────────────────────
await page.pdf({
  width: `${W}px`, height: `${H}px`,
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
  path: tmpPath,
});
console.log('Vector PDF generated');

// ── 2. Screenshot the product slide exactly as it appears in browser ───────
// Remove the print CSS so the slide renders normally
await page.evaluate(() => {
  document.querySelectorAll('style[data-puppeteer-injected]').forEach(s => s.remove());
});

// Reset to browser rendering
await page.evaluate(() => {
  document.body.style = '';
  document.querySelector('.deck').style = '';
});

// Scroll to product slide and screenshot it
const productFrame = await page.$('#product');
await productFrame.scrollIntoView();
await new Promise(r => setTimeout(r, 200));
const screenshot = await productFrame.screenshot({ type: 'png' });
console.log('Product slide screenshot captured');

await browser.close();

// ── 3. Splice screenshot into page 4 of the vector PDF ────────────────────
const pdfBytes = readFileSync(tmpPath);
const doc = await PDFDocument.load(pdfBytes);

// Product slide is page index 3 (0-based)
const PAGE_INDEX = 3;

// Remove the broken vector page 4
doc.removePage(PAGE_INDEX);

// Create new page with the screenshot
const img = await doc.embedPng(screenshot);
const newPage = doc.insertPage(PAGE_INDEX, [W, H]);
newPage.drawImage(img, { x: 0, y: 0, width: W, height: H });

const finalBytes = await doc.save();
writeFileSync(outPath, finalBytes);

const mb = (finalBytes.length / 1024 / 1024).toFixed(1);
console.log(`Saved: ${outPath} (${mb} MB)`);
