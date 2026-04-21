# Companies House access plan — Path A (MVP)

Three registrations needed before QPay can submit IN01s in production.
All free except actual filing fees (£100 per IN01 from 1 Feb 2026).
Path B (ACSP) is a separate parallel track with its own application.

---

## TL;DR

| # | Access | Where | Time | Blocker? |
|---|--------|-------|------|----------|
| 1 | Presenter ID + password (XML Gateway, production) | email `ch.softwarehouse@companieshouse.gov.uk` | 3–7 days | Yes |
| 2 | Test Presenter ID + password (sandbox) | same email as #1 — bundled request | 3–7 days | Yes, for dev |
| 3 | Credit Account (for £100 filing fees) | CA1 form → post or email to CH | 5–10 days + 1–3 days BACS | Yes, for live |
| 4 | Public Data API key (free name checks, company lookup) | self-serve at `developer.company-information.service.gov.uk` | 5 minutes | No |

**Critical path:** Credit Account is slowest (5–10 days approval + BACS top-up).
Submit CA1 on Day 1 in parallel with email #1. Everything else hangs off those two.

---

## 1. Presenter ID + Authentication (XML Gateway)

**What we get:** a 6-digit Presenter ID and authentication password, bound to
QPay's software. This is the identity under which QPay submits IN01 XML
envelopes to the Companies House XML Gateway. Every submission includes the
Presenter ID in the envelope header; CH authenticates via a hashed password.

**Where to request:** Companies House Software Developer Support.
- Email: `ch.softwarehouse@companieshouse.gov.uk`
- This is the only channel — there is no self-serve portal for the XML Gateway.

**Cost:** free to register; per-submission fees paid via Credit Account (see #3).

**Documentation they'll send back:**
- Presenter ID (6 digits)
- Authentication password (set by us during activation)
- Technical spec URLs for the XML Gateway
- Rate limits and submission windows

### Email template — Presenter ID request

> **To:** `ch.softwarehouse@companieshouse.gov.uk`
> **Subject:** Software Developer registration — QPay Ltd — Presenter ID request (production + test)

```
Dear Software Developer Support Team,

I am writing on behalf of QPay Ltd to request Presenter ID credentials
for XML Gateway filing, including a parallel test-environment account
for our development work.

Company details
  Company name:         QPay Ltd
  Registered office:    [TBD — QPay's London office]
  Company number:       [applying in parallel / company number here once issued]
  Primary tech contact: [name], [email]
  Business contact:     Maria Iontseva, maria@mitocholine.com

Software description
  QPay is a UK business-account platform for new limited companies.
  We file IN01 on behalf of our users as part of an integrated
  onboarding flow; subsequent statutory filings follow post-
  incorporation. Submissions are constructed client-side as XML
  envelopes against the Companies House schemas and delivered through
  the XML Gateway.

Forms we plan to file (MVP)
  - IN01 (Incorporation)

Forms planned for follow-on releases
  - AP01 / AP02 / AP03 / AP04  (director and secretary appointments)
  - TM01 / TM02                 (terminations)
  - CS01                        (confirmation statement)
  - AA02 / AA03                 (dormant and micro accounts)

Requested credentials
  1. Production Presenter ID + authentication password
  2. Test Presenter ID + authentication password (sandbox)

We have reviewed the XML Gateway schemas and will follow the standard
submission, acknowledgement, and rejection handling protocols. Happy
to provide additional information or a technical walkthrough.

Best regards,
[Your name]
[Role], QPay Ltd
[Email]
[Phone]
```

**Notes:**
- Be explicit about requesting both production and test — they sometimes
  issue only production unless you ask for both.
- If QPay Ltd isn't incorporated yet, put the incorporation as in-flight
  with an expected date; CH are fine with that.

---

## 2. Test Presenter ID + Test Credit Account (sandbox)

**What we get:** a parallel set of credentials that submit into CH's test
environment. Submissions are parsed, validated against the real schemas,
and either accepted (no company is created — it's simulated) or rejected
with the same error codes as production.

**Why we need it:** to integration-test the full IN01 construction and
submission pipeline without paying £100 per attempt and without polluting
the real register.

**Where:** same request as #1 above. Most teams request both at once.

**Cost:** free. Test Credit Account is also free and pre-funded.

---

## 3. Credit Account (for real filing fees)

**What we get:** a pre-funded account with Companies House; each IN01 we
submit debits the £100 filing fee from it. Without a funded Credit Account
CH will reject live submissions even if the XML is valid.

**Where to apply:**
- Form: **CA1** (Credit Account application)
- Submission: post or email to Companies House Credit Account team
- Funding method: BACS bank transfer from our business account

**Current fees relevant to us (from 1 Feb 2026):**
| Filing | Digital fee |
|--------|-------------|
| IN01 (incorporation) | £100 |
| CS01 (confirmation statement) | £34 |
| AP01 / TM01 (appointments/terminations) | £0 |
| Change of name (NM01) | £20 |

**Recommended initial top-up:** £250. Covers 2 IN01s as buffer from day 1.
For scale we'll top up with larger BACS transfers once we have monthly
throughput data.

### Cover email template — Credit Account application

> **To:** Companies House Credit Account team (address printed on CA1 form — confirm the current one when filling out)
> **Subject:** Credit Account application — QPay Ltd

```
Dear Companies House,

Please find attached our completed CA1 form applying for a Credit
Account for QPay Ltd.

We plan to use the Credit Account primarily to fund IN01 submissions
via the XML Gateway, with volumes ramping as we onboard new customers.
We expect initial monthly volume in the low double digits, growing
from there.

Initial BACS top-up planned upon approval: £250.

Please confirm receipt and the BACS remittance details.

Company details
  Company name:  QPay Ltd
  Company number:[TBD]
  Registered office: [TBD]
  Contact:       [name], [email], [phone]

Best regards,
[Your name]
[Role], QPay Ltd
```

**Notes:**
- CA1 asks for a single nominated contact — keep it consistent with the
  contact used in the XML Gateway registration so CH can cross-reference.
- Fund the account before going live; a submitted IN01 with zero balance
  bounces.

---

## 4. Public Data API key (free, self-serve)

**What we get:** an API key to query the public Companies House register:
name availability checks, SIC code lookups, officer searches, full company
filings history.

**Used in Path A at:**
- **A-05 (company name):** live check as user types — is the name already
  taken? does it trip "same as" rules?
- **A-06 (SIC codes):** suggest relevant codes from natural-language search.
- Post-MVP: powering the "I already have a Ltd" onboarding branch.

**Where:** `developer.company-information.service.gov.uk`
- Click **Register** (top right)
- Create account → verify email → create application → get API key
- Rate limit: 600 requests per 5 minutes on free tier. Plenty for MVP.

**Cost:** free.

**No email template needed** — entirely self-serve, takes 5 minutes.

---

## What we DO NOT need for Path A

These become relevant for Path B (ACSP) or later releases — do not block MVP:

- ❌ **ACSP registration** — required only to verify IDs ourselves in-app.
  Path A bounces users to GOV.UK One Login instead. Separate track.
- ❌ **Identity Verification Service (direct API)** — also ACSP-only. For
  Path A we capture the personal code the user returns with after One Login,
  no API call needed.
- ❌ **REST Filing API for incorporations** — Companies House has not yet
  published REST endpoints for IN01. When they do, we migrate; until then
  XML Gateway is the only route.
- ❌ **Streaming API** — real-time stream of register events. Useful later
  for reconciliation and cap-table sync; not MVP.

---

## Timeline

| Day | Action | Owner |
|-----|--------|-------|
| D+0 | Send email from template #1 to `ch.softwarehouse@companieshouse.gov.uk` | Maria |
| D+0 | Download & fill CA1 form; send by post OR email with template #3 | Maria |
| D+0 | Register for Public Data API key (5 min, self-serve) | Maria |
| D+1 → D+7 | CH responds with Presenter ID + test creds | — |
| D+1 | Start building IN01 XML construction + signing pipeline using schema docs | Dev |
| D+7 → D+10 | Credit Account approved + BACS remittance details received | Maria |
| D+10 → D+12 | BACS top-up £250 clears | Maria |
| D+7 → D+20 | Run test IN01s in sandbox, iterate on validation errors | Dev |
| D+20 | First live IN01 submission with internal test company | Dev + Maria |
| D+20 → ongoing | First customer formations | — |

**Single critical blocker:** Credit Account funding. Everything else can
progress in parallel while waiting.

---

## Useful references

- XML Gateway schemas and protocol docs: CH send these with the credentials.
  Public mirror at `developer.companieshouse.gov.uk` (separate from the
  Public Data API subdomain).
- Public Data API docs: `developer-specs.company-information.service.gov.uk`
- Filing fees (current and historic): search `"Companies House fees"`
  on gov.uk — the PDF lists every form.
- CA1 form: search `"Companies House CA1"` on gov.uk for the latest PDF.

---

## Risks / things to watch

1. **CH response times can slip during end-of-year filing rush** (late
   Dec, early Jan when a lot of companies file year-end accounts). Not
   relevant right now, but worth tracking if we re-apply or add services.
2. **CH may deprecate XML Gateway** once they release REST incorporation
   — no published date but expected within 12–24 months. We plan migration
   when the REST spec ships; until then XML is the only route.
3. **Credit Account balance alerts** — set an internal low-balance
   threshold (e.g., £300). If we run dry mid-session our flows will 500.
4. **Schema version pinning** — CH occasionally releases new IN01 schema
   versions (currently v12.0, Feb 2026). They give ~30 days notice; we
   should subscribe to their developer mailing list the moment we get the
   Presenter ID.
