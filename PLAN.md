# Building AI For Global Good — Organization & Website Plan

This plan covers two things that grow together: the **institution** (charter, governance, policies, spin-outs) and the **website** that presents it to the world. The roadmap follows the growth stages in [Article 13 of the Charter](CHARTER.md#article-13--growth-chapters-affiliates-and-federation).

**Names used in this document:**
- Formal name: **Building AI For Global Good**
- Short-form name: **AI For Global Good**
- Primary domain: `aiforglobalgood.org`
- Legal entity name: to be determined at registration (may differ from the public brand; see Charter Art. 1.5)

---

## What this organization is

We are a non-profit *builder* of AI projects for public benefit, not a grant-making foundation. Our model:

1. **Incubate** projects, often with partners in low- and middle-income settings.
2. **Share openly** — most projects stay inside the organization and are released under open licenses (Charter Art. 18.1–18.2).
3. **Spin out** — a few projects grow to a scale or shape better carried by an independent, mission-locked entity (Charter Art. 18.3). The non-profit holds the IP license, a change-of-control veto, and any equity in trust for the mission.

This dual path is why the Charter is strict about non-distribution (Art. 11.1) and mission-lock on spin-outs (Art. 18.3), and why Art. 10.1 requires explicit disclosure of any spin-out financial interest held by Founders, Trustees, or staff.

---

## Guiding goals for the site

1. **Credibility.** Within 10 seconds, a visitor should understand who we are, what we do, and why we can be trusted: a public charter, named governance, clear funding transparency, and clear independence from similarly named organizations.
2. **Action.** Every page leads somewhere: join, volunteer, propose a project, partner, or donate.
3. **Built to grow.** Adding a project, chapter, news post, or language means adding a Markdown file, not writing new code.
4. **Practice what we preach.** The site is accessible (WCAG 2.2 AA), fast, privacy-respecting, low-carbon, and open source.

---

## Technology decisions

| Area | Choice |
| ---- | ------ |
| Framework | [Astro](https://astro.build) (static output) |
| Content | Markdown/MDX in Astro content collections |
| Styling | Plain CSS with design tokens (custom properties) |
| Hosting | GitHub Pages, deployed by GitHub Actions |
| Domain | `aiforglobalgood.org` (owned) |
| Analytics | Privacy-friendly and cookie-free (e.g. Plausible or GoatCounter), or none |
| Forms | External form service or GitHub Issues templates at first; no backend |
| i18n | English first; routes structured for `/es/`, `/fr/`, etc. later |

**Why these choices:** a static site costs nothing to host, has almost nothing to attack, loads fast on slow connections (important for a global audience), and lets non-developers contribute content through pull requests. If we later need logins, a member portal, or donations processing, we can add those as separate services without rewriting the site.

---

## Site map (MVP)

```
/                     Home: mission, focus areas, call to action
/about                Who we are, vision, principles, story, independence disclaimer
/charter              The full Charter, rendered from CHARTER.md
/focus-areas          The mission areas (one section or page each)
/projects             Project directory (empty state: "Propose a project")
/projects/[slug]      Individual project pages
/spin-outs            Register of spin-out entities (required by Charter Art. 12.1)
/get-involved         Volunteer, member, partner, donate paths
/governance           Board, committees, policies, transparency reports
/news                 Blog / announcements
/contact              Contact and social links
/404
```

Footer on every page carries the Charter Art. 1.5 independence disclaimer and a link to `/about#independence`.

---

## Brand coexistence — handling similar names

Several organizations use similar names (see Charter Art. 1.5). The following practices avoid confusion and reduce legal risk:

- **Always use the full three-word phrase** "AI For Global Good" (or the full formal name "Building AI For Global Good"). Never shorten to "AI for Good" or an acronym (AI4G, AIFG) in public copy.
- **Distinctive visual identity.** Logo, wordmark, color palette, and typography must not resemble `ai4good.org`'s or ITU AI for Good's.
- **Independence disclaimer** in the site footer and on `/about`:
  > *"Building AI For Global Good is an independent initiative. It is not affiliated with the AI for Good Foundation ([ai4good.org](https://ai4good.org)), the ITU AI for Good platform, the United Nations, or the Erasmus AI for Global Good Initiative."*
- **Courtesy outreach** before public launch: one short, friendly email to each of the AI for Good Foundation, the ITU AI for Good team, and ESAA. Keep copies as evidence of good-faith coexistence.
- **No federal trademark application** on the plain phrase (likely refused as descriptive and invites opposition). Register the stylized logo/wordmark instead, once it exists.
- **Defensive registrations:** `aiforglobalgood.com`, `.net` as redirects; `@aiforglobalgood` and `@buildingaifgg` on GitHub, LinkedIn, Mastodon, Bluesky, X (where available).
- **Keep provenance:** date-stamped charter, website launch, first project, first partnership — all evidence of first use for common-law trademark rights.

---

## Roadmap

### Phase 0: Founding documents (now)

- [x] `CHARTER.md`: founding draft v0.3 (name finalized, spin-out architecture added, name/affiliation clause in Art. 1.5)
- [x] `PLAN.md`: this document
- [ ] Review the Charter with the founding circle; fill in founders, date, and focus areas
- [ ] `CODE_OF_CONDUCT.md` (based on Contributor Covenant 2.1)
- [ ] `CONTRIBUTING.md`: how to contribute content and code
- [ ] `GOVERNANCE.md`: who decides what during the founding period
- [ ] `SECURITY.md` and a contact email
- [ ] Update `README.md` to link to all of the above and state the full name + short form
- [ ] Decide on licensing: MIT for code (already in place), **CC BY 4.0** for content
- [ ] Draft the courtesy outreach emails to AI for Good Foundation, ITU, and ESAA (do not send until after founding circle sign-off)
- [ ] Register defensive social handles (`@aiforglobalgood`, `@buildingaifgg`) on GitHub, LinkedIn, Mastodon, Bluesky, X
- [ ] Register defensive domains (`aiforglobalgood.com`, `.net`) as redirects if cheap/available

### Phase 1: Website MVP (weeks 1–3)

- [ ] Scaffold Astro project; set up content collections for `pages`, `projects`, `news`, `focusAreas`, `spinOuts`
- [ ] Base layout: header, footer (with independence disclaimer), skip-link, responsive navigation
- [ ] Design tokens: color palette, typography scale, spacing, dark mode — visually distinct from `ai4good.org` and ITU AI for Good
- [ ] Build the pages in the site map above; `/charter` renders `CHARTER.md` directly, so there is a single source of truth
- [ ] `/spin-outs` reads from `src/content/spin-outs/` (empty state at launch)
- [ ] SEO basics: titles, meta descriptions, Open Graph images, `sitemap.xml`, `robots.txt`
- [ ] GitHub Actions: build, then run link check and accessibility check (axe / pa11y), then deploy to Pages
- [ ] Custom domain and HTTPS

**Done when:** the site is live, Lighthouse scores are 95+ in every category, there are no axe violations, the home page weighs under 200 KB, and the independence disclaimer is visible in the footer of every page.

### Phase 2: Identity & content (weeks 3–6)

- [ ] Logo, wordmark, and visual identity (simple, works at small sizes and in monochrome; visually distinct from similarly named orgs)
- [ ] Write the copy for every page; publish a founding announcement in `/news`
- [ ] Focus area pages: the problem, our approach, and example projects for each
- [ ] Create the first 2–3 project pages, even if they are only proposals
- [ ] Get Involved flows: volunteer form, project proposal template, partner inquiry
- [ ] Newsletter signup (privacy-respecting provider)
- [ ] Send courtesy outreach emails to AI for Good Foundation, ITU, and ESAA

### Phase 3: Registered Organization (Charter Stage II)

- [ ] Choose a jurisdiction and register; adapt the `[JURISDICTION]` clauses with legal counsel
- [ ] Decide the formal legal name under which to register (may differ from the public brand; file a DBA/equivalent for "Building AI For Global Good" and "AI For Global Good")
- [ ] Run formal trademark clearance (USPTO TESS, EUIPO, WIPO Global Brand) in Nice classes 9, 41, 42, 45
- [ ] File a stylized-logo trademark once the visual identity is final (not the plain phrase)
- [ ] Publish the Board and the Ethics & Impact Committee on `/governance`
- [ ] Publish the policies listed in Charter Article 16, including:
  - Projects, IP, and Spin-out Policy (implementing Art. 18)
  - Brand and Trademark Use Policy (implementing Arts. 1.5 and 13.4)
- [ ] Set up donations (a provider that supports the legal entity, with recurring giving)
- [ ] Publish the first transparency page: funding sources, spending, and the spin-out register

### Phase 4: Global Network (Charter Stage III)

- [ ] Add `/chapters` and `/chapters/[region]`, plus a guide to starting a chapter
- [ ] Translations: launch Spanish and French first, chosen by where the community is
- [ ] Fellowship and program pages
- [ ] Annual Report as a web page plus a PDF
- [ ] Partner directory and an impact dashboard
- [ ] First spin-out: publish its entry on `/spin-outs` with license terms, mission-lock covenant, and Organization's interest (Charter Art. 12.1, 18.3(f))

### Phase 5: Federation (Charter Stage IV)

- [ ] Multi-entity governance pages
- [ ] Member portal, if needed (as a separate service)
- [ ] Endowment and major-gifts pages

---

## Repository structure (target)

```
/
├── CHARTER.md              # Supreme governing document (rendered at /charter)
├── PLAN.md
├── README.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── GOVERNANCE.md
├── SECURITY.md
├── LICENSE                 # MIT (code)
├── LICENSE-CONTENT         # CC BY 4.0 (content)
├── .github/
│   ├── workflows/deploy.yml
│   └── ISSUE_TEMPLATE/     # project proposal, volunteer, bug
├── public/                 # favicons, images, CNAME
└── src/
    ├── content/
    │   ├── focus-areas/
    │   ├── projects/
    │   ├── spin-outs/
    │   └── news/
    ├── components/
    ├── layouts/
    ├── pages/
    └── styles/
```

---

## Open decisions

1. ~~**Domain name**~~ — resolved: `aiforglobalgood.org`.
2. ~~**Organization name**~~ — resolved: *Building AI For Global Good* (short form: *AI For Global Good*).
3. ~~**Structural model**~~ — resolved: non-profit parent, with permitted mission-locked spin-outs (Charter Art. 18).
4. **Founding circle**: who signs the Charter and serves on the Interim Board? (Needs at least half of the first Board independent of Founders — Charter Art. 9.5.)
5. **Focus areas**: keep all six from Charter Art. 5.1, or lead with two or three?
6. **First flagship project**: something concrete to show on the home page at launch.
7. **Contact email and social handles** (first registration pass).
8. **Jurisdiction for registration** (Phase 3) — materially affects legal form (e.g., US 501(c)(3), UK CIO, FR Association loi 1901, DE Verein), indemnification wording (Art. 17.3), and dispute forum (Art. 17.4).
9. **Formal legal name** under which to register — may differ from the public brand (Charter Art. 1.5).
10. **Visual identity brief** — must be visually distinct from `ai4good.org` and ITU AI for Good.
