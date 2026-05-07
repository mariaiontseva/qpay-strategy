# QP Bookkeeping Lab — Design Spec

**Date:** 2026-05-07
**Owner:** Maria Iontseva
**Status:** Locked, ready for implementation

## Purpose

Internal AI prototype for testing the bookkeeping/tax-report feature destined for the QPay Flutter app. Maria and Farid use it to:

1. Upload a UK bank statement (PDF or CSV).
2. See Claude parse, categorise, extract VAT, and flag ambiguous transactions.
3. Iterate on the system prompt and re-run on the same statement (no re-upload).
4. Generate a printable P&L report and a VAT100 draft.

This is **not** a public product, **not** a QPay-customer-facing feature, and **not** linked from qpayments.co.uk. It is a debug/eval harness for the AI flow before porting the validated logic into the Flutter app.

## Non-goals

- Multi-file upload (single statement at a time for MVP; multi-file VAT-quarter is the future).
- VAT schemes other than Standard rate.
- Authenticated multi-user accounts. One shared passcode for Maria and Farid.
- Persistent server-side storage. Sessions live in localStorage only.
- HMRC submission. VAT100 is draft-only, exported for use in MTD bridging software.

## Architecture

```
Browser (Vercel static)        Vercel function           Anthropic API
qp-bookkeeping-lab.vercel.app  /api/auth                 api.anthropic.com
                               /api/categorise           Files + Messages
```

Single Vercel project hosts both the static frontend and the serverless functions. Same origin → no CORS. The Anthropic API key never leaves the Vercel environment.

### Backend endpoints

- **POST `/api/auth`** — body `{ passcode }`. Validates against `process.env.ACCESS_PASSCODE` via `timingSafeEqual`. On success, sets `qp-auth` HttpOnly + Secure + SameSite=Lax cookie. Returns 200/401.
- **POST `/api/categorise`** — multipart form. Cookie-protected. Body: file (PDF/CSV ≤10 MB) + setup JSON + optional `prompt_override`. Pipeline:
  1. Validate cookie, MIME, size.
  2. `anthropic.files.create({ file })` → `file_id`.
  3. `anthropic.messages.create({ model: 'claude-sonnet-4-6', system: SYSTEM_PROMPT, messages: [...with file_id], temperature: 0, max_tokens: 8000 })`.
  4. Parse response, validate against JSON schema (Zod or hand-rolled).
  5. `anthropic.files.delete(file_id)` (cleanup, fire-and-forget).
  6. Return `{ transactions, pl_summary, vat_summary, warnings, run_meta: { tokens_in, tokens_out, latency_ms, cost_usd } }`.

### Frontend (single page)

Tabs (top-level navigation, not router-based):

1. **Prompt** — Editable system prompt (textarea, monospace). Sidebar shows model + last run stats + saved presets (localStorage). "Re-run on current statement" button calls `/api/categorise` with the cached file blob and the new prompt.
2. **Transactions** — Hybrid table (per UX choice from brainstorming). Setup mini-form on top, action bar with chips ("39 categorised · 8 need review"), table with ambiguous rows highlighted, inline-edit dropdown for category + free-text note. Edits persist to localStorage.
3. **P&L Report** — Printable financial document. Income / Expenses sections, horizontal bars per line, subtotals, large Net profit row. "Download PDF" (browser print) + "Download CSV".
4. **VAT100 Draft** — HMRC-form-style boxes 1–9 with the highlight on Box 5. Stamp "Draft · not submitted". Footer disclaimer.
5. **Raw JSON** — Debug view of the last API response. Useful for prompt iteration.

### Data flow (single upload)

1. Open URL → passcode prompt → `/api/auth` → cookie set.
2. Drop file + fill setup form → click "Categorise" → `/api/categorise` (multipart).
3. Backend: upload file to Anthropic → call Messages → return JSON → delete file from Anthropic.
4. Frontend renders Transactions tab with response.
5. User edits ambiguous rows in place (no API calls during edit).
6. P&L and VAT100 tabs compute totals client-side from the current state.
7. Downloads / print client-side.
8. "Start over" wipes localStorage.

### Prompt iteration loop

The frontend caches the uploaded file as a `Blob` in memory (and a hash key in localStorage). When user clicks "Re-run on current statement" in the Prompt tab, we POST that same Blob along with the edited prompt — no re-upload from disk. Anthropic re-uploads to Files API server-side because Files API doesn't deduplicate, and that's fine for MVP cost.

## Data shape

```ts
type CategoriseResponse = {
  transactions: Transaction[];
  pl_summary: { [category: string]: number };
  vat_summary: {
    box_1_output: number;
    box_2_eu_acquisitions: number;
    box_3_total_due: number;
    box_4_input_reclaimed: number;
    box_5_net_to_pay: number;
    box_6_total_sales_ex_vat: number;
    box_7_total_purchases_ex_vat: number;
    box_8_eu_sales: number;
    box_9_eu_purchases: number;
  };
  warnings: string[];
  run_meta: { tokens_in: number; tokens_out: number; latency_ms: number; cost_usd: number };
};

type Transaction = {
  id: string;
  date: string;          // ISO YYYY-MM-DD
  merchant: string;
  amount: number;        // negative = outgoing
  category: string;      // from chart of accounts
  vat: number | null;    // GBP amount, null if not applicable
  vat_rate: 0 | 0.05 | 0.20 | null;
  ambiguous: boolean;
  reason?: string;       // why flagged
  suggestions?: string[];
};
```

Chart of accounts (system prompt):
> Sales income · Other income · Salaries · Pension contributions · Rent · Utilities · Office supplies · Equipment · Software & subscriptions · Travel & subsistence · Marketing · Professional fees · Telephone & internet · Bank charges · Repairs · Insurance · Personal · disallowable · Other (with required reason)

## Error handling

- **401 (auth)** — frontend redirects to passcode screen.
- **413 (file too large)** — toast: "File >10 MB; please trim or split."
- **502 (Anthropic API error)** — toast with "AI service unavailable, retry"; preserve user state.
- **503 (schema validation failed)** — toast "AI returned unexpected format; the prompt may need tightening." Show raw response in Raw JSON tab for debugging.
- **Network failure** — toast with retry button, preserve uploaded file in memory.

## Testing approach

Manual eval — this is a prototype, not a production feature.

1. **Test corpus** — collect 5–8 real UK SME bank statements (Lloyds, Starling, Tide, HSBC) covering common edge cases: clean B2B, mixed personal/business, EU vendors, refunds, payroll, recurring subscriptions.
2. **Eval pass** — for each statement, manually score AI output: % transactions correctly categorised, % VAT correctly extracted, % ambiguous flags appropriate.
3. **Prompt iterations** — tune system prompt against the eval corpus. Each prompt version saved as a preset.
4. **Cost log** — track tokens-in / tokens-out / cost per statement to estimate Flutter-app per-customer cost.

No unit tests for MVP. Schema validation is the only programmatic check.

## Stack & deployment

- **Frontend:** vanilla JS + native CSS, no framework. Single `index.html` with inlined styles + a few JS modules. Switzer + JetBrains Mono via Fontshare/Google Fonts (consistent with QPayments brand).
- **Backend:** Node.js Vercel serverless functions in `/api/`. `@anthropic-ai/sdk` for Claude. `@vercel/node` for runtime. No DB.
- **Repo:** new `qp-bookkeeping-lab` GitHub repo, **private**.
- **Vercel project:** connected to that repo, deploys on push to main. Env vars: `ANTHROPIC_API_KEY`, `ACCESS_PASSCODE`.
- **Domain:** `qp-bookkeeping-lab.vercel.app` (default Vercel subdomain, no custom domain for MVP).

## Open future-work (explicit non-MVP)

- Client-side CSV parsing → cheaper tokens (Approach B from brainstorming).
- Multi-file upload covering a full VAT quarter.
- Additional VAT schemes (Flat Rate, Cash Accounting).
- HMRC bridging integration (one-click MTD submission).
- Port logic to Flutter app, replace Vercel proxy with Q Payments mobile backend.
