# CampusPulse

CampusPulse is a portfolio prototype for the simulated NxtWave Growth Intern campaign for **Build Your First AI Project in 60 Minutes**. The planning scenario is 500 final-year engineering student registrations over seven days with a total campaign budget of INR 2,000. The project does not claim that registrations, campaign activity, or expenses have occurred.

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Open the local address printed by Vite. The public workshop page is `/`; the dashboard is `/dashboard` and contains Overview, Registrations, Ambassadors, and Channels sections.

Create and serve a production build with:

```bash
npm run build
npm run preview
```

## Public workshop page

The page describes a free, online, 60-minute workshop and its intended learning outcomes. It includes example beginner project ideas (a resume screener, study-notes summariser, and simple chatbot); these examples are not promises that participants will complete a project. It is intended for final-year engineering students and does not require prior AI experience. No date or start time is announced in the prototype.

The registration form collects a name, email, college, and optional referral code. It validates required fields and email format, prevents duplicate emails case-insensitively, and shows local confirmation after a successful submission. Form records are stored in the current browser only; no external booking or email confirmation is sent. **Share with a friend** copies the landing page address without its query parameters, so it does not pass along a referral code.

## Referral links and attribution

An ambassador can share a link such as:

```text
/?ref=CAMPUS01
```

The referral code is pre-filled only when it matches an existing ambassador code (case-insensitively). The field remains editable. A valid submitted referral code attributes that registration to Campus ambassadors and takes priority over a recognized `?source=` value. An unknown `ref` value is ignored; attribution then uses a recognized source or defaults to **Direct / Unattributed**.

Supported source parameters are:

```text
?source=ambassadors
?source=communities
?source=clubs
?source=social
```

Unknown source values remain Direct / Unattributed. Referral codes are checked against the ambassador list when a registration is submitted.

## Dashboard and record types

- **Overview:** unique public form submissions against the 500 target, remaining target, channel attribution, ambassador referrals, and recent activity.
- **Registrations:** search, channel filter, date sort, local entry creation, confirmed deletion, and CSV export. The export includes every record currently in the registration table and a record-type column.
- **Ambassadors:** create advocates with unique `CAMPUS01`, `CAMPUS02`, ... codes, search, sort by attributed submissions, and copy a referral link or code.
- **Channels:** compare actual submitted-form attribution with the campaign planning targets, review the planned allocation, and log local prototype expenses.

Three registration types are kept distinct:

- **Simulated samples** are fictional seed records. They are visible in management views but excluded from actual progress, actual channel totals, and actual ambassador submission counts.
- **Form submissions** are records created by the public form. Normalized unique emails of this type drive the 500 target, channel actuals, and ambassador actual referrals.
- **Local entries** are added from the dashboard. They help demonstrate management workflows but do not count toward public form-submission progress or actual channel totals.

Duplicate email checks cover all stored record types. Referral counts distinguish submitted records from simulated sample referrals.

## Planning assumptions

The campaign planning targets are not measured results:

| Channel | Planning target |
| --- | ---: |
| Campus ambassadors | 250 |
| WhatsApp and Telegram communities | 150 |
| College clubs and placement cells | 70 |
| Organic social media | 30 |
| **Total** | **500** |

Overview includes a **Simulated 7-day plan** with cumulative targets of 40, 100, 180, 270, 350, 430, and 500. It is an illustrative planning assumption, not an evidence-based forecast. It never affects actual registrations, progress, channel attribution, ambassador counts, or CSV records.

## Budget and expenses

The total campaign budget is INR 2,000. Planned allocation is INR 1,000 for paid social promotion, INR 600 for ambassador rewards, and INR 400 for contingency. The allocation is always presented separately from expenditure.

Actual spend starts at zero. The Channels page lets the user record an amount, category, and optional note as local prototype data. Amounts must be positive and the app rejects entries that would take total spend above INR 2,000. Entries persist in this browser and can be removed with confirmation. Remaining budget is calculated from recorded actual expenses. Cost per submission is actual spend divided by unique public form submissions; it is shown as unavailable when there are no such submissions. No expense is seeded.

## Reset actions

- **Reset demo data** replaces registrations with only the fictional seed records, restores the default three ambassadors and their referral codes, and clears locally logged expenses. It removes submitted, local, and test registration records.
- **Start fresh** clears all registrations (including samples), ambassador records, and locally logged expenses so empty states can be tested. Both actions ask for confirmation.

## Data storage and limitations

Registrations, ambassadors, and expenses use separate `localStorage` keys in the current browser. This is a front-end simulation with no backend, account system, or external API. **Local storage is browser-specific and is not shared across visitors, browser profiles, or devices.** Clearing browser site data removes the saved campaign data. Use fictional details while trying the form.

There is no workshop date or start time, server-side registration, real campaign reporting, or expense receipt/audit workflow. The seven-day schedule is a planning illustration only. There is no automated test script configured; `npm run build` runs the TypeScript project build and creates the production bundle.

## Technology

- React and TypeScript
- Vite
- Tailwind CSS with shared CSS typography tokens and responsive styles
- Lucide icons

The main application is in `src/main.tsx`; styles are in `src/styles.css`. Vite, TypeScript, Tailwind, and PostCSS are configured at the project root.
