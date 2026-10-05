# AI For Global Good — Plan

What we're building, and how we'll grow it. Kept light on purpose while we're small.

For who we are, what we believe, and who we're not affiliated with, see [CHARTER.md](CHARTER.md). This file is only about the website and the work of standing the organization up.

**Rough cost of this whole plan:** ~$30/year for the main domain, maybe $20–40 for defensive domains, free for hosting (GitHub Pages) and analytics. Everything else is time.

---

## Site goals

1. **Clear.** A visitor should understand what we do in 10 seconds.
2. **Honest.** No overclaiming while we're small. Say what exists and what's planned.
3. **Easy to grow.** Adding a project, post, or page means adding a Markdown file.
4. **Practices what we preach.** Fast, accessible, privacy-respecting, open source.

---

## Tech choices

| Area | Choice |
| ---- | ------ |
| Framework | [Astro](https://astro.build) (static output) — but if we stay below ~10 pages, plain HTML + a tiny build script is fine too; we'll revisit |
| Content | Markdown in Astro content collections |
| Styling | Plain CSS with design tokens |
| Hosting | GitHub Pages via GitHub Actions |
| Analytics | Privacy-friendly (Plausible / GoatCounter), or none |
| Forms | GitHub Issues templates at first (project proposal, volunteer interest, partner inquiry, bug) |
| Licenses | MIT for code, CC BY 4.0 for content |
| i18n | English first; routes ready for `/es/`, `/fr/` later |

---

## Site map

```
/              Home
/about         Who we are, what we believe, independence note
/charter       The founding statement (CHARTER.md)
/projects      What we're building (empty state: "Propose a project")
/projects/[slug]
/get-involved  Volunteer, partner, support
/news          Short updates
/contact
/404
```

The footer carries a short independence note on every page.

---

## Naming and brand (handling similar-sounding orgs)

- Always use the full three words — *AI For Global Good*. Never shorten to "AI for Good" in copy.
- Visual identity (logo, palette, type) must look clearly different from `ai4good.org` and ITU AI for Good. *This is the single most important differentiator; everything downstream in the plan depends on it.*
- Independence disclaimer in the site footer and on `/about`.
- Right after the site is live, send a short, friendly note to the AI for Good Foundation, ITU AI for Good, and ESAA — introducing ourselves and confirming independence.
- Don't file a trademark on the plain phrase. If anything, trademark the stylized logo later.
- Grab defensive handles (`@aiforglobalgood`) on the main platforms, and `aiforglobalgood.com` / `.net` as redirects if cheap.

---

## Roadmap

No calendar on these — we move at the speed of whoever has time.

### Now — founding

- [x] `CHARTER.md` — founding statement (v0.4, intentionally light)
- [x] `PLAN.md`
- [ ] Agree the founders and sign the statement
- [x] Short `CODE_OF_CONDUCT.md` (Contributor Covenant 2.1)
- [x] Short `CONTRIBUTING.md`
- [x] `README.md` linking to the above
- [x] `LICENSE-CONTENT` (CC BY 4.0 for written content)
- [ ] Register social handles and defensive domains

### Soon — website MVP

- [x] Scaffold Astro project; content collections for `projects`, `news`
- [x] Base layout: header, footer with independence note, responsive nav
- [x] Design tokens: palette, typography, dark mode — visually distinct from similarly named orgs
- [x] Build the pages above; `/charter` renders `CHARTER.md`
- [x] SEO basics (titles, descriptions, OG, canonical, `robots.txt`)
- [x] GitHub Actions workflow for build + deploy to GitHub Pages
- [x] `public/CNAME` → `aiforglobalgood.org`
- [x] Push to GitHub and enable Pages (Settings → Pages → Source: GitHub Actions)
- [x] First deploy live at [aiforglobalgood.github.io/homepage](https://aiforglobalgood.github.io/homepage/)
- [ ] Point DNS for `aiforglobalgood.org` at GitHub Pages (see [README.md — Deployment](README.md#deployment)); custom domain set in repo Pages settings, HTTPS after DNS verifies
- [ ] Add link check + accessibility check (axe/pa11y) steps to the workflow
- [ ] Right after launch: send the courtesy intro notes to AI for Good Foundation, ITU AI for Good, and ESAA

**Done when:** site is live and public, Lighthouse ≥90 on Performance and Accessibility, no critical axe violations, independence note visible on every page. Finer polish (95+ scores, sub-200 KB) is a nice-to-have, not a launch gate.

**Launch posture:** the site is public from the moment it builds green. Empty states are honest; stealth isn't.

### Next — identity and first content

- [ ] Logo and wordmark (simple, works small, works monochrome, visually distinct — see Naming and brand)
- [ ] Copy for every page; a short founding post in `/news`
- [ ] First 2–3 project pages (even if just proposals — see "How a project becomes a page" below)
- [ ] Simple "get involved" paths: volunteer, propose a project, partner

### Later — registration

- [ ] Choose a jurisdiction; register as a legal entity
- [ ] Turn the founding statement into formal governance docs — must preserve the "What we believe," "What we won't do," non-distribution, and spin-out principles from [CHARTER.md](CHARTER.md)
- [ ] Formal trademark clearance; file the stylized logo if useful
- [ ] Donations setup
- [ ] First transparency page

### Much later — if the work resonates

- [ ] Chapters / affiliates
- [ ] Translations
- [ ] Annual report
- [ ] First spin-out (and its public page)
- [ ] Federation

---

## How a project becomes a project page

1. Anyone opens a GitHub Issue using the **Project proposal** template.
2. The founding team (later: a lightweight review group) looks at mission fit and risk per the "What we won't do" section of the charter.
3. If accepted as a proposal: a short Markdown file is added under `src/content/projects/` with status `proposal`. It appears on `/projects` immediately.
4. As the project moves to `active`, `shipped`, or `archived`, the same file is updated. No code changes required.

This keeps the pipeline open to non-developers and keeps the website honest about what's real vs. aspirational.

---

## What we're deliberately not doing yet

Managing expectations is part of the point.

- **No donations yet** — we're not a registered legal entity, so we can't accept them properly.
- **No formal board** — the founders act as an interim team until we register.
- **No translations** — English first, until there's a community that wants another language.
- **No member portal, logins, or accounts** — just a static site.
- **No trademark filing** on the plain phrase (see Naming and brand).
- **No spin-outs yet** — the mechanism is sketched in the charter, but no project is near that stage.
- **No commitment to a launch date** — we ship when the MVP is honest, not when a calendar says so.

---

## We'll feel the plan is working when

- The first external contributor opens a PR.
- The first partner or volunteer reaches out via `/contact`.
- The first project moves from `proposal` → `active`.

Three signals, not metrics.

---

## Repo layout (target)

```
/
├── CHARTER.md
├── PLAN.md
├── README.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE               # MIT (code)
├── LICENSE-CONTENT       # CC BY 4.0 (content)
├── .github/
│   ├── workflows/deploy.yml
│   └── ISSUE_TEMPLATE/
├── public/               # favicons, CNAME, images
└── src/
    ├── content/
    │   ├── projects/
    │   └── news/
    ├── components/
    ├── layouts/
    ├── pages/
    └── styles/
```

---

## Open questions

1. **First project** — the biggest unknown. Without something concrete, everything else is scaffolding.
2. **Founders** — who signs the statement and acts as the interim team?
3. **Contact email** — one address to use everywhere.
4. **Jurisdiction** — where we eventually register (affects the formal docs much later).

---

## Changelog

- **v0.4** (Oct 2026) — lightened; name set to *AI For Global Good*; de-duplicated org facts (now in CHARTER); downgraded Lighthouse gate; added "deliberately not doing" and "working when" sections; added project-page pipeline.
- **v0.1** (Oct 2026) — initial plan.
