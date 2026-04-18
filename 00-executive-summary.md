# 00. Executive summary

**The opportunity.** The UK has 5.5 million small businesses, roughly 2 million of which are limited companies, and none of the leading business-banking apps (Tide, ANNA, Revolut, Starling, Monzo) treats a Ltd's director-and-shareholder workflow as a first-class product.

**The gap.** Paying a dividend correctly - checking distributable reserves, drafting a board resolution, generating compliant vouchers, paying each shareholder to their own account, and recording the right data for Self Assessment - takes four tools today and zero tools do it end-to-end.

**Our wedge.** We are the only UK business account with directors' personal accounts linked to the Ltd's account, a dividend-payment workflow that produces vouchers and resolutions automatically, and accountant-grade books - sold through the Q Accountants channel.

**Three proof points.**

1. Across 14 UK-relevant business-account and accounting products researched, zero offer directors' personal accounts integrated with the Ltd's account, and only the accounting-first tools (FreeAgent, Xero, Crunch, Osome) produce compliant dividend vouchers at all. No banking-first product does. This is an uncontested wedge.
2. Starling is closing its Business Toolkit in March 2026, leaving a cohort of SMBs looking for an alternative bundle of banking plus bookkeeping. This is a time-bounded acquisition opportunity starting immediately.
3. Q Accountants gives us a warm channel with CAC an order of magnitude below the retail cohorts of Tide, ANNA, or Revolut. Accountants choose tools on behalf of their clients more often than clients choose tools themselves, and accountants care about governance depth, not card design.

**MVP scope (first 12 months).**

- EMI-authorised GBP business account, debit cards, via BaaS partner (Griffin or Modulr) while pursuing direct EMI.
- UK Ltd formation, registered address, mail forwarding.
- Directors' personal accounts linked to the Ltd's account.
- Dividend workflow (hero): reserves check, board resolution, voucher, multi-shareholder payment, Self Assessment data.
- Cap table synced with Companies House.
- Accountant-grade bookkeeping (chart of accounts, journal entries) with bank-feed-driven categorisation.
- Invoicing, receipt capture.
- Compliance calendar for Corporation Tax, VAT, PAYE deadlines.
- VAT registration and MTD filing.
- Document vault.
- Accountant portal (light version).
- Native mobile apps (iOS, Android) and web.

V2 (months 13-24): payroll and RTI, expense cards with controls, CT600 draft, multicurrency, advanced invoicing, board resolution library, shareholders agreement templates.

V3 (months 25-36): insurance marketplace, lending (broker), international payments, public API, multi-company accountant dashboard, year-end accounts draft, CT filing automation, advisory.

**Key risks and mitigations.**

- **EMI authorisation timeline (12-18 months).** Mitigation: launch on BaaS partner rails (Griffin or Modulr), migrate to direct EMI in year 2.
- **CASS 15 Supplementary Safeguarding Regime effective 7 May 2026.** Mitigation: build daily reconciliation and audit trail from day one; use this as a trust-positioning asset.
- **Tide closes the wedge.** Mitigation: ship the hero flow in months 6-9, own the narrative, lock in accountant channel before Tide redesigns its positioning.
- **Accountant channel does not scale beyond Q.** Mitigation: design the accountant portal and partner programme as a repeatable product from month 6; onboard 3-5 additional firms in year 2 before committing to the model.
- **Regulatory scope creep (insurance IDD, CT filing recognition, CCA for lending in V3).** Mitigation: budget for phased regulatory additions; partner before building owned permissions.

**Next decisions needed.**

1. **BaaS partner choice.** Griffin (full bank, API-first, Series A complete), Modulr (strongest in payments and payroll, larger scale), or ClearBank (most established, API-only). Recommendation: Griffin if appetite for newer partner; Modulr if payroll is the priority at MVP.
2. **Funding route.** Bootstrap via Q plus a small seed, versus a larger seed or Series A to accelerate. A £3-5M seed round supports 18-24 months to post-revenue metrics. A £10-15M Series A is viable if investor interest is strong and supports faster product breadth.
3. **EMI authorisation strategy.** Apply in parallel with BaaS launch (start paperwork month 0, live month 12-18) or wait until post-MVP signal. Recommendation: apply in parallel; the marginal cost is lower than the option value.
4. **Insurance and lending partnering strategy.** V3 features, but partnership conversations should start in year 2 with 12-month lead times.
5. **Q commercial terms.** Revenue share, white-label vs co-brand, client-data ownership, exclusivity period. Critical to formalise in the next 4-8 weeks before technical planning commits.
6. **Founding team.** Product, engineering lead, compliance lead (highly regulated; a senior compliance hire with EMI experience is essential by month 3), design lead.

Read the remaining documents in this folder in this order: [01 competitive analysis](01-competitive-analysis.md), [02 positioning](02-positioning.md), [03 feature architecture](03-feature-architecture.md), [04 screen plan](04-screen-plan.md), [05 competitive advantage](05-competitive-advantage.md).
