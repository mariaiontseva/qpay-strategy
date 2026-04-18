# 03. Feature architecture

Organised by release phase. Each feature has: description, primary user, dependencies, regulatory implications, integrations, build vs buy, effort (S/M/L/XL), and classification (wedge, table-stakes, retention).

---

## MVP (first 12 months post-launch)

**Goal:** Prove the wedge. Deliver the hero positioning (director-dividend-shareholder flow). Ship to the first 500-2,000 Ltds, heavily weighted toward the Q Accountants channel. Everything here is either part of the hero wedge or table-stakes without which we cannot credibly charge for the wedge.

### 1. EMI-authorised business account (GBP)

- **Description:** GBP current account with sort code and account number under our brand, Faster Payments, BACS (credits), Direct Debits (both directions), standing orders.
- **Primary user:** Every Ltd customer.
- **Dependencies:** EMI authorisation (in progress) or BaaS partner (Griffin or Modulr at launch; migrate to direct EMI within 18 months).
- **Regulatory:** FCA EMI permissions, safeguarding under CASS 15 (effective 7 May 2026) requiring daily reconciliation of customer funds to segregated safeguarding accounts at Tier 1 banks. AML under MLRs.
- **Integrations:** Core ledger (build); card issuer (Marqeta or Enfuce); FPS gateway (via BaaS partner).
- **Build vs buy:** Buy rails (BaaS). Build ledger and UX. Justification: regulatory speed to market; swap to direct EMI later.
- **Effort:** XL.
- **Classification:** Table-stakes.

### 2. Business debit cards (physical and virtual)

- **Description:** Mastercard or Visa debit card issued to directors and nominated employees, virtual cards on demand, Apple/Google Pay.
- **Primary user:** Directors, employees (employee cards held back to V2 for full controls).
- **Dependencies:** Card issuer partner, KYC'd cardholder, active account.
- **Regulatory:** 3DS2, SCA under PSD2, PCI-DSS for any storage.
- **Integrations:** Card issuer (Marqeta, Enfuce), mobile wallet provisioning.
- **Build vs buy:** Buy issuing; build card-management UX.
- **Effort:** L.
- **Classification:** Table-stakes.

### 3. Company formation (UK Ltd)

- **Description:** Incorporate a UK Ltd in under 10 minutes from the app: business name, SIC code, registered address (our service), director and PSC details, share allocation, memorandum and articles, identity verification, submission to Companies House, company number back in under 24 hours.
- **Primary user:** New founders (Persona 1).
- **Dependencies:** Companies House filing integration, our registered address service, KYC/identity partner (Onfido, Veriff, Persona).
- **Regulatory:** Companies House authorised agent status (we must register as one), KYC/AML on incorporators.
- **Integrations:** Companies House Filing API, identity verification, address verification.
- **Build vs buy:** Build (automated wizard over CH API), partner for identity. Justification: this is a lead-generation surface and wedge touch. Owning the UX matters.
- **Effort:** L.
- **Classification:** Wedge (only banking-first competitor with formation is Tide; we match and exceed).

### 4. Registered office address and mail forwarding

- **Description:** A prestigious central London (or regional) address that serves as the Ltd's registered office, with scanning and forwarding of received mail.
- **Primary user:** All Ltd customers.
- **Dependencies:** Physical lease or partnership with a registered office provider.
- **Regulatory:** Companies House requirement that a Ltd has a registered office. Mail handling under GDPR.
- **Integrations:** None beyond partner.
- **Build vs buy:** Buy (partner with an established registered-address operator at launch; reassess in V3).
- **Effort:** S.
- **Classification:** Table-stakes.

### 5. Directors' personal accounts

- **Description:** Each director of a Ltd served by us can open a linked personal account (GBP current account) with their own sort code and account number. Separate ledger from the Ltd. Personal card available.
- **Primary user:** Directors (Persona 1, 2, 3).
- **Dependencies:** Feature 1 (EMI), KYC of the individual director (separate from the Ltd KYC).
- **Regulatory:** Distinct EMI account for the natural person, full AML and safeguarding as for a business account.
- **Integrations:** Same rails as feature 1, keyed to personal KYC.
- **Build vs buy:** Build (UX and account provisioning logic); buy rails (BaaS).
- **Effort:** M (after feature 1 exists).
- **Classification:** Wedge (no UK competitor offers this).

### 6. Dividend payment workflow (HERO)

- **Description:** End-to-end flow: "Pay a dividend" → system checks distributable reserves from current books → user enters total amount → system splits by shareholding → draft board resolution generated and available to sign → dividend voucher generated per shareholder with correct statutory content → payment executed from business account to each shareholder's account (including directors' personal accounts held with us) → voucher archived in the document vault → Self Assessment data logged for each recipient.
- **Primary user:** Directors of a Ltd declaring a dividend.
- **Dependencies:** Features 1, 5, chart of accounts, cap table, document generator, document vault.
- **Regulatory:** Companies Act 2006 Part 23 (distributions). Must pay only out of profits available for distribution. Dividend vouchers' statutory content. Self Assessment data flows.
- **Integrations:** HMRC (for Self Assessment data flow), document templating engine, e-signature (basic).
- **Build vs buy:** Build. This is the wedge. Every component must be tightly integrated; off-the-shelf does not exist for this combined flow.
- **Effort:** XL.
- **Classification:** Wedge (no competitor does this).

### 7. Cap table

- **Description:** Shareholder register with share class, number of shares, allotment dates, PSC flags. Synced with Companies House filings so that the cap table and the public record do not diverge.
- **Primary user:** Directors, co-founders.
- **Dependencies:** Companies House API, formation flow.
- **Regulatory:** Statutory registers under Companies Act (register of members).
- **Integrations:** Companies House.
- **Build vs buy:** Build.
- **Effort:** M.
- **Classification:** Wedge.

### 8. Bank-feed-driven bookkeeping (accountant-grade)

- **Description:** Every transaction from the account (and any connected external accounts in V2) is categorised against a chart of accounts. Accrual-basis where appropriate. Journal entries for non-cash events (depreciation, accruals, prepayments). Reconciliation view. Trial balance, P&L, balance sheet.
- **Primary user:** The director (light-touch categorisation) and the accountant (deep adjustments).
- **Dependencies:** Feature 1 (transactions), chart of accounts, AI categorisation engine.
- **Regulatory:** Statutory accounts preparation standards (FRS 102 Section 1A or FRS 105 for micro-entities). Record retention under HMRC (6 years).
- **Integrations:** AI categorisation (ML model, built or fine-tuned), receipt capture OCR.
- **Build vs buy:** Build the ledger and categorisation; buy or build OCR (Klippa, Veryfi, or own model).
- **Effort:** XL.
- **Classification:** Wedge (depth beyond Tide/ANNA).

### 9. Invoicing

- **Description:** Create, send, track invoices. UK VAT rates. Customer database. Payment links via Open Banking. Automated reminders. Payment matching to bank transactions.
- **Primary user:** Directors.
- **Dependencies:** Feature 8 (bookkeeping), Open Banking payment provider.
- **Regulatory:** UK invoice content requirements, VAT Act 1994 content requirements, Making Tax Digital digital links.
- **Integrations:** Open Banking payments (TrueLayer, GoCardless Instant Bank Pay, or own via FPS).
- **Build vs buy:** Build the invoicing UX, buy the payment initiation.
- **Effort:** L.
- **Classification:** Table-stakes.

### 10. Receipt capture

- **Description:** Photograph a receipt; OCR extracts supplier, date, total, VAT. Attaches to a transaction. Archived in document vault.
- **Primary user:** Directors, employees.
- **Dependencies:** OCR provider, document storage.
- **Regulatory:** HMRC digital record requirements; MTD digital links.
- **Integrations:** OCR (Klippa, Veryfi).
- **Build vs buy:** Buy OCR; build matching logic.
- **Effort:** M.
- **Classification:** Table-stakes.

### 11. Compliance calendar

- **Description:** Shows upcoming deadlines (Corporation Tax payment, Corporation Tax return, VAT return, PAYE RTI, confirmation statement, P11D in V2). For each, shows status (not due / draft ready / needs action / filed). Clicking an item opens the relevant flow.
- **Primary user:** Directors.
- **Dependencies:** Integration with HMRC and Companies House filing statuses; our own records of filed returns.
- **Regulatory:** None beyond the filings themselves.
- **Integrations:** HMRC MTD-VAT, Companies House.
- **Build vs buy:** Build.
- **Effort:** M.
- **Classification:** Wedge.

### 12. Document vault

- **Description:** Every generated document (dividend voucher, board resolution, invoice, VAT return receipt, company formation certificate) stored, tagged, searchable. PDF export, share link with expiry.
- **Primary user:** Directors, accountants.
- **Dependencies:** Object storage (S3 or equivalent), document metadata model.
- **Regulatory:** 6-year retention for HMRC records, 10+ years for some Companies House records.
- **Integrations:** S3, KMS for encryption at rest.
- **Build vs buy:** Build.
- **Effort:** M.
- **Classification:** Retention.

### 13. VAT registration and filing (MTD)

- **Description:** Check if the Ltd should register (turnover threshold), submit the VAT1 registration, then compute each return (boxes 1-9) from the bookkeeping data, allow review and adjustments, submit via MTD API, archive the receipt.
- **Primary user:** Directors, accountants.
- **Dependencies:** Feature 8, HMRC MTD-VAT API approval.
- **Regulatory:** MTD-VAT mandatory; HMRC-recognised software listing; fraud prevention headers.
- **Integrations:** HMRC MTD-VAT API.
- **Build vs buy:** Build.
- **Effort:** L.
- **Classification:** Table-stakes.

### 14. Accountant portal (light)

- **Description:** Accountant can be invited to a Ltd's account. Read-only plus ability to propose journal entries and flag categorisations for director approval. Multiple clients in one accountant login. (Full portal in V2.)
- **Primary user:** Q Accountants and any accountant of our customers.
- **Dependencies:** Permissions/role system.
- **Regulatory:** Data protection; clear authorisation trail.
- **Integrations:** None.
- **Build vs buy:** Build.
- **Effort:** M.
- **Classification:** Distribution-critical (Q channel depends on this).

### 15. Mobile app (iOS + Android)

- **Description:** Native mobile apps for both platforms. Feature parity with web for daily flows (payments, invoicing, receipt capture, dividend declaration, compliance calendar). Heavier editing flows (chart of accounts, bulk reconciliation) are web-only.
- **Primary user:** Directors.
- **Dependencies:** All features that need mobile surfaces.
- **Regulatory:** SCA, PSD2, biometric auth.
- **Integrations:** Apple/Google wallet, push notifications.
- **Build vs buy:** Build native (React Native is acceptable; true native if team has capacity).
- **Effort:** XL (ongoing).
- **Classification:** Table-stakes.

### 16. Web app

- **Description:** Web portal for heavier workflows: accountant portal, bookkeeping review, journal entries, year-end adjustments.
- **Primary user:** Directors (evening/admin sessions), accountants.
- **Dependencies:** Same as mobile.
- **Effort:** XL (ongoing).
- **Classification:** Table-stakes.

---

## V2 (months 13-24)

**Goal:** Retention and expansion. Close the adjacent gaps that cause customers to add second tools. Make the accountant portal the reason accountants insist on us.

### 17. Payroll with RTI submission

- **Description:** Native payroll for directors and employees, monthly pay runs, RTI submission to HMRC, payslips, year-end P60, P11D for benefits.
- **Primary user:** Ltds with employees or directors on a payroll salary.
- **Dependencies:** Features 1, 8.
- **Regulatory:** HMRC RTI recognition (listing required), National Minimum Wage compliance, auto-enrolment pension compliance.
- **Integrations:** HMRC RTI API, pension providers (NEST, Smart, Nest). Consider partnering with Modulr for BACS payroll rails.
- **Build vs buy:** Build UX, build RTI submission. Pension handling may partner.
- **Effort:** XL.
- **Classification:** Wedge-adjacent (closing the gap that forces customers onto BrightPay).

### 18. Expense cards with controls

- **Description:** Employee and director cards with spending limits, category restrictions, approval workflows. Receipt capture triggered on spend.
- **Primary user:** Owner-managed Ltds with 3+ employees (Persona 3).
- **Dependencies:** Card issuer advanced features.
- **Regulatory:** PSD2 SCA exemptions for low-value contactless; expense policy disclosure.
- **Integrations:** Card issuer policy engine.
- **Build vs buy:** Build policy UX; rely on issuer's programmable limits.
- **Effort:** L.
- **Classification:** Retention.

### 19. CT600 preparation (draft)

- **Description:** From the bookkeeping data, generate a draft Corporation Tax return. User or accountant reviews. Export to iXBRL for submission. Submission flow is still manual-upload in V2; automated in V3.
- **Primary user:** Directors, accountants.
- **Dependencies:** Feature 8 at accounting-standard depth.
- **Regulatory:** CTSA return rules, iXBRL tagging standard.
- **Integrations:** iXBRL generation library; submission via HMRC CT API in V3.
- **Build vs buy:** Build. Buy iXBRL library (Arkk, Dext, or open-source).
- **Effort:** XL.
- **Classification:** Retention.

### 20. Advanced invoicing

- **Description:** Recurring invoices, payment links, GoCardless Direct Debit on invoices, quotes-to-invoices pipeline, late fees.
- **Primary user:** Directors with regular clients.
- **Dependencies:** Feature 9.
- **Integrations:** GoCardless for Direct Debit.
- **Build vs buy:** Build on top of feature 9.
- **Effort:** M.
- **Classification:** Retention.

### 21. FX and multicurrency

- **Description:** Hold EUR and USD (at minimum), FX at interbank-plus-margin, SEPA and SWIFT incoming and outgoing.
- **Primary user:** Ltds with international suppliers or customers.
- **Dependencies:** FX provider (Currencycloud, now part of Visa), multi-currency ledger.
- **Regulatory:** FX reporting, AML on cross-border.
- **Integrations:** Currencycloud or similar.
- **Build vs buy:** Buy FX and SWIFT rails; build UX.
- **Effort:** L.
- **Classification:** Table-stakes for scale-up cohort.

### 22. External integrations (accounting exports, ecommerce)

- **Description:** Export to Xero/QuickBooks/Sage/FreeAgent; ingest from Shopify, Stripe, PayPal, Amazon.
- **Primary user:** Directors with ecommerce or other bespoke stacks.
- **Dependencies:** Feature 8.
- **Integrations:** Each partner's API.
- **Build vs buy:** Build connectors; consider buying a connector platform (Merge.dev or Codat) for breadth.
- **Effort:** L.
- **Classification:** Retention.

### 23. Board resolution generator (full library)

- **Description:** Beyond dividend resolutions: director appointment, director resignation, change of registered office, change of name, share allotment, share buyback, loan to director, bank mandate change. Each with compliant template, shareholder or director sign-off tracking.
- **Primary user:** Directors, company secretaries.
- **Dependencies:** Feature 12.
- **Regulatory:** Companies Act statutory requirements per resolution type.
- **Integrations:** E-signature (DocuSign, Dropbox Sign, or own).
- **Build vs buy:** Build templates and flows; buy e-signature.
- **Effort:** L.
- **Classification:** Wedge-extension.

### 24. Shareholders agreement (templated)

- **Description:** Wizard-driven shareholders agreement for co-founder Ltds, covering reserved matters, pre-emption, drag/tag. Lower-tier alternative to SeedLegals for non-round contexts.
- **Primary user:** Early-stage multi-founder Ltds (Persona 2).
- **Regulatory:** None (private document); e-signature.
- **Integrations:** E-signature.
- **Build vs buy:** Build; consider legal-review-as-a-service partner.
- **Effort:** M.
- **Classification:** Wedge-extension.

### 25. VAT registration (application) and Flat Rate Scheme support

- **Description:** Submit VAT1 application directly. Support Flat Rate, Cash Accounting, Annual Accounting where relevant.
- **Primary user:** Ltds crossing threshold.
- **Dependencies:** Feature 13.
- **Integrations:** HMRC VAT registration service.
- **Build vs buy:** Build.
- **Effort:** M.
- **Classification:** Retention.

### 26. Compliance calendar: P11D, PAYE, benefits

- **Description:** Extend calendar to year-end P11D for director benefits (BIK on company-provided car, medical, loans to director), PAYE monthly deadlines, pension auto-enrolment triggers.
- **Dependencies:** Feature 11, payroll (17).
- **Regulatory:** P11D filing with HMRC.
- **Effort:** M.
- **Classification:** Retention.

---

## V3 (months 25-36)

**Goal:** Platform thickening. Move from "software that moves money well" to "platform that runs your Ltd". Expand revenue via cross-sell and high-margin features.

### 27. Insurance marketplace

- **Description:** Curated marketplace for director-and-officer, professional indemnity, cyber, public liability. Quote via partner aggregator, purchase, store policy in document vault.
- **Primary user:** All Ltd customers.
- **Regulatory:** **FCA insurance distribution authorisation (IDD)** required. This is a material regulatory uplift. Alternative: introducer model with an authorised partner.
- **Integrations:** Insurance aggregator partner.
- **Build vs buy:** Buy distribution relationship; build comparison UX.
- **Effort:** L.
- **Classification:** Revenue (commission).

### 28. Lending (broker or originated)

- **Description:** Overdraft, working-capital line, invoice finance. Broker model at launch; consider originated lending once the balance sheet supports it (years 4+).
- **Primary user:** Revenue-generating Ltds with working capital needs.
- **Regulatory:** **Consumer Credit Act for some products if director personal guarantees; FCA credit broking permission at minimum.**
- **Integrations:** Lending partners (Iwoca, Funding Circle, Capify, MarketFinance).
- **Build vs buy:** Buy lending; build origination UX.
- **Effort:** L-XL.
- **Classification:** Revenue + retention.

### 29. International payments optimisation

- **Description:** Beyond V2 FX: local payment rails in major corridors, better pricing at volume, API for automation.
- **Dependencies:** Feature 21.
- **Integrations:** Local rail partners per corridor.
- **Effort:** L.
- **Classification:** Retention (scale-up).

### 30. Public API for accountants and partners

- **Description:** Read-write API so accountants, ERPs, and ecosystem partners can integrate. OAuth, webhooks, sandbox environment.
- **Primary user:** Accountants and developers building on top of us.
- **Dependencies:** Stable internal APIs.
- **Regulatory:** Open Banking style permissions for data access.
- **Effort:** L.
- **Classification:** Distribution (unlock accountant-tech-stack integrations).

### 31. Multi-company dashboard for accountants (Q client portal)

- **Description:** Q (or any multi-client accountant) can view all their Ltds in one pane, with aggregated deadlines, risk flags, and one-click dive-in.
- **Primary user:** Accountants.
- **Dependencies:** Feature 14 at scale.
- **Effort:** L.
- **Classification:** Distribution.

### 32. Year-end statutory accounts draft

- **Description:** From bookkeeping data, produce FRS 102 1A or FRS 105 compliant draft statutory accounts. Reviewable, with iXBRL output.
- **Primary user:** Directors, accountants.
- **Regulatory:** Companies Act small-company accounts regime.
- **Effort:** XL.
- **Classification:** Retention (closes the "year-end with outsourced accountant" gap).

### 33. Corporation Tax filing to HMRC (automated)

- **Description:** Submit the CT600 (built in V2) directly to HMRC CT API.
- **Dependencies:** Feature 19, HMRC CT API.
- **Regulatory:** HMRC CT recognition.
- **Effort:** L.
- **Classification:** Retention.

### 34. Companies House filing (full)

- **Description:** Beyond formation: PSC changes, director appointments/resignations, share allotments, articles amendments, confirmation statements filed automatically from app data.
- **Dependencies:** Feature 7, Companies House API full coverage.
- **Effort:** L.
- **Classification:** Retention.

### 35. Advisory and tax planning

- **Description:** Prompts based on real data: "You could save £X CT by bringing forward this expense." Dividend vs salary optimiser. EMI options scheme advice (prompted, not legal advice).
- **Primary user:** Directors.
- **Dependencies:** Rich bookkeeping data, tax rule engine.
- **Regulatory:** Careful framing (generic guidance, not personalised tax advice, unless we have qualified staff).
- **Effort:** M-L (depending on depth).
- **Classification:** Retention.

---

## Data model sketch

Key entities and relationships:

- **Company** (id, companyNumber, name, incorporationDate, sicCodes, registeredAddressId, status)
  - has many **Directors**, **Shareholders** (often the same person, distinct records), **PSCs**
  - has one **CapTable**
  - has many **Accounts** (business GBP, business EUR, etc.)
  - has many **Documents**
  - has one **ChartOfAccounts**
- **Individual** (id, name, dateOfBirth, nationality, kycStatus, kycLevel)
  - can be a **Director** (via DirectorRole: appointmentDate, resignationDate, companyId)
  - can be a **Shareholder** (via ShareholderHolding: shareClassId, numberOfShares, acquisitionDate)
  - can be a **PSC**
  - has many personal **Accounts** (linked to the Ltds they are a director of, if they opted in)
- **ShareClass** (id, companyId, name, nominalValue, votingRights, dividendRights)
- **ShareAllotment** (id, companyId, shareClassId, allotteeIndividualId, numberOfShares, date, resolutionDocumentId)
- **Account** (id, ownerEntityId, ownerEntityType {Company|Individual}, sortCode, accountNumber, currency, balance)
- **Transaction** (id, accountId, date, counterparty, amount, currency, categoryId, vatTreatment, receiptId, invoiceId, dividendEventId)
- **Invoice** (id, companyId, customerId, lineItems, total, vatTotal, dueDate, status, paidTransactionId)
- **Dividend** (id, companyId, declarationDate, totalAmount, boardResolutionId)
  - has many **DividendAllocations** (shareholderId, amountPerShare, totalAmount, voucherId, paymentTransactionId)
- **Document** (id, companyId, type {boardResolution|dividendVoucher|invoice|vatReturn|etc}, generatedAt, url, signedBy, version)
- **ComplianceDeadline** (id, companyId, type, dueDate, status, filingDocumentId)
- **VATReturn** (id, companyId, period, boxes, submissionReceipt, submittedAt)
- **CT600Draft** / **CT600Submission**
- **PayrollRun**, **Payslip**, **RTISubmission**
- **ChartOfAccounts** with **Account** nodes (Ledger accounts, not bank accounts) keyed by code.

The **Directors' personal account** is expressed as an Account owned by an Individual. The linkage that makes it meaningful is: the Individual is in a DirectorRole with a Company that also holds Accounts with us. The UI presents a consolidated "my Ltd + my personal" view for each director.

---

## System architecture (high level)

Layered overview:

- **Edge:** mobile apps (iOS, Android), web app, accountant portal, public API.
- **API gateway:** authentication (OAuth 2.0 + SCA via mobile-as-second-factor), rate limiting, request signing for public API.
- **Application services:**
  - Identity and KYC service (owns Individual and Company KYC lifecycle, integrated with Onfido or Persona).
  - Accounts and ledger service (core double-entry ledger; every balance change is a ledger entry).
  - Card service (wraps issuer API: Marqeta or Enfuce).
  - Payments service (FPS, BACS, Direct Debit, international).
  - Bookkeeping service (chart of accounts, categorisation, journal entries, reconciliation, reports).
  - Compliance service (deadlines, calendars, filing orchestration).
  - Document service (templating, generation, vault, signature integration).
  - Cap table service.
  - Dividend service (orchestrates the dividend workflow, calling ledger + document + Companies House + HMRC).
  - Payroll service (V2+).
  - Notification service.
- **External integrations:**
  - **EMI/BaaS partner** for settlement rails (Griffin or Modulr at launch).
  - **Card issuer** (Marqeta or Enfuce).
  - **Open Banking** for receiving payments and external account data (TrueLayer, GoCardless).
  - **FX rails** (Currencycloud/Visa) for V2.
  - **HMRC MTD APIs** (VAT, ITSA for directors, RTI for payroll, CT for V3).
  - **Companies House Filing API**.
  - **Identity providers** (Onfido or Persona for KYC).
  - **OCR** (Klippa or Veryfi).
  - **E-signature** (DocuSign or Dropbox Sign).
  - **Pension providers** for payroll.
- **Data plane:**
  - Primary relational database (PostgreSQL) for transactional data.
  - Event log (Kafka or similar) for audit trail and service integration.
  - Object store (S3-compatible) for documents.
  - Warehouse (BigQuery or Snowflake) for analytics and reporting.
  - Vector store if AI-assist features need retrieval.

---

## Non-functional requirements

**Security:**
- End-to-end encryption in transit (TLS 1.3), at rest (KMS-managed).
- SCA under PSD2 for all payment initiation.
- Biometric unlock on mobile.
- Per-resource authorisation; audit log of all access.
- Pen testing annually, bug bounty from V2.

**Compliance:**
- FCA EMI permissions (or BaaS partner cover at launch).
- CASS 15 Supplementary Safeguarding Regime from 7 May 2026: daily reconciliation of customer funds to safeguarding accounts at Tier 1 banks.
- MLRs and enhanced due diligence.
- PSD2 SCA.
- UK GDPR.
- SMCR (Senior Managers and Certification Regime) for our own governance.
- HMRC software recognition for every tax service shipped.
- IDD for insurance (V3) or introducer arrangement.

**Resilience:**
- 99.95% availability target for account and card services; 99.9% for non-core services.
- RPO 5 minutes; RTO 1 hour for core services.
- Multi-AZ deployments; DR runbook tested quarterly.

**Observability:**
- Structured logging with request correlation.
- Tracing (OpenTelemetry).
- Business KPI dashboards (daily NPV flows, card auth success, CT submission success).

**Audit trail:**
- Every regulatory-impact event (KYC decision, payment initiation, dividend declaration, filing submission) logged with immutable record and 7-year retention.
- Separate append-only store for audit events.

**Data retention:**
- Financial records 7 years (HMRC + company law).
- Filing documents 10 years (Companies House best practice).
- Customer account data retained per data retention policy (typically 5-7 years after account closure).

**Safeguarding:**
- E-money held in safeguarding accounts at Tier 1 UK banks, ring-fenced from our own funds.
- Daily reconciliation reports.
- Clear disclosure: we are EMI, not a bank; no FSCS up to £85K, but safeguarding protects customer funds in insolvency.
- Consideration: partner with an authorised bank for deposit-style propositions at scale, to close the FSCS gap for larger balances.

---

## Build vs buy summary

**Always buy:**
- EMI/BaaS rails at launch (swap to direct authorisation by month 18-24).
- Card issuer.
- FX and SWIFT rails.
- OCR.
- Identity/KYC provider.
- E-signature.
- iXBRL generation library.
- Insurance and lending distribution (V3).

**Always build:**
- Core ledger.
- Chart of accounts and bookkeeping engine.
- Dividend workflow.
- Cap table.
- Compliance calendar.
- Document templates and vault.
- Mobile and web apps.
- Accountant portal.
- HMRC and Companies House filing orchestration.
- AI categorisation (fine-tuned; off-the-shelf is too generic).

**Reassess over time:**
- BaaS partner vs direct EMI (move to direct within 18-24 months).
- Registered office provider (eventually own the estate in a couple of UK cities).
- Payroll rails (Modulr partnership vs own BACS direct).
