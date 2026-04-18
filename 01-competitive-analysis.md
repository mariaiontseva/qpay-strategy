# 01. Competitive analysis

UK SMB fintech landscape as of April 2026. Data current to date of research; recheck before material decisions.

## Landscape summary

The UK SMB financial services market is fragmented into three clusters that increasingly overlap:

1. **Banking-first challengers** (Tide, Starling, Monzo, Revolut, ANNA, Countingup, Mettle): started as accounts, bolting on accounting and compliance features with uneven depth.
2. **Accounting-first incumbents** (Xero, QuickBooks, FreeAgent, Crunch): started with ledgers, integrating bank feeds but not running the money.
3. **Formation and legal specialists** (1st Formations, Rapid Formations, SeedLegals, Osome): own the incorporation moment and the cap table, rarely the day-to-day.

Two market-moving signals from the last 6 months:

- **Starling is closing its Business Toolkit in March 2026**, retreating to pure banking. That is the exit of the best-integrated banking-plus-bookkeeping product a UK Ltd could buy from a single provider. Customers will migrate to Xero or FreeAgent and maintain two vendors. This is a direct opening for us.
- **MTD for Income Tax Self Assessment goes live April 2026** for sole traders and landlords above £50,000 turnover, then £30,000 from April 2027. Directors with significant personal income (rent, self-employed side income) are now within scope. Every competitor is scrambling on MTD-ITSA. ANNA is using the change as its positioning wedge.

A third signal: ICO and FCA are both tightening rules on safeguarding (CASS 15 Supplementary Safeguarding Regime, effective 7 May 2026) and on customer fund real-time accountability. EMI entry is getting marginally harder; trust in authorised entities becomes more valuable.

---

## Direct competitors (UK SMB fintech)

### Tide

**Positioning:** "The UK's leading business financial platform."

**Target ICP and pricing:** Sole traders, micro-Ltd, growing small businesses. Four tiers:
- Free: £0/month, 20p per transfer after first 20.
- Smart: £12.99/month, 25 free transfers, priority support, 1 expense card.
- Pro: £24.99/month, unlimited free transfers, built-in accounting, 2 expense cards.
- Max: £69.99/month, 0.5% cashback, dedicated account manager.

FSCS protection up to £85,000 via partner bank.

**Core feature set:**
- Banking: GBP current account, debit cards, savings at up to 4% AER, FSCS via partner.
- Accounting: Tide Accounting (auto-categorisation, receipt capture, VAT return filing via MTD, Self Assessment helpers).
- Invoicing: create, send, track, automated reminders, payment matching.
- Integrations: Xero, QuickBooks, Sage, FreeAgent (two-way).
- Formation: yes, full company formation service with registered address options.
- Payroll: no native payroll module as of April 2026; routes users to partners.
- Cards: virtual and physical expense cards on paid tiers.
- Compliance: MTD-VAT and MTD-ITSA ready; no CT600; no Companies House filing beyond formation.

**Strengths:** Scale (800K UK members, 14% SMB market share), brand trust, full stack of account + formation + accounting, broad integration surface, strong brand marketing.

**Weaknesses:**
- Accounting is a light layer, not accountant-grade. No chart of accounts editing, no journal entries, no accruals-basis reporting.
- No native payroll. A UK Ltd with even one employee needs to bolt on BrightPay or PayFit.
- Dividend handling is absent. A director paying themselves a dividend gets no voucher, no board resolution, no reserves check, no integration with Self Assessment data.
- Personal accounts for directors: not integrated into the business account product. Directors still need a separate personal bank.
- Company formation is transactional; post-formation legal governance (share issues, resolutions) is not covered.

**UX signature:** Crisp mobile-first app, inbox-style "to-do" list on home screen, well-executed onboarding. Weakness: feature sprawl across tabs.

**Funding and traction:** $1.5B valuation September 2025 (TPG-led $120M round), $181M total raised, £190M annual revenue FY2024, 1.6M global SMEs including India and Germany.

**Notable screens:**
1. Home dashboard: account balance, recent transactions, quick actions, to-do list.
2. Invoice editor: line items, VAT rate selector, send-to-client flow.
3. Expense categorisation inbox: swipe-to-categorise interface.
4. VAT return review: nine-box summary with drill-down.
5. Company formation wizard: business type > director details > share allocation.

Sources: [Tide Business review (Statrys)](https://statrys.com/reviews/tide-business-account), [Tide pricing](https://www.tide.co/business-savings-account/), [TPG funding (Bloomberg)](https://www.bloomberg.com/news/articles/2025-09-22/tpg-leads-funding-for-uk-fintech-tide-at-1-5-billion-valuation), [Tide Accounting for VAT](https://www.tide.co/support/features/tide-accounting/how-do-i-use-tide-accounting-to-submit-my-vat-return/).

---

### ANNA Money

**Positioning:** "The Business Account That Does Your Taxes."

**Target ICP and pricing:** Solo founders, contractors, micro-Ltd, side-hustle Ltd. Three tiers:
- Pay As You Go: £0/month, 0.95% on incoming payments.
- Business: £19.90 + VAT/month.
- Big Business: £49.90 + VAT/month.

If unused in a month, you are not charged.

**Core feature set:**
- Banking: GBP current account, debit card.
- Accounting: receipt capture, VAT estimates, expense categorisation via AI "Auto Accountant".
- Tax: MTD-VAT free, MTD-ITSA free, Corporation Tax filing as paid add-on, Self Assessment as paid add-on.
- Payroll: optional add-on, not native.
- Invoicing: integrated, including chase-ups.
- Formation: company formation offered.
- Integrations: limited compared to Tide and Revolut.

**Strengths:** Tax-first positioning is clear and defensible, MTD-ITSA readiness, AI categorisation quality is notable, strong with accountants as a channel.

**Weaknesses:**
- Smaller scale, less brand trust in enterprise-y segments.
- Debit card acceptance and FX are weaker than Revolut or Wise.
- No native payroll still.
- Dividend flow is treated as a transaction, not as a workflow. No voucher, no resolution template, no reserves-distributable computation, no HMRC self-assessment handoff.

**UX signature:** Conversational AI-assistant style, mascot-led onboarding, "Done for you" framing.

**Funding and traction:** $88.3M total funding, £10M growth debt from Flashpoint December 2025, £30M ARR, 50,000+ active UK SME customers monthly, 550% CAGR.

**Notable screens:**
1. Chat-style tax summary ("You'll owe £X at the end of the year").
2. Auto-categorisation inbox with confidence indicators.
3. MTD-VAT submission screen.
4. Invoice tracking view.
5. "Taxes to file" dashboard.

Sources: [ANNA pricing](https://anna.money/pricing/), [ByteStart ANNA review](https://www.bytestart.co.uk/self-employed-bank-accounts/anna-money-business-account-mtd-filing/), [ANNA £10M funding](https://fintech.global/2025/12/19/uk-fintech-anna-money-secures-10m-debt-funding/).

---

### Revolut Business

**Positioning:** "The all-in-one business account for global business."

**Target ICP and pricing:** Internationally active UK SMEs, ecommerce, agencies with overseas suppliers. Four tiers (fee structure updated 16 December 2025, effective 17 February 2026):
- Basic: £10/month.
- Grow: £30/month.
- Scale: £90/month.
- Enterprise: custom.

**Core feature set:**
- Banking: GBP plus 25+ currencies held, exchange at interbank rates within plan allowance.
- Cards: physical and virtual, team cards with spending rules.
- Expense management: advanced on higher tiers, approvals, policies.
- Integrations: Xero, QuickBooks, Sage.
- Savings: from Grow tier, tiered interest.
- Invoicing: yes, basic.
- Accounting: categorisation and light P&L only; no VAT filing native.
- Payroll: no native, integrations only.

**Strengths:** Best multicurrency UX in the market, strong expense management controls, excellent card product, professional brand.

**Weaknesses:**
- UK Ltd-specific features are thin. Dividends, directors, board resolutions are invisible in the product.
- Accounting layer is light; no MTD-VAT filing, no CT600.
- Not FSCS-protected (e-money safeguarding only).
- Customer support reputation is mixed; churn for complex cases.
- Pricing climbs quickly past micro-Ltd stage (Scale at £90/month is a real commitment).

**UX signature:** Dense, dashboard-heavy, feels like a trading platform. Strong on data density, weaker on task flow for non-finance users.

**Funding and traction:** Publicly reported $45B+ valuation (group), hundreds of thousands of business customers globally, UK banking licence granted 2024 (mobilisation phase).

**Notable screens:**
1. Multi-currency account tiles on home.
2. Card controls with spending rules.
3. Team management with role-based permissions.
4. FX currency converter.
5. Spend analytics charts.

Sources: [Revolut Business plans](https://www.revolut.com/business/business-account-plans/), [Revolut Business review](https://www.revolut.com/blog/post/revolut-business-account-review/), [Scale fees](https://www.revolut.com/legal/business-scale-fees/).

---

### Starling Business (plus Toolkit)

**Positioning:** "The award-winning business account, now without the bookkeeping."

**Target ICP and pricing:** Sole traders and Ltd up to 4 owners. Business account is free. Business Toolkit was £7/month with one month free trial.

**Core feature set:**
- Banking: full UK bank licence, FSCS £85,000 protection, Faster Payments, Direct Debits, cheque imaging.
- Cards: debit.
- Toolkit (closing March 2026): invoicing, expense automation, VAT filing to HMRC, bill upload, multi-user accountant access.
- Integrations: Xero, QuickBooks.

**Strengths:** Bank licence (only challenger with one in this tier), strong reliability, excellent customer support reputation, FSCS protection at face value.

**Weaknesses:**
- Toolkit closure in March 2026 is the significant event in the UK SMB fintech market this year. Starling is consciously pulling back from the accounting layer. This creates churn-vulnerable customers.
- No Ltd-specific governance features.
- No formation service.
- Not optimised for multicurrency.

**UX signature:** Clean, calm, "boring-in-a-good-way" design language. Strong accessibility.

**Funding and traction:** Publicly reported profit, 900K+ business accounts historically, UK-only focus. Recent profit signals more disciplined than growth-chasing.

**Notable screens:**
1. Home account with balance and Spaces.
2. Payment initiation flow.
3. Toolkit invoicing editor (closing).
4. VAT return submission (closing).
5. Direct Debit management.

Sources: [Starling Business review (Statrys)](https://statrys.com/reviews/starling-business-account), [Toolkit closing (Starling Help)](https://help.starlingbank.com/business/topics/the-business-toolkit/), [Toolkit features](https://www.contractoruk.com/money/starlings_business_toolkit_banking_and_bookkeeping_one_place.html).

---

### Mettle (NatWest) with FreeAgent

**Positioning:** "A business account that pays for your accounting software."

**Target ICP and pricing:** Sole traders and Ltd with up to two owners. Free forever, no transaction fees. FreeAgent included if one transaction per month.

**Core feature set:**
- Banking: GBP current account, debit card, savings pot at 0.95% AER.
- Accounting: FreeAgent bundled (covered below).
- Mettle+: optional paid quotes feature.
- Payroll: via FreeAgent.

**Strengths:** Free and bundled with the best Ltd-focused accounting software in the UK. Owned by NatWest, institutional trust. Good for single-director Ltds.

**Weaknesses:**
- Caps at two owners. Any Ltd with three or more shareholders is excluded.
- No formation service.
- Mettle UX is "functional" rather than delightful; feels like a thin wrapper around a traditional core.
- Dividends handled in FreeAgent, not in Mettle; two apps for one workflow.
- Limited expense management and team features.

**UX signature:** Utilitarian, bank-like, less polished than Starling or Monzo.

**Funding and traction:** Part of NatWest Group (public). Customer numbers not separately disclosed but well under 200K.

**Notable screens:**
1. Home with balance and FreeAgent CTA.
2. FreeAgent embedded dashboard.
3. Simple payment flow.
4. Savings pot.
5. Switch-to-FreeAgent ad panel.

Sources: [Mettle FreeAgent features](https://www.mettle.co.uk/features/freeagent/), [FreeAgent for Mettle](https://www.freeagent.com/mettle/).

---

### Countingup

**Positioning:** "The business account that automates accounting."

**Target ICP and pricing:** Sole traders and very small Ltds. Deposit-tiered:
- Up to £750/month deposits: £3/month.
- £750-£7,500/month: £9/month.
- Unlimited: £18/month.

First 3 months free. 30p per transfer in or out, 3% cash deposit via PayPoint, £1 ATM.

**Core feature set:**
- Banking: GBP account, debit card.
- Accounting: SmartTax AI, real-time P&L, tax pots.
- Receipt capture, invoicing, payment links.
- Accountant dashboard.
- No multicurrency, no formation, no payroll.

**Strengths:** Focused product, accountant dashboard is a differentiator, deposit-tier pricing is accessible for tiny businesses.

**Weaknesses:**
- Per-transaction fees are punitive for any real business (30p per Direct Debit is painful).
- Very small scale, limited ecosystem.
- No Ltd governance features.
- Product has not evolved rapidly in the last 12 months.

**UX signature:** Simple, "for non-accountants" tone.

**Funding and traction:** Smaller scale than Tide or ANNA. Acquired growth slowed.

Sources: [Countingup pricing (Finder)](https://www.finder.com/uk/business-banking/countingup-review), [Countingup features](https://countingup.com/).

---

### Monzo Business

**Positioning:** "Modern business banking for any business."

**Target ICP and pricing:** Sole traders and Ltd directors. Three tiers:
- Lite: £0/month.
- Pro: £9/month (invoicing, accounting integration).
- Team: £25/month (expense cards, spending limits, permissions).

**Core feature set:**
- Banking: full UK bank licence, FSCS £85,000, Mastercard debit.
- Pots including Tax Pots.
- Accounting: categorisation, integrations with Xero, QuickBooks, FreeAgent.
- Invoicing on Pro.
- Payroll: no native.
- Formation: no.
- Multicurrency: limited.

**Strengths:** Full bank licence, strong consumer brand crossover, excellent mobile UX, Tax Pots are a small but well-loved feature.

**Weaknesses:**
- Business product feels underinvested vs personal. Reputation is "Monzo personal in a business wrapper".
- No Ltd-specific features (no dividend workflow, no resolutions).
- No formation, no payroll, no native VAT filing.

**UX signature:** Signature Monzo minimalism, Hot Coral branding, conversational tone.

**Funding and traction:** Publicly disclosed unicorn status (Monzo Group), IPO chatter. Business account customer base smaller than personal (hundreds of thousands).

Sources: [Monzo Business plans](https://monzo.com/business-banking/plans-pricing), [Monzo Business review (Airwallex)](https://www.airwallex.com/uk/blog/monzo-business-account-review).

---

## Adjacent competitors (accounting-first or formation-first)

### Xero (accounting incumbent)

**Positioning:** "Beautiful business."

**Target ICP and pricing:** Small businesses served via accountants, 1-50 employees. UK plans:
- Starter: £16/month (20 invoices, 10 bills).
- Standard: around £33/month.
- Premium: around £47/month (multi-currency).
- Ultimate: £65/month.

**Core feature set:**
- Full double-entry accounting, chart of accounts, journal entries.
- Bank feeds from most UK banks.
- Invoicing, expenses, payroll (paid add-on), multi-currency.
- VAT filing via MTD.
- Strong developer ecosystem and app marketplace.

**Strengths:** Accountant ubiquity (50%+ of UK accountants standardised on it), depth of accounting, marketplace of 1,000+ integrations, multi-currency.

**Weaknesses:**
- Not a bank. No account, no cards.
- UX is showing age vs modern fintechs; more suited to bookkeepers than founders.
- Steep learning curve for non-finance users.
- Payroll is a separate subscription on top.

**UX signature:** Traditional SaaS dashboard, "accountant-friendly", dense forms.

**Funding and traction:** Public (ASX: XRO), 4M+ global subscribers, heavy UK penetration.

Sources: [Xero UK pricing](https://www.xero.com/uk/pricing-plans/), [Xero review 2026 (Startups)](https://startups.co.uk/accounting/xero-review/).

---

### FreeAgent

**Positioning:** "Accounting software for UK limited companies and contractors."

**Target ICP and pricing:** UK Ltd directors, sole traders, contractors, landlords. Free via NatWest/RBS/Ulster/Mettle (if one transaction/month). Otherwise around £19-£29/month.

**Core feature set:**
- Full accounting, built for UK tax rules.
- Dividend tracking and vouchers (the best in the market here).
- Director salary computation.
- Corporation Tax estimation and timeline.
- Self Assessment data prep.
- RTI-compliant payroll included.
- VAT filing via MTD.
- Bank feeds and integrations.

**Strengths:** Deepest Ltd-specific accounting product in the UK. Dividend handling is the reference implementation. Payroll included. Owned by NatWest, so it is not going away. Favoured by UK-focused accountants.

**Weaknesses:**
- Not a bank. Always paired with a separate account (increasingly Mettle).
- UX is dated, feels 2015.
- Limited international capability.
- Plans are not always transparent until you are in the wizard.

**UX signature:** Classic accounting tool, timeline-based dashboard, tax timeline is signature.

**Funding and traction:** Acquired by NatWest in 2018. Over 200K UK subscribers (estimate based on Mettle bundling and direct).

Sources: [FreeAgent for Ltd (goforma)](https://www.goforma.com/freeagent/freeagent-accounting-software), [FreeAgent pricing](https://www.freeagent.com/pricing/).

---

### QuickBooks Online UK

**Positioning:** Global accounting incumbent.

**Target ICP and pricing:**
- Sole Trader: £10/month (after introductory £1).
- Simple Start: £16/month.
- Essentials: around £33/month.
- Plus: £56/month.
- Advanced: £115/month.

**Core feature set:** Full accounting, VAT filing, invoicing, inventory (Plus+), multi-currency (Essentials+), payroll add-on.

**Strengths:** Global footprint, automation features, strong mobile app, Intuit brand.

**Weaknesses:**
- Not a bank.
- UK-specific Ltd features are shallower than FreeAgent's.
- Repeated price increases have caused user backlash.
- UI feels "Americanised" despite UK localisation.

Sources: [QuickBooks UK pricing](https://quickbooks.intuit.com/uk/pricing/).

---

### Crunch

**Positioning:** "Online accountants with powerful software."

**Target ICP and pricing:** Contractor and small Ltd who want a human accountant included.
- Limited Company Pro: £90/month (+ VAT).
- Limited Company Premium: £137/month (+ VAT).

**Core feature set:** Accounting software plus a bundled accountant for year-end, Corporation Tax, Companies House filings, payroll for directors, VAT.

**Strengths:** Includes a human, filings handled end-to-end, strong in contractor segment.

**Weaknesses:**
- Expensive at the top tier.
- Software is serviceable, not a wedge.
- Not a bank.
- The model is people-plus-software; we can compete by replacing the people-part with software for simpler cases.

Sources: [Crunch pricing](https://www.crunch.co.uk/pricing).

---

### Osome

**Positioning:** "All-in-one: accounting, tax, and company registration."

**Target ICP and pricing:** Micro-Ltd with some international exposure. Accounting from £71/month (billed annually). Formation from £289 + VAT. Add-ons: registered address £100/year, VAT registration £50, PAYE registration £50, confirmation statement £100/year.

**Core feature set:** Bookkeeping, VAT, company secretarial, formation, payroll as add-on. Concierge-style human support.

**Strengths:** True all-in-one positioning (closest to our vision), global reach (Singapore, Hong Kong, UK).

**Weaknesses:**
- Not a bank.
- Pricing adds up quickly with add-ons.
- Scale smaller than Tide or ANNA.
- Reviews flag service quality as uneven.

Sources: [Osome UK pricing (Capterra)](https://www.capterra.co.uk/software/1013425/osome), [Osome formations](https://osome.com/uk/register-a-company/).

---

### SeedLegals

**Positioning:** "The UK's #1 legal platform for startups."

**Target ICP and pricing:** Ltd with shareholders, especially post-first-round or pre-raise.
- Options: £2,490/year unlimited.
- Bootstrap and Seed Round packages: priced per round.
- Exit/M&A: 1% of exit price up to £500K, sliding scale down to 0.05%, minimum £1,990 + VAT.

**Core feature set:** Shareholders agreements, SeedFAST, options schemes, board resolutions, articles, cap table.

**Strengths:** Only serious automated legal platform for UK startups, excellent content, strong brand in founder community.

**Weaknesses:**
- Not a bank, not an accounting tool.
- Pricing is round-based, so non-raising Ltds find it expensive for basics.
- Does not handle the money movement, only the paper.

Sources: [SeedLegals pricing](https://seedlegals.com/pricing/), [Shareholders Agreement guide](https://seedlegals.com/resources/shareholder-agreement/).

---

### 1st Formations and Rapid Formations

**Positioning:** Fast, cheap UK company formation.

**Pricing:** Agent fees from £2.99 + VAT + £100 Companies House fee (digital fee rose from £50 to £100 on 1 February 2026). All-inclusive packages around £148-£208.

**Core feature set:** Formation, registered address, articles, share certificate, director and shareholder set-up, mail forwarding add-on.

**Strengths:** Cheapest incorporation in the UK, Trustpilot 4.8-4.9, fast same-day delivery.

**Weaknesses:**
- Transactional. No ongoing relationship. Customers disperse to other providers for everything else.
- UX is classic e-commerce checkout, not a platform.
- Cannot be the anchor of a long-term relationship.

Sources: [1st Formations vs Rapid Formations (Truescho)](https://truescho.com/en/blog/best-uk-company-formation-agents-comparison-2026), [Companies House fees change](https://www.rapidformations.co.uk/blog/companies-house-fees-increase/).

---

## International benchmarks

### Wise Business

Best-in-class for multicurrency. No monthly fee, £45 one-time Advanced setup. Strong international receive-and-pay product. No accounting layer, no UK Ltd governance, not our direct competitor but a reference for FX UX and pricing transparency. Sources: [Wise Business pricing](https://wise.com/gb/pricing/business).

### Qonto (EU, not UK)

Reference for accounting-depth-on-top-of-banking; UK launch not live as of April 2026. €9-€249/month across Freelancer, VSE, SME tiers. If they launch here, they will be a direct competitor. Sources: [Qonto pricing](https://qonto.com/en/pricing).

### Juni (ecommerce niche)

UK-available multicurrency with credit lines up to £2M. Free tier, 2% cashback 30 days. Reference for how a vertical-specific business account product can stack: deep integrations with ecommerce tools, not general-purpose accounting. Sources: [Juni review (Finder)](https://www.finder.com/uk/business-banking/juni-business-account).

### Mercury (US)

Signature example of a high-quality founder-focused business account UX. $0 monthly fee, read-write API, excellent multi-bank sweep FDIC coverage. Reference for bar-raising on founder UX. Not in UK market. Sources: [Mercury review (NerdWallet)](https://www.nerdwallet.com/business/banking/reviews/mercury-banking).

---

## Feature matrix

Legend: ✓ = shipped and solid, ~ = partial/light, ✗ = not available, ○ = via bundled partner.

| Feature | Tide | ANNA | Revolut B | Starling | Mettle+FA | Countingup | Monzo B | Xero | FreeAgent | QBO | Crunch | Osome | SeedLegals | 1st Formations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| UK current account (GBP) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| FSCS £85k protection | ✓ | ✗ | ✗ | ✓ | ✓ | ✗ | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| Debit card | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| Expense cards for team | ✓ | ~ | ✓ | ~ | ✗ | ✗ | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| Multicurrency accounts | ~ | ✗ | ✓ | ✗ | ✗ | ✗ | ~ | ○ | ~ | ~ | ✗ | ~ | ✗ | ✗ |
| Company formation | ✓ | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ~ | ✓ | ✗ | ✓ |
| Registered address + mail | ✓ | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ~ | ✓ | ✗ | ✓ |
| Directors' personal accounts linked | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| Dividend payment with voucher | ✗ | ✗ | ✗ | ✗ | ○ (FA) | ✗ | ✗ | ~ | ✓ | ~ | ✓ | ~ | ~ | ✗ |
| Board resolution generator | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ~ | ✗ | ~ | ~ | ✓ | ✗ |
| Shareholders agreement | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ~ | ✓ | ~ |
| Distributable reserves check | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ~ | ✓ | ~ | ✓ | ~ | ✗ | ✗ |
| Chart of accounts (editable) | ✗ | ~ | ✗ | ✗ | ✓ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ |
| Journal entries | ✗ | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ |
| VAT filing (MTD) | ✓ | ✓ | ✗ | ○ | ✓ | ~ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ |
| MTD-ITSA (Apr 2026) | ✓ | ✓ | ✗ | ✗ | ✓ | ~ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ |
| CT600 preparation | ✗ | ~ | ✗ | ✗ | ~ | ✗ | ✗ | ~ | ✓ | ~ | ✓ | ✓ | ✗ | ✗ |
| Year-end accounts draft | ✗ | ~ | ✗ | ✗ | ~ | ✗ | ✗ | ~ | ✓ | ~ | ✓ | ✓ | ✗ | ✗ |
| Companies House confirmation statement | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ | ✓ | ~ | ~ |
| Companies House share/persons filings | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ~ | ~ | ✓ | ~ |
| Payroll + RTI | ✗ | ~ add-on | ✗ | ✗ | ✓ (FA) | ✗ | ✗ | ○ | ✓ | ○ | ✓ | ~ | ✗ | ✗ |
| P11D benefits | ✗ | ✗ | ✗ | ✗ | ~ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ~ | ✗ | ✗ |
| Receipt capture | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ~ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ |
| Invoicing + payment links | ✓ | ✓ | ✓ | ~ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ |
| Accountant portal | ✓ | ~ | ✓ | ~ | ✓ | ✓ | ~ | ✓ | ✓ | ✓ | ✓ | ~ | ~ | ✗ |
| Insurance marketplace | ✓ | ~ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| Compliance calendar (CH + HMRC) | ~ | ~ | ✗ | ✗ | ~ | ~ | ✗ | ~ | ✓ | ~ | ✓ | ~ | ~ | ✗ |
| Document vault | ~ | ~ | ✗ | ✗ | ~ | ~ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ |
| Lending / credit | ~ | ~ | ~ | ~ | ✗ | ✗ | ~ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |

**The striking row: "Directors' personal accounts linked" has zero checks across the entire UK market.** No one has built the personal-account-for-the-director inside the business account product. This is the core of our wedge.

The second striking observation: the only providers that do dividend vouchers properly are the accounting-first ones (FreeAgent, Xero, Crunch, Osome). Not a single banking-first provider does this.

---

## Positioning map

Two axes: **banking depth** (left = thin, right = deep: full account, cards, expense management, FSCS, multicurrency) vs **accounting depth** (top = deep: double-entry, journals, CT600, MTD, statutory accounts; bottom = thin).

```
                            ACCOUNTING DEPTH (high)
                                     |
                          Xero ·  FreeAgent · Crunch · Osome
                                     |
                                     |                        
                                     |          ← our target
                                     |          (deep both,
                                     |           plus UK-Ltd wedge)
                    Countingup ·     |
                            ANNA ·   | · Tide Pro/Max
                                     |
                  ────────────────────────────────────────
  Banking thin                       |                   Banking deep
                                     |
                    Starling (post-Mar 2026)  ·  Monzo · Revolut B · Wise
                                     |
                                     |
                            ACCOUNTING DEPTH (low)
```

Tide sits in the upper-middle-right but is held back by accounting shallowness. Xero and FreeAgent sit top-left, strong on accounting and nil on banking. The **upper-right quadrant is empty** in the UK. That is the quadrant we are targeting, with the additional wedge of director/shareholder governance that no one else has at all.

---

## Gap analysis: top 10 things no competitor does well for UK Ltd directors and shareholders

1. **A dividend payment as a complete workflow, in a bank account.** Competitors treat a dividend as either a transaction (banking-first: you initiate a transfer and the world catches up) or an accounting event (accounting-first: you record a dividend and reconcile the movement later). Nobody does: check distributable reserves → draft board resolution → generate dividend voucher with shareholder splits → pay each shareholder to their personal account → archive the voucher → store the Self Assessment data. This is the heart of our hero flow.
2. **Directors' personal accounts linked to the business account.** Zero competitors offer a linked personal account for directors. Directors today use a separate personal bank. The result: dividends move to an external account; the reconciliation and tax treatment are managed separately from the business view. We close the loop by hosting both sides of the transfer.
3. **Distributable reserves calculation in real time.** Dividends can legally only be paid from retained profits. Today this is an accountant call at year-end. We can surface this in the app and block or warn on illegal dividends.
4. **Auto-generated compliant board resolutions.** SeedLegals does this well for funding events. No one does it for routine events (dividend declaration, director appointment, bank mandate change). A Ltd board does dozens of resolutions a year; they are overwhelmingly done on Word templates or not at all.
5. **A live cap table tied to Companies House filings.** SeedLegals has cap tables; none of the banking-first products do. Shares issued, transferred, converted, with automatic PSC and confirmation-statement implications, would sit perfectly next to the business account.
6. **Shareholders agreement that is not round-based.** SeedLegals pricing is round-oriented; many early-stage Ltds just need a basic agreement between co-founders. There is an untapped wedge for a lower-price, more founder-friendly offering.
7. **P11D and director benefit tracking.** Directors' benefits (car, medical, loans to director) are under-tracked. Year-end scramble is common. Real-time tracking in-app is a genuinely useful differentiator.
8. **Companies House filings beyond confirmation statements.** None of the banking-first apps file PSC changes, director appointments, share allotments, or articles amendments. Yet all of these events happen via the company's bank account lifecycle in one way or another.
9. **CT600 preparation with real-time estimate and a route to submission.** Tide and ANNA will get there; FreeAgent has the best version; no one has combined it with bank-first UX. CT600 filing remains paper-heavy or accountant-intermediated.
10. **A compliance calendar that actually triggers actions rather than notifications.** Every competitor has a "things to file" view. None has an action-first flow: "VAT due in 7 days: review draft, click to file." The calendar exists, the one-click-action-from-calendar does not.

---

## Pricing analysis

**Banking-first competitors:**

| Product | Entry tier | Mid tier | Top tier | Notes |
|---|---|---|---|---|
| Tide | £0 | £12.99 | £69.99 | Transfers chargeable on free plan |
| ANNA | £0 | £19.90+VAT | £49.90+VAT | 0.95% on incoming on free |
| Revolut Business | £10 | £30 | £90+ | Enterprise tier custom |
| Starling | £0 | - | - | Toolkit was £7 (closing Mar 2026) |
| Mettle | £0 | - | - | FreeAgent included |
| Countingup | £3 | £9 | £18 | Deposit-tiered, 30p per transfer |
| Monzo Business | £0 | £9 | £25 | Pro adds accounting |

**Accounting-first competitors:**

| Product | Entry | Mid | Top |
|---|---|---|---|
| Xero | £16 | £33 | £47-65 |
| FreeAgent | Free (via NatWest/Mettle) or ~£19-29 | - | - |
| QuickBooks Online | £10 | £33 | £115 |
| Crunch | £72-£90 (6m intro) | - | £137 (Premium) |
| Osome | £71 (annual) | - | Custom |

**Formation and legal:**

| Product | Entry | Notes |
|---|---|---|
| 1st Formations | £2.99 + £100 CH | Transactional |
| Rapid Formations | £2.99 + £100 CH | Transactional |
| SeedLegals | £2,490/yr (options) | Plus round-based |

**Inference for our pricing:** The £20-£30/month tier is a well-anchored mid-price; £50-£70 is the top-tier threshold before resistance. Bundled value-for-money at £29-£49/month, delivering account plus formation plus accounting plus dividend/resolution tooling, is the price point where we win on pure feature count against everyone below Crunch. Crunch at £90-£137 is the ceiling from below, and we should sit beneath it.

---

## Three specific threats from incumbents

1. **Tide closes the accounting gap.** Tide has the distribution, cash (TPG), engineering bandwidth, and incentive to layer real accounting on top. If they launch chart-of-accounts-grade bookkeeping and dividend vouchers in 2026, the "banking deep plus accounting deep" quadrant closes. Mitigation: get to market first, win the Ltd-governance narrative (shareholders, dividends, personal accounts), become the reference implementation before Tide shows up.

2. **FreeAgent plus Mettle refactor into a single app.** NatWest owns both. If they merge the experience (already tentatively integrated), the FSCS-protected, FreeAgent-depth, bank-bundled proposition becomes extremely strong for the solo-director-Ltd segment. Mitigation: serve the 3+ shareholder Ltds that Mettle excludes, and build multi-director governance features that FreeAgent is too long-in-the-tooth to modernise quickly.

3. **Qonto enters the UK.** Qonto is currently EU-only but is capitalised and has signalled UK interest. Their accounting-plus-banking model in the EU is the closest to our intended product. Mitigation: lock in Q Accountants channel and Ltd-specific hooks before Qonto gets regulatory approval in the UK.

## Three specific openings we should exploit

1. **Starling Toolkit closure creates a displaced cohort**, March 2026 onward. Starling users who used Toolkit for invoicing, VAT filing, and bookkeeping now face a choice: keep Starling and add Xero/FreeAgent, or switch. A targeted migration offer ("Keep your Starling account, add our Ltd governance layer" or "Switch to us, one app") is a cheap acquisition channel. Time-bounded window: roughly Q2-Q3 2026.

2. **MTD for Income Tax Self Assessment (April 2026) hits directors with any side income above £50,000**, and hits the Ltd+landlord cohort particularly hard. Building MTD-ITSA into our directors' personal accounts (so dividend income flows automatically into the director's own MTD-ITSA filing) is an entirely new product category no one has built. ANNA is closest but does not link to a directors' personal account because they do not have one.

3. **Q Accountants distribution and the accountant-led channel.** Every other fintech fights retail acquisition channels (Google, Facebook, TV). We can let an accounting firm do the hand-off. The economics change dramatically: CAC measured in tens of pounds per customer rather than low hundreds. Over 18 months, a serious Q-led programme can deliver low-thousands of Ltds with post-onboarding retention profiles far above retail cohorts.

---

## Synthesis

The UK SMB fintech market is mature at banking-first (seven credible players), saturated at accounting-first (Xero, FreeAgent, QBO dominate), and underdeveloped at the **intersection of both, with UK-Ltd-specific governance hooks**. Tide is the closest to our position, but Tide's accounting is intentionally light and its Ltd governance is non-existent.

The hero wedge is the dividend-director-shareholder workflow combined with FSCS-style trust (via EMI, not full bank, initially) and a compliance calendar that actually acts. No one owns this position. The chance is to own it before Tide (the most likely challenger) closes the gap.

Q Accountants distribution compounds this advantage because accountants care about the governance layer more than the account layer: an accountant does not care whether the bank is Tide or Mettle, but they care intensely about whether dividend vouchers are compliant and whether Corporation Tax is correctly computed. A product that makes their life easier while delivering banking is exactly the product an accountant will recommend.
