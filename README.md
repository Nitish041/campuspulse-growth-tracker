# CampusPulse

CampusPulse is a portfolio prototype for planning and tracking the NxtWave Growth Intern workshop campaign, **Build Your First AI Project in 60 Minutes**. The campaign is simulated: the app does not represent real registrations, marketing activity, or expenditure.

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Open the local address printed by Vite. The main routes are:

- `/` — public workshop introduction and registration form
- `/dashboard` — internal growth dashboard, with Overview, Registrations, Ambassadors, and Channels sections

Create and serve a production build with:

```bash
npm run build
npm run preview
```

## What the prototype includes

### Public workshop page

The landing page explains the free, online, 60-minute workshop and presents three intended learning outcomes. It does not advertise an unconfirmed workshop date, start time, certificate, or guaranteed project result.

The registration form collects a name, email, college, and optional ambassador referral code. It validates required fields and email format, rejects duplicate emails without regard to letter case, and shows an in-page confirmation after saving. That confirmation is local prototype feedback; no external booking or email confirmation is sent.

### Growth dashboard

- **Overview:** workshop form submissions against the 500 target, remaining registrations, attribution by channel, ambassador referrals, and recent activity.
- **Registrations:** search, channel filter, date sort, add and confirmed delete actions, and CSV export. Each record is labelled as a simulated sample, workshop form submission, or local entry.
- **Ambassadors:** add advocates, generate unique `CAMPUS01`, `CAMPUS02`, … codes, search, sort by form submissions, and copy codes.
- **Channels:** compare submitted form attribution with the four campaign planning targets, and review the budget plan.
- **Demo controls:** restore the seeded demo records or clear local registrations and ambassadors to start fresh.

## Attribution and counting

Registration data is kept in one local store and shared by the landing form and dashboard in this browser. An untracked landing-page registration is attributed to **Direct / Unattributed**. A valid referral code attributes it to **Campus ambassadors**. A recognized campaign link can set a source channel with one of these query parameters:

```text
?source=ambassadors
?source=communities
?source=clubs
?source=social
```

Submitting a referral code takes precedence over the link source. Unknown source values remain unattributed.

The prototype distinguishes three record types:

- **Simulated samples** are fictional seed records. They appear in management views and are labelled, but do not count toward campaign progress, actual channel totals, or actual ambassador submissions.
- **Form submissions** come from the public workshop form. These unique, normalized email records drive the 500 target, channel actuals, and ambassador referral actuals.
- **Local entries** are added from the dashboard’s Registrations section. They are useful for exercising management workflows but are excluded from form-submission progress and actual attribution totals.

Duplicate email addresses are checked across all stored record types. The registration table’s CSV export includes the record type so simulated, submitted, and local records remain distinguishable.

The channel targets are planning estimates, not results:

| Channel | Planning target |
| --- | ---: |
| Campus ambassadors | 250 |
| WhatsApp and Telegram communities | 150 |
| College clubs and placement cells | 70 |
| Organic social media | 30 |
| **Total** | **500** |

## Budget and cost metrics

The campaign budget is **₹2,000**. Planned allocations are ₹1,000 for paid social promotion, ₹600 for ambassador rewards, and ₹400 held as contingency. The paid social allocation is shown in the budget plan; it is not attributed to the organic social registration channel.

Actual spend is **₹0** because the simulated campaign has not run. The remaining budget is therefore ₹2,000, and actual cost per registration is shown as unavailable. The prototype has no expense-entry workflow or projected registration forecast. Planned allocations are not presented as actual expenditure.

## Data storage and privacy

The prototype stores registrations and ambassadors in this browser’s `localStorage`. It has no backend, account system, or external API. **Local storage is not shared across visitors, browser profiles, or devices.** Clearing the browser’s site data removes the saved records. Use fictional details while trying the form.

## Technology and project files

- React and TypeScript
- Vite
- Tailwind CSS, with shared CSS typography tokens and responsive styles
- Lucide icons

The main application is in `src/main.tsx`; visual styles are in `src/styles.css`. Vite, TypeScript, Tailwind, and PostCSS are configured at the project root.

## Current limitations

- Registrations are not sent to NxtWave or stored on a server.
- Campaign activity and spend are not recorded; actual spend remains zero.
- There is no workshop date or start time in this prototype.
- There is no automated test script configured. `npm run build` runs the TypeScript project build and creates the production bundle.
