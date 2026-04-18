# 02. Strategic positioning

## Refined positioning statement

We are the UK business account that treats a limited company as a limited company, not a sole-trader-in-disguise. Every feature assumes the Ltd structure: directors are distinct from the company, shareholders are distinct from directors, dividends are distinct from salary. The account is the daily habit, the accounting is accountant-grade, and the statutory lifecycle (shareholder changes, board resolutions, HMRC and Companies House filings) is handled inside the same app as the money movement.

## Primary value proposition

**Headline:** The only business account built for how UK Ltd actually works: director salaries, dividends, and shareholder payments done right.

**Three supporting lines:**
- Pay a dividend in four taps, not four forms: reserves checked, board resolution drafted, voucher generated, voucher archived, Self Assessment data ready.
- Directors' personal accounts live next to the business account: the dividend you declare lands where it needs to land, and the tax view is consolidated.
- Your compliance calendar files things, not just reminds you about them: VAT, PAYE RTI, confirmation statements, Corporation Tax, all from the inbox.

## Brand promise

**Promise:** If your company is a UK Ltd, we will move its money and handle its paperwork correctly the first time, in one app.

**Category definition:** We are creating (and claiming) the category of the **Ltd-native business account**. The three existing categories (challenger bank, accounting SaaS, legal platform) each serve a slice. Ltd-native means: any feature we ship is first designed around how a Ltd is governed, taxed, and wound up. A sole trader can use us; they will get fewer features. A Ltd gets the whole system.

---

## Target persona profiles

### Persona 1: "Alex, the first-company founder"

- **Background:** Mid-thirties, former employee at a consultancy or tech firm, incorporated their first Ltd three months ago to run a side business that is now their main business. Sole director, sole shareholder, or one co-founder.
- **Jobs-to-be-done:**
  - Open a business account and start invoicing.
  - Understand how much they can pay themselves (salary vs dividend) without incurring tax surprises.
  - Meet HMRC deadlines they have never seen before (Corporation Tax, VAT, Self Assessment, confirmation statement).
  - Feel like the business is "real" with a professional appearance (proper invoices, a registered address that is not their flat).
- **Current stack:** Starling or Tide (free), ad hoc spreadsheets, a Gmail folder for receipts, maybe FreeAgent via Mettle if they discovered it.
- **Switching triggers:** First dividend (realising they do not know how to pay one properly), first employee (payroll pain), first accountant interaction (accountant asks for data they do not have in a usable form), first VAT return.
- **Acquisition channel:** Q Accountants direct referral; Reddit (r/UKPersonalFinance, r/UKBusinessOwners); SEO on "how to pay a dividend Ltd UK"; founder communities.

### Persona 2: "Nadia, the multi-shareholder Ltd"

- **Background:** Co-founded a Ltd with two other co-founders, each owning a third. Entering year 2 or 3. Two employees and a few contractors. Might have done an angel round or be raising one.
- **Jobs-to-be-done:**
  - Keep the cap table clean and up to date.
  - Issue shares, handle options (EMI scheme), manage SeedFAST-style convertibles.
  - Pay salaries and dividends properly across multiple shareholders.
  - Produce monthly management accounts that a board can read.
  - Run an annual compliance cycle without missing a PSC or confirmation statement.
- **Current stack:** Starling Business plus Xero or FreeAgent plus SeedLegals plus a payroll provider plus a receipt-capture app. Four to five tools.
- **Switching triggers:** The pain of tool-sprawl at year 2; preparing for due diligence on a round (investors want clean cap table and governance); an accountant migration.
- **Acquisition channel:** Accountant referral (highest intent); peer-to-peer in founder slack groups; content marketing around "year 2 admin".

### Persona 3: "Daniel, the owner-managed Ltd with staff"

- **Background:** Runs a small agency, consultancy, or trades business. 5-15 employees, one or two directors (often spouses or long-term partners). Established 3-10 years.
- **Jobs-to-be-done:**
  - Run payroll reliably every month.
  - Manage team expenses with cards and approvals.
  - Pay themselves a sensible split of salary plus dividends, guided by CT and personal-tax context.
  - Plan cash flow (VAT due, CT due, dividend dates).
  - Exit via dividend or sale eventually.
- **Current stack:** Traditional high-street bank for business account (Barclays or NatWest), an outsourced accountant on Xero or FreeAgent, BrightPay for payroll, a corporate card programme on Amex or Pleo.
- **Switching triggers:** An accountant modernisation initiative (the accountant moves to our platform, the client follows); pricing pressure on legacy bank services; frustration with five separate logins; a specific new feature (expense cards with limits) that solves an acute pain.
- **Acquisition channel:** Accountant-led (very high intent); peer referrals; business-community channels (Federation of Small Businesses, Chartered Institute of Payroll Professionals, etc.).

---

## Competitive differentiation framework

### Why a customer picks us over Tide

Tide is the strongest banking-first product. We differentiate on two points:

- **Dividend-as-a-workflow.** A director paying themselves a dividend on Tide initiates a Faster Payment and, separately, tells their accountant. On us, it is a single workflow that produces the voucher, records the resolution, logs to the cap table, tags for Self Assessment, and moves the money. If a customer is a Ltd director paying themselves dividends, this is a 10x reduction in admin.
- **Accountant-grade books.** Tide's accounting is transaction categorisation. Ours includes chart of accounts, journals, accruals, depreciation, and a true trial balance. This matters the moment an accountant is involved.

Tide wins on: scale, brand trust today, international breadth (India, Germany), more established card programme.

### Why a customer picks us over ANNA

ANNA is closest to us on accounting-first messaging.

- **We bank UK Ltd, not just sole traders.** ANNA's Auto Accountant is good but treats the "business" abstractly. We engineer every flow for the Ltd specifically (resolutions, vouchers, cap tables).
- **Directors' personal accounts.** ANNA has no concept of the director as a separate entity requiring a personal account. We do.
- **Accountant channel.** ANNA sells direct to the SMB. We sell through accountants (Q), which changes the customer's relationship: the accountant is co-deciding.

ANNA wins on: established MTD-ITSA framing, solid AI categorisation, lower-friction onboarding for sole-trader-style businesses.

### Why a customer picks us over Xero plus Mettle (the "bundle" competitor)

Xero plus Mettle is actually the strongest UK incumbent stack for a solo Ltd director: free Mettle, FreeAgent included, deep accounting. It is what most thoughtful founders end up on.

- **One app.** Xero plus Mettle is two apps for one workflow. We unify.
- **FSCS equivalence.** Our EMI safeguarding is structurally weaker than a bank's FSCS at £85K; we compensate by holding pooled money at Tier 1 banks and advertising the regime clearly. (See architecture for details.) For amounts under £85K, the customer-perceived security can be made comparable.
- **Directors' personal accounts.** Mettle does not offer personal accounts; the director still has a Monzo or a Barclays. We host both sides of the dividend transfer.
- **Multi-shareholder support.** Mettle caps at two owners. If a Ltd has three or more shareholders, Mettle is not an option. We serve them.

Xero plus Mettle wins on: zero incremental cost (Mettle is free, FreeAgent is bundled), FSCS at face value, NatWest-scale trust.

### Why a customer picks us over Revolut Business

- **UK Ltd DNA.** Revolut is global, feature-sprawling, not UK-Ltd-specific. Directors, dividends, shareholders are invisible in the app.
- **No MTD-VAT filing native in Revolut.** We file it.
- **Accountant channel.** Accountants lean toward FreeAgent or Xero, not Revolut's self-serve UX.

Revolut wins on: best-in-class multicurrency, the broadest international card acceptance, expense management at scale, bigger brand.

---

## Messaging hierarchy

### Hero

**"The only UK business account that treats a Ltd like a Ltd."**

Supporting second line: "Salary, dividends, shareholders, compliance. In one app. Correctly."

### Pillar 1: Ltd-native money

Claim: Directors and shareholders are first-class entities in the product. A personal account for each director. Pay a dividend to your own account, properly documented, in 4 taps.

Proof points:
- Directors' personal accounts linked to the Ltd account.
- Dividend payment workflow: reserves check, resolution, voucher, multi-shareholder split, Self Assessment tagging.
- Cap table synced with Companies House.

### Pillar 2: Accountant-grade books

Claim: The accountant your Ltd has (or has with Q) can close the books on our platform without exporting to another tool.

Proof points:
- Full chart of accounts with UK Ltd defaults.
- Journal entries, accruals, depreciation.
- MTD-VAT filing native.
- CT600 preparation (V2), year-end accounts draft (V3), direct submission to HMRC (V3).

### Pillar 3: Compliance that acts

Claim: Your HMRC and Companies House calendar is not a reminder; it is a to-do list that files things.

Proof points:
- Corporation Tax, VAT, PAYE, confirmation statement, P11D all surfaced with one-click-to-review-and-file flows.
- Auto-generated board resolutions for routine events.
- Document vault with every filing receipt archived.

---

## What we are deliberately not doing

Scope boundaries protect focus. Explicit non-goals:

1. **Not a consumer bank.** Personal accounts exist only as directors' accounts of Ltds we serve. We do not offer a standalone retail product.
2. **Not a full bank with deposit-taking.** We are an EMI. FSCS-style confidence is engineered through safeguarding disclosures and partner-bank segregation, not through our own banking licence (at launch).
3. **Not a global product.** UK-Ltd focus. Multicurrency is a feature for UK Ltds doing international business, not a platform for EU or US Ltds.
4. **Not a sole-trader-first product.** We support sole traders as a lightweight tier, but the flagship experience is the Ltd. A sole trader is welcome; the Ltd director is the hero.
5. **Not an investment product.** We do not wrap ISAs, SIPPs, or investment-management services. If a director wants to invest dividends, they use a separate broker.
6. **Not a lending-first product.** Credit is relevant (overdraft, invoice finance, working-capital line) but it is a feature sitting alongside the account, not a hero product. We may partner rather than originate at launch.
7. **Not a legal platform for funding rounds.** SeedLegals does rounds well. We stop at the governance events (resolutions, confirmation statements, share allotments for directors, EMI options as V3 add-on) and partner for complex M&A and funding documentation.
8. **Not an HR product.** Payroll is in scope; HR (leave management, performance, recruitment) is not.

The discipline: if a feature does not sit on the daily path of "run your Ltd correctly, pay yourself correctly, file what HMRC wants correctly," it waits or it is deleted.
