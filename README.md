# AI For Global Good

A small, independent non-profit *builder* of AI projects for public benefit. We make projects, share most of them openly, and — when it makes sense — help a few grow into independent, mission-aligned products.

Home: [aiforglobalgood.org](https://aiforglobalgood.org) *(coming soon)*

**We are not affiliated with the AI for Good Foundation ([ai4good.org](https://ai4good.org)), the ITU AI for Good platform, the United Nations, or the Erasmus AI for Global Good Initiative.** We chose a similar-sounding name because it describes what we care about; the organization itself is independent. See [CHARTER.md](CHARTER.md) for the full founding statement.

---

## This repository

This repo holds our founding documents and (soon) the source of our website.

- [CHARTER.md](CHARTER.md) — who we are, what we believe, how we work (founding statement, intentionally light)
- [PLAN.md](PLAN.md) — the roadmap for the organization and the website
- [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) — how we treat each other
- [CONTRIBUTING.md](CONTRIBUTING.md) — how to help
- [LICENSE](LICENSE) — MIT license for code
- [LICENSE-CONTENT](LICENSE-CONTENT) — CC BY 4.0 for written content

---

## Status

Founding stage. No legal entity yet, no formal board yet, no donations yet. We're putting the pieces together in public.

If any of this resonates, see [CONTRIBUTING.md](CONTRIBUTING.md) or open an issue.

---

## Developing the website

The site is a static [Astro](https://astro.build) project. Content lives in Markdown under `src/content/`; adding a project or a news post means adding a file, not writing code (see [PLAN.md — How a project becomes a project page](PLAN.md#how-a-project-becomes-a-project-page)).

```bash
npm install            # install dependencies (first time only)
npm run dev            # local dev server at http://localhost:4321
npm run build          # production build into dist/
npm run preview        # preview the production build locally
```

### Project layout

```
src/
├── content/
│   ├── projects/        # one Markdown file per project
│   └── news/            # one Markdown file per post
├── components/          # Header, Footer
├── layouts/             # BaseLayout
├── pages/               # routes (index, about, charter, projects, news, etc.)
├── styles/              # global.css with design tokens + dark mode
└── content.config.ts    # schema for projects + news

public/
├── CNAME                # → aiforglobalgood.org
├── favicon.svg
└── robots.txt

.github/workflows/
└── deploy.yml           # builds and deploys to GitHub Pages on push to main
```

### Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. The `public/CNAME` file points Pages at `aiforglobalgood.org`.

**One-time setup once this repo is on GitHub:**

1. Push the repo to GitHub (e.g. `github.com/<owner>/homepage`).
2. In the repo: **Settings → Pages → Source: GitHub Actions**.
3. In your domain registrar's DNS for `aiforglobalgood.org`, point either:
   - **apex (`@`)** to GitHub Pages A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` — and (optional) a CNAME on `www` to `<owner>.github.io`; or
   - use your registrar's "ALIAS" / "ANAME" for the apex if available.
4. In **Settings → Pages**, verify the custom domain is `aiforglobalgood.org` and **Enforce HTTPS** is enabled (available after DNS propagates).

The first `main` push after setup will deploy the site to `https://aiforglobalgood.org`.
