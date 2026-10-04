# AI For Global Good — Foundation & Website Plan

This plan covers two things that grow together: the **institution** (charter, governance, policies) and the **website** that presents it to the world. The roadmap follows the growth stages in [Article 13 of the Charter](CHARTER.md#article-13--growth-chapters-affiliates-and-federation).

---

## Guiding goals for the site

1. **Credibility.** Within 10 seconds, a visitor should understand who we are, what we do, and why we can be trusted: a public charter, named governance, and clear funding transparency.
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
| Domain | Custom domain to be decided (e.g. `aiforglobalgood.org`) |
| Analytics | Privacy-friendly and cookie-free (e.g. Plausible or GoatCounter), or none |
| Forms | External form service or GitHub Issues templates at first; no backend |
| i18n | English first; routes structured for `/es/`, `/fr/`, etc. later |

**Why these choices:** a static site costs nothing to host, has almost nothing to attack, loads fast on slow connections (important for a global audience), and lets non-developers contribute content through pull requests. If we later need logins, a member portal, or donations processing, we can add those as separate services without rewriting the site.

---

## Site map (MVP)

```
/                     Home: mission, focus areas, call to action
/about                Who we are, vision, principles, story
/charter              The full Charter, rendered from CHARTER.md
/focus-areas          The six mission areas (one section or page each)
/projects             Project directory (empty state: "Propose a project")
/projects/[slug]      Individual project pages
/get-involved         Volunteer, member, partner, donate paths
/governance           Board, committees, policies, transparency reports
/news                 Blog / announcements
/contact              Contact and social links
/404
```

---

## Roadmap

### Phase 0: Founding documents (now)

- [x] `CHARTER.md`: founding draft v0.1
- [x] `PLAN.md`: this document
- [ ] Review the Charter with the founding circle; fill in founders, date, and focus areas
- [ ] `CODE_OF_CONDUCT.md` (based on Contributor Covenant 2.1)
- [ ] `CONTRIBUTING.md`: how to contribute content and code
- [ ] `GOVERNANCE.md`: who decides what during the founding period
- [ ] `SECURITY.md` and a contact email
- [ ] Update `README.md` to link to all of the above
- [ ] Decide on licensing: MIT for code (already in place), **CC BY 4.0** for content

### Phase 1: Website MVP (weeks 1–3)

- [ ] Scaffold Astro project; set up content collections for `pages`, `projects`, `news`, `focusAreas`
- [ ] Base layout: header, footer, skip-link, responsive navigation
- [ ] Design tokens: color palette, typography scale, spacing, dark mode
- [ ] Build the pages in the site map above; `/charter` renders `CHARTER.md` directly, so there is a single source of truth
- [ ] SEO basics: titles, meta descriptions, Open Graph images, `sitemap.xml`, `robots.txt`
- [ ] GitHub Actions: build, then run link check and accessibility check (axe / pa11y), then deploy to Pages
- [ ] Custom domain and HTTPS

**Done when:** the site is live, Lighthouse scores are 95+ in every category, there are no axe violations, and the home page weighs under 200 KB.

### Phase 2: Identity & content (weeks 3–6)

- [ ] Logo, wordmark, and visual identity (simple, works at small sizes and in monochrome)
- [ ] Write the copy for every page; publish a founding announcement in `/news`
- [ ] Focus area pages: the problem, our approach, and example projects for each
- [ ] Create the first 2–3 project pages, even if they are only proposals
- [ ] Get Involved flows: volunteer form, project proposal template, partner inquiry
- [ ] Newsletter signup (privacy-respecting provider)

### Phase 3: Registered Foundation (Charter Stage II)

- [ ] Choose a jurisdiction and register; adapt the `[JURISDICTION]` clauses with legal counsel
- [ ] Publish the Board and the Ethics & Impact Committee on `/governance`
- [ ] Publish the policies listed in Charter Article 16
- [ ] Set up donations (a provider that supports the legal entity, with recurring giving)
- [ ] Publish the first transparency page: funding sources and spending

### Phase 4: Global Network (Charter Stage III)

- [ ] Add `/chapters` and `/chapters/[region]`, plus a guide to starting a chapter
- [ ] Translations: launch Spanish and French first, chosen by where the community is
- [ ] Fellowship and program pages
- [ ] Annual Report as a web page plus a PDF
- [ ] Partner directory and an impact dashboard

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
    │   └── news/
    ├── components/
    ├── layouts/
    ├── pages/
    └── styles/
```

---

## Open decisions

1. **Domain name**: `aiforglobalgood.org` or another option?
2. **Founding circle**: who signs the Charter and serves on the Interim Board?
3. **Focus areas**: keep all six from Charter Article 5.1, or lead with two or three?
4. **First flagship project**: something concrete to show on the home page at launch.
5. **Contact email and social handles**.
6. **Jurisdiction for registration** (Phase 3).
