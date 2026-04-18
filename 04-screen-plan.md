# 04. Information architecture and screen plan

Three surfaces: mobile app (primary daily driver), web app (deeper workflows), accountant portal (multi-client). Each covered below.

---

## Mobile app

### Sitemap

```
Home (dashboard)
├── Accounts
│   ├── Business (primary)
│   ├── Business EUR / USD (V2)
│   └── My personal (director-linked)
├── Money
│   ├── Send
│   ├── Request / Invoices
│   ├── Direct Debits
│   └── Standing orders
├── Books
│   ├── Inbox (uncategorised)
│   ├── Reports
│   │   ├── P&L
│   │   ├── Balance sheet
│   │   └── Cash flow
│   └── Reconciliation
├── Taxes and filings
│   ├── Compliance calendar
│   ├── VAT
│   ├── Corporation Tax (V2+)
│   ├── PAYE (V2+)
│   └── Self Assessment data (personal)
├── Company
│   ├── Directors
│   ├── Shareholders
│   ├── Cap table
│   ├── Dividend
│   ├── Documents
│   ├── Resolutions (V2+)
│   └── Details (name, address, SIC)
├── Cards
│   ├── My cards
│   ├── Team cards (V2)
│   └── Spending controls (V2)
└── Settings
    ├── Profile
    ├── Security
    ├── Accountants (invited)
    └── Plan and billing
```

### Navigation model

**Five-tab bottom bar:** Home, Money, Books, Company, More.

Rationale: the first three tabs map to daily actions (check balance, move money, reconcile). The fourth tab ("Company") is the hero — it is where dividends, resolutions, cap table, and statutory documents live. Putting it in the main bar is a positioning statement. "More" catches Cards, Taxes, Settings.

Cards and Taxes live under More at MVP (tab bar has limited slots). In V2, consider promoting Taxes to a standalone tab as usage grows with MTD-ITSA adoption.

### Key flows as user journey steps

**Onboarding and formation:**
Welcome → Business type → New company or existing → Directors setup → Share allocation → Registered address → Account provisioning → Card ordering → Success → Home

**Dividend payment:**
Home → Company tab → Dividend → Check reserves → Amount → Shareholders split → Resolution preview → Voucher preview → Confirm → Payment execution → Success with archive link

**Monthly books reconciliation:**
Home notification ("23 to categorise") → Books → Inbox → Categorise each (AI suggestion + override) → Attach receipt → VAT flag → Reconciled state → Month-end close

**VAT return:**
Home card ("VAT due in 14 days") → Taxes → VAT → Review boxes → Adjustments → Optional accountant review → Submit → HMRC receipt → Archive

### Mobile screen inventory (MVP: 38 screens)

Each numbered and identified below. Detailed specs follow for priority flows.

1. ONB-01 Welcome
2. ONB-02 Business type (new Ltd / existing Ltd / sole trader)
3. ONB-03 Director details (you)
4. ONB-04 Director KYC capture
5. ONB-05 Additional directors
6. ONB-06 Company name search (for new Ltd)
7. ONB-07 SIC code selection
8. ONB-08 Share allocation
9. ONB-09 Registered address choice
10. ONB-10 Memorandum and articles
11. ONB-11 Companies House submission confirmation
12. ONB-12 Account provisioning (KYC result)
13. ONB-13 Card ordering
14. ONB-14 First deposit CTA
15. ONB-15 Onboarding success
16. HOM-01 Home dashboard
17. ACC-01 Business account detail
18. ACC-02 Personal account detail (director)
19. MON-01 Send money (intra-UK)
20. MON-02 Invoice create
21. MON-03 Invoice detail
22. MON-04 Invoices list
23. MON-05 Direct Debits
24. BKS-01 Inbox (uncategorised transactions)
25. BKS-02 Transaction detail and categorise
26. BKS-03 Receipt attach
27. BKS-04 Reports (P&L, BS)
28. BKS-05 Reconciliation view
29. CMP-01 Company home (directors, shareholders, cap table links)
30. CMP-02 Cap table
31. CMP-03 Directors list
32. CMP-04 Shareholders list
33. DIV-01 Dividend start (reserves check)
34. DIV-02 Dividend amount entry
35. DIV-03 Dividend allocation (by shareholding)
36. DIV-04 Board resolution preview
37. DIV-05 Voucher preview
38. DIV-06 Dividend confirm and pay
39. DIV-07 Dividend success and archive link
40. DOC-01 Document vault list
41. DOC-02 Document detail and share
42. TAX-01 Compliance calendar
43. TAX-02 VAT return list
44. TAX-03 VAT return review
45. TAX-04 VAT submission confirm
46. TAX-05 VAT submission receipt
47. CRD-01 My cards
48. CRD-02 Card detail and freeze
49. STG-01 Settings
50. STG-02 Accountant invitations

That is 50 core screens (I listed more than the planned 38 once detail was considered; treat 50 as the realistic MVP screen count).

Add ~10 utility screens (loading, error, empty, SCA challenge, transaction search, etc.) to arrive at approximately 60 screens for MVP.

---

## Web app

### Sitemap (web adds to mobile, not replaces)

Web has the same areas but deeper surfaces for:

- Bookkeeping: journals, manual adjustments, multi-row bulk categorisation, bank rules, chart of accounts editing.
- Reports: custom report builder, drilldown tables.
- Tax: CT600 draft review (V2+).
- Cap table: share class editor, transfer recording.
- Documents: bulk export, version history.
- Accountant portal entry points (if the user is an accountant).

### Navigation model

Left sidebar with the same sections as mobile bottom bar. Top bar has company switcher (if the user has more than one Ltd), search, and SCA action indicator.

### Web-only screens at MVP (approximately 15)

1. Journal entry editor
2. Chart of accounts editor
3. Bank rule builder
4. Bulk categorisation
5. Report builder
6. Custom P&L / BS drilldown
7. Cap table detailed editor
8. Shareholder register export
9. Document version history
10. Accountant invitation admin
11. Permissions and roles editor
12. Plan and billing
13. API keys (V3)
14. Company settings full
15. Integrations hub (V2+)

---

## Accountant portal

### Sitemap

```
Portal home (all clients overview)
├── Clients
│   ├── [Client Ltd 1]
│   │   ├── (Mobile/web surfaces for that Ltd, read/write per permissions)
│   │   └── Accountant-only review queue
│   ├── [Client Ltd 2]
│   └── ...
├── Tasks
│   └── Pending categorisations / reviews across clients
├── Deadlines (all clients)
├── Reports (multi-client)
└── Settings
    ├── Practice details
    ├── Team members
    └── Client invitations
```

### Navigation model

Left sidebar with Clients at top (client switcher). Within a client, the accountant sees the full set of client-side screens plus an accountant-only layer: a review queue for proposed categorisations, draft VAT/CT returns awaiting client approval, journal entry adjustments.

### Key flows

- **Multi-client overview:** one screen, all clients, aggregated deadlines, risk flags (missing categorisations, unreconciled transactions, upcoming filings).
- **Client deep-dive:** click into a client, enter their workspace.
- **Cross-client bulk actions (V3):** "Run VAT review for all quarterly clients this month."

---

## Priority flows: detailed screen specifications

### Flow 1: Onboarding and company formation

**User story:** A founder opens the app to incorporate their first Ltd and set up the business account in one session.

#### ONB-01 Welcome
- **Purpose:** Set context, explain the core promise, initiate sign-up.
- **User intent:** "Is this for me?"
- **Key content:** One-line headline ("The only UK business account built for Ltd"), three benefit bullets, "Start a Ltd" and "Add an existing Ltd" CTAs.
- **Actions:** Start new Ltd (primary), Add existing Ltd (secondary), Sign in (tertiary).
- **Data sources:** None.
- **States:** No error/empty; loading minimal.
- **Permissions:** Public.
- **Responsive:** Mobile portrait; web equivalent at larger size.
- **Accessibility:** VoiceOver on headline, CTA labels explicit.

#### ONB-02 Business type
- **Purpose:** Branch into flows for new Ltd, existing Ltd, or sole trader.
- **Key content:** Three tappable cards: "I am incorporating a new Ltd now", "I already have a Ltd and want to switch", "I am a sole trader" (leads to a lighter tier at MVP; exits if not supported at launch).
- **Actions:** Select one.
- **Permissions:** Public.

#### ONB-03 Director details (you)
- **Purpose:** Capture the first director (almost always the current user).
- **Key content:** Full name, date of birth, nationality, service address (can be our registered address service), occupation.
- **Actions:** Next, Add later.
- **Data sources:** None.
- **Error states:** Inline validation on DOB (must be 16+, Companies House requirement).

#### ONB-04 Director KYC capture
- **Purpose:** Perform identity verification on the director.
- **Key content:** Instructions for ID (passport, driving licence, or national ID), selfie liveness, proof of address.
- **Actions:** Camera capture, re-capture.
- **Data sources:** KYC provider (Onfido).
- **Loading state:** Upload and verification in progress; realistic 30-90 seconds.
- **Error states:** Blur, over-exposure, document expired.
- **Permissions:** Authenticated (partially; account is being created).

#### ONB-05 Additional directors
- **Purpose:** Add co-directors if any.
- **Key content:** List starting empty, "Add another director" button, each director invited by email to complete their own KYC.
- **Actions:** Add, Skip.
- **Note:** Additional directors complete KYC on their own device; company formation can proceed conditionally.

#### ONB-06 Company name search
- **Purpose:** Pick a name that is available at Companies House.
- **Key content:** Search field with real-time availability check against CH API; suggests alternatives on collision.
- **Actions:** Accept name.
- **Data sources:** Companies House name availability API.
- **Error states:** Name too similar to existing, disallowed words.

#### ONB-07 SIC code selection
- **Purpose:** Choose one or more SIC codes describing the business.
- **Key content:** Search, category tree, plain-English descriptions beside code. Recommended codes surfaced based on a short question ("What does your business do?").
- **Actions:** Select up to 4 SIC codes.
- **Data sources:** SIC code list.

#### ONB-08 Share allocation
- **Purpose:** Define shares and allocate them to founding shareholders.
- **Key content:** Number of shares, nominal value per share (default £1), allocation table by director/shareholder, class (default "Ordinary"). Clear explanation: "You own X% by holding Y shares."
- **Actions:** Add shareholder, Edit allocation, Confirm.
- **Data sources:** Directors from ONB-05.
- **Error states:** Total shares do not reconcile, allocation exceeds 100%.

#### ONB-09 Registered address choice
- **Purpose:** Pick a registered office.
- **Key content:** Three options: use our registered address service (default, featured), use your own address, use a third party address. Explanation of mail-forwarding.
- **Actions:** Select.
- **Data sources:** Our address estate.
- **Pricing note:** Registered address is bundled in founder plan; if bring-your-own, still allowed but no mail-forwarding.

#### ONB-10 Memorandum and articles
- **Purpose:** Confirm use of model articles or upload custom.
- **Key content:** "Use model articles (recommended)" by default; link to review or download; option to upload custom (shown but low-friction warning that custom delays incorporation).
- **Actions:** Accept and continue, Upload custom.

#### ONB-11 Companies House submission confirmation
- **Purpose:** Summary before submission; terms acceptance.
- **Key content:** All entered data for review, terms of service, authorised-agent acknowledgement, fee disclosure (£100 CH fee + our fee).
- **Actions:** Submit to Companies House.
- **Data sources:** Companies House Filing API.
- **Loading state:** "Submitting to Companies House..." (usually 1-3 minutes for digital incorporation).
- **Success:** Company number returned; pass to ONB-12.

#### ONB-12 Account provisioning
- **Purpose:** Open the business account now that the Ltd exists.
- **Key content:** Account-opening form (mostly pre-filled from Ltd data), additional AML questions (source of funds, expected activity, business purpose).
- **Actions:** Open account.
- **Data sources:** BaaS partner account API.
- **Loading state:** 10-30 seconds.
- **Error states:** Enhanced due diligence flagged (manual review path).

#### ONB-13 Card ordering
- **Purpose:** Issue a virtual card immediately; order physical.
- **Key content:** "Your virtual card is ready to use" state, Apple/Google Pay add buttons, physical card delivery address and ETA.
- **Actions:** Add to wallet, Order physical (default yes).

#### ONB-14 First deposit CTA
- **Purpose:** Encourage first deposit.
- **Key content:** Account details for inbound payment, tips ("fund with a first customer payment", "transfer from your old account").
- **Actions:** Copy details, Share account details by email.

#### ONB-15 Onboarding success
- **Purpose:** Celebrate the outcome; direct to home.
- **Key content:** Confetti moment, "Your Ltd is registered, account is live. Now:" with three suggested next actions (invite accountant, create an invoice, add a director's personal account).
- **Actions:** Go to Home.

**Edge cases and states across flow:**
- Resume: if user drops off, state persists; returning lands on the last completed screen.
- KYC fail: directed to manual review path (support chat).
- Company name conflict: returns to ONB-06.
- EDD required: account provisioning pauses with clear next step.

### Flow 2: Dividend payment (HERO flow)

**User story:** A director of a single-director Ltd (or multi-shareholder Ltd) wants to declare and pay a dividend.

#### DIV-01 Dividend start (reserves check)
- **Purpose:** Confirm there are distributable reserves before starting.
- **User intent:** "Am I allowed to pay a dividend?"
- **Key content:**
  - Distributable reserves as at the last month-end (from the bookkeeping engine): a single big number.
  - Breakdown: retained profits as at [date], less any prior distributions this period.
  - Year-to-date P&L summary.
  - Warning banner if reserves are negative or marginal: "You cannot lawfully pay a dividend larger than [£X]. Consider paying a salary or bonus instead."
  - If reserves are clearly positive: "You can declare up to [£X] today."
- **Actions:** Continue (only enabled if reserves > 0), Learn more, See reserves calculation.
- **Data sources:** bookkeeping engine (P&L, retained earnings), ledger.
- **Empty state:** "Your books need to be up to date to calculate reserves. [Finish categorising X transactions]".
- **Error state:** Reserves calculation failed (show fallback with accountant prompt).
- **Permissions:** Directors only.

#### DIV-02 Dividend amount entry
- **Purpose:** Enter the total dividend.
- **Key content:**
  - Total amount field.
  - Live feedback: "Per share: £X", "Max allowed from reserves: £Y".
  - Optional: "Pay a fixed amount per shareholder vs proportional to holdings" (default proportional; fixed is rare but legal).
- **Actions:** Next.
- **Validation:** Amount cannot exceed reserves; warns if close to threshold.

#### DIV-03 Dividend allocation (by shareholding)
- **Purpose:** Show the split across shareholders and let the user edit if non-standard.
- **Key content:**
  - Table: shareholder name, shareholding %, proposed amount.
  - Sum and reconciliation at the bottom.
  - Option to waive (one or more shareholders opt out — used for tax planning, legal via written waiver which we generate).
- **Actions:** Edit allocation, Add waiver, Next.
- **Data sources:** Cap table.
- **Edge cases:** Dividend waiver requires a waiver document (generated, signed by the waiving shareholder).

#### DIV-04 Board resolution preview
- **Purpose:** Show the board resolution that will be executed.
- **Key content:**
  - Full text of the resolution.
  - Meeting date (default today; editable).
  - Attendees from directors list (can toggle who attended and who approved).
  - Signatory selection.
- **Actions:** Accept and continue, Edit template (advanced), Save for later.
- **Data sources:** Directors list, resolution template engine.
- **Legal note on screen:** "By proceeding, you attest that this resolution reflects an actual board decision."

#### DIV-05 Voucher preview
- **Purpose:** Show the dividend voucher that each shareholder will receive.
- **Key content:**
  - Template with company name, shareholder name, amount, date, director signature placeholder.
  - Preview per shareholder, swipe between if multiple.
- **Actions:** Accept, Back to edit.

#### DIV-06 Dividend confirm and pay
- **Purpose:** Summary and SCA confirmation before money moves.
- **Key content:**
  - Total to be paid.
  - From: Business account.
  - To: each shareholder's listed account (if the shareholder is a director with a linked personal account with us, highlight this).
  - Resolution and voucher both listed as "Will be archived".
  - SCA prompt (biometric / PIN / 2FA).
- **Actions:** Confirm and pay, Cancel.
- **Data sources:** Ledger balances, payment service.

#### DIV-07 Dividend success and archive link
- **Purpose:** Confirm success and give fast access to the documents.
- **Key content:**
  - "Done" state with total paid.
  - Links: View resolution, View vouchers (one per shareholder), View payment records.
  - For each shareholder who received a voucher, "Shared with [email]" indicator.
  - "Self Assessment data recorded" for each director-shareholder (they will see it in their personal Self Assessment view).
- **Actions:** Done (returns to Company tab), View documents.

**Complete end state:**
- Payment(s) in ledger.
- Dividend record created with allocations.
- Board resolution generated, stored, timestamped.
- One voucher per shareholder, generated, stored, delivered.
- Self Assessment personal data row created for each UK-resident shareholder.
- Accountant view updated.
- Compliance calendar notes the dividend (not itself a filing, but it affects CT and SA).

### Flow 3: Monthly books reconciliation

**User story:** A director sees "23 transactions need categorisation" on home; wants to clear the inbox.

#### BKS-01 Inbox
- **Purpose:** Surface uncategorised transactions as actionable items.
- **Key content:**
  - Count banner ("23 uncategorised, 2 need receipts, 1 awaiting accountant review").
  - List ordered by date, each row: counterparty, amount, AI-suggested category with confidence.
  - Quick-accept button per row (accepts suggestion).
- **Actions:** Bulk accept suggestions (with a confirmation), Open row to edit, Filter (by date, amount, counterparty).
- **Data sources:** Transactions, AI categorisation service.
- **Empty state:** "All caught up. Last categorised 12 minutes ago." with share-with-accountant CTA.
- **Permissions:** Director, accountant.

#### BKS-02 Transaction detail and categorise
- **Purpose:** Categorise a single transaction with full context.
- **Key content:**
  - Transaction data (date, amount, counterparty, description from bank).
  - Category picker (full chart of accounts, with most-used at top).
  - VAT treatment toggle and rate.
  - Receipt attach button.
  - Invoice match button (if it looks like a customer payment).
  - Notes field.
- **Actions:** Save, Save and next, Flag for accountant.
- **Data sources:** CoA, receipts, invoices.

#### BKS-03 Receipt attach
- **Purpose:** Add a receipt to a transaction.
- **Key content:** Camera, or pick from recent receipts, or search documents.
- **Actions:** Capture, Pick, Skip.
- **Data sources:** OCR service.

#### BKS-04 Reports
- **Purpose:** Quick P&L and BS view after reconciliation.
- **Key content:** Current month P&L (revenue, expenses, net), balance sheet summary. "See full report on web" link.
- **Actions:** Share with accountant, Export.
- **Permissions:** Director, accountant.

#### BKS-05 Reconciliation view
- **Purpose:** Confirm that bank balance matches ledger balance.
- **Key content:** Two balance figures side by side (bank vs ledger), difference, list of unreconciled items.
- **Actions:** Close month (locks transactions against edit; accountant can still adjust via journal).
- **Permissions:** Director or accountant.

### Flow 4: VAT return submission

**User story:** The Ltd is VAT-registered; a return is due in 14 days.

#### TAX-02 VAT return list
- **Purpose:** List of past and upcoming VAT returns.
- **Key content:** Rows per period, status (draft, under review, filed). Next due prominent.
- **Actions:** Open current period, Open past.

#### TAX-03 VAT return review
- **Purpose:** Review the 9-box return computed from books.
- **Key content:**
  - Period dates.
  - Each of 9 boxes with value and a drill-down link (shows the transactions contributing).
  - Net VAT due / refund summary.
  - Adjustments field with justification.
  - Bank Repayment details if refund (account for refund must match the business account).
  - Accountant-review-requested toggle (if ticked, pauses submission until accountant signs off).
- **Actions:** Make adjustment, Request accountant review, Submit, Save draft.
- **Data sources:** bookkeeping engine, HMRC MTD-VAT obligations endpoint.

#### TAX-04 VAT submission confirm
- **Purpose:** Declaration and SCA.
- **Key content:**
  - Summary of what will be submitted.
  - Legal declaration text (standard HMRC wording).
  - Submitter's name prefilled.
  - SCA prompt.
- **Actions:** Confirm and submit, Cancel.

#### TAX-05 VAT submission receipt
- **Purpose:** Show the HMRC receipt.
- **Key content:**
  - "Submitted" confirmation.
  - HMRC acknowledgement number.
  - Period covered.
  - Timestamp.
  - Download PDF link; archived to Document vault.
  - Calendar update: next return and payment due dates.
- **Actions:** Done, Share with accountant.

### Flow 5: Compliance dashboard (home screen)

**The single most-viewed screen.** This is HOM-01.

#### HOM-01 Home
- **Purpose:** The director opens the app and sees, in order of importance, what needs attention today, this week, this month.
- **Key content (top to bottom):**
  1. **Account balance card.** Business account balance in GBP, with a subtle indicator for multi-currency (V2+), and a "Today net: +£X / -£Y" micro-summary.
  2. **Upcoming deadlines strip.** Next three items from the compliance calendar (e.g. "VAT Q1 due in 9 days", "PAYE RTI due in 19 days", "Confirmation statement due in 44 days"). Each tappable to the relevant flow.
  3. **To-dos card.** Count of uncategorised transactions, unpaid invoices, receipts to attach, accountant review requests.
  4. **Quick actions row.** Pay someone, Create invoice, Add receipt, Declare dividend.
  5. **Activity feed.** Last 5-10 transactions with category tag and status icon; swipe-to-categorise on uncategorised items.
- **Actions:** Any of the above items deep-link into their flows.
- **Data sources:** Ledger, compliance service, bookkeeping, invoices, receipts.
- **Empty state on day 1:** "Your account is ready. Start by sending your account details to a customer or paying a supplier." with CTAs.
- **Loading state:** Skeleton cards.
- **Error state:** Ledger unavailable banner: "Some balances may be delayed. Recent activity is still up to date."
- **Permissions:** Authenticated user viewing their default Ltd.
- **Multi-company:** If a user has more than one Ltd, a switcher at the top allows changing context; accountants always use the portal.
- **Responsive:** On web, an extra column shows a 30-day cash chart.
- **Accessibility:** Each card is a region with a clear heading; deadline text announces remaining days for screen readers.

---

## Full MVP screen inventory (top 40 with one-liners)

1. ONB-01 Welcome — first-impression and sign-up entry.
2. ONB-02 Business type — branch between new/existing/sole trader.
3. ONB-03 Director details — capture director data.
4. ONB-04 Director KYC — ID verification.
5. ONB-06 Company name search — CH availability check.
6. ONB-07 SIC code selection — business activity codes.
7. ONB-08 Share allocation — founders' shareholding setup.
8. ONB-09 Registered address choice — our service vs BYO.
9. ONB-11 Companies House submission — submit to CH.
10. ONB-12 Account provisioning — open EMI account.
11. ONB-13 Card ordering — virtual + physical card.
12. ONB-15 Onboarding success — welcome and next steps.
13. HOM-01 Home dashboard — the hub.
14. ACC-01 Business account detail — full account view.
15. ACC-02 Personal account detail — director's personal view.
16. MON-01 Send money — pay someone.
17. MON-02 Invoice create — new invoice.
18. MON-03 Invoice detail — view/edit.
19. BKS-01 Inbox — uncategorised queue.
20. BKS-02 Transaction detail — categorise and tag.
21. BKS-04 Reports — P&L, BS summary.
22. BKS-05 Reconciliation view — close month.
23. CMP-01 Company home — directors, shareholders, docs at a glance.
24. CMP-02 Cap table — shareholders and shares.
25. DIV-01 Dividend start — reserves check.
26. DIV-02 Dividend amount — total to pay.
27. DIV-03 Dividend allocation — per-shareholder split.
28. DIV-04 Board resolution preview — generated resolution.
29. DIV-05 Voucher preview — per-shareholder voucher.
30. DIV-06 Dividend confirm and pay — SCA and execute.
31. DIV-07 Dividend success — archive and receipts.
32. DOC-01 Document vault — all documents.
33. DOC-02 Document detail — view and share.
34. TAX-01 Compliance calendar — all deadlines.
35. TAX-03 VAT return review — 9 boxes with drill-down.
36. TAX-04 VAT submission confirm — declaration and SCA.
37. TAX-05 VAT submission receipt — HMRC receipt.
38. CRD-01 My cards — manage cards.
39. CRD-02 Card detail — freeze, PIN, controls.
40. STG-02 Accountant invitations — invite Q or any accountant.

## Priority matrix

**Critical for hero positioning (must delight):**
- HOM-01 Home dashboard
- CMP-01 Company home
- CMP-02 Cap table
- DIV-01 to DIV-07 Dividend flow (7 screens)
- ACC-02 Directors' personal account detail
- TAX-01 Compliance calendar

**Supporting for hero (must work well):**
- ONB-01 to ONB-15 Onboarding (15 screens)
- BKS-01 to BKS-05 Books (5 screens)
- TAX-03 to TAX-05 VAT return (3 screens)
- DOC-01, DOC-02 Documents (2 screens)
- STG-02 Accountant invitations

**Utility (functional but not differentiated):**
- ACC-01 Business account detail
- MON-01 to MON-05 Money (send, invoice, DD)
- CRD-01, CRD-02 Cards
- STG-01 Settings

---

## Design system scope statement

The MVP needs:

**Tokens:**
- Colour: a primary brand palette (warm, trust-oriented; we are a bank-adjacent product, not a playful consumer app), semantic palette (success, warning, danger, info), dark mode tokens.
- Typography: one display face for hero moments, one highly legible sans for data (Inter or similar). Numeric-tabular variant for money values.
- Spacing: 4px base grid.
- Radii: consistent corner rule; cards typically 12-16px.
- Elevation: light shadow language; avoid heavy skeuomorphism.

**Components:**
- Buttons (primary, secondary, destructive, ghost).
- Inputs (text, amount, date, picker, file upload).
- Select and combobox (for SIC, chart of accounts picker).
- Cards (dashboard card, summary card, list-row card).
- Tables (sortable, reconciliation table, cap table).
- Lists (transaction rows, navigation rows).
- Tabs and segmented controls.
- Modals and sheets (mobile bottom sheet is primary interaction for category picking, SCA).
- Toasts and banners (info, warning, success).
- Form patterns (group, inline error, field help text).
- Money display (bold numerals with currency code and subtle thousands grouping).
- Charts (small sparklines for cash; larger P&L bars for reports).
- Document preview component (PDF-in-app rendering).
- Signature capture.

**Patterns:**
- Empty state pattern (illustration + one-line + primary CTA).
- Loading skeletons (content shape, not spinners, for screens with real data).
- SCA challenge pattern (consistent; biometric, then fallback to PIN).
- Two-column layouts on web; single-column on mobile.
- "Accountant review" markers as an ambient indicator on any document or return.

**What we do not need at MVP:**
- A full marketing-site design system.
- Complex data visualisation library (hold until V2 reports).
- Dense enterprise-table patterns (hold until accountant portal matures).

The design system should be documented in Figma with tokens exported to code (via Tokens Studio or similar). Targeted owner: one product designer full-time from day 1. Engineering consumes via a component library (React + React Native sharing tokens).
