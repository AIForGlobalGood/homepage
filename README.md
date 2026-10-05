# AI For Global Good

A small, independent non-profit *builder* of AI projects for public benefit. We make projects, share most of them openly, and — when it makes sense — help a few grow into independent, mission-aligned products.

Home: [aiforglobalgood.org](https://aiforglobalgood.org)


## Status

Founding stage. No legal entity yet, no formal board yet, no donations yet. We're putting the pieces together in public.

## Documents

- [CHARTER.md](CHARTER.md) — who we are, what we believe, how we work
- [PLAN.md](PLAN.md) — roadmap for the organization and the website
- [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) — how we treat each other
- [CONTRIBUTING.md](CONTRIBUTING.md) — how to help
- [LICENSE](LICENSE) — MIT (code) &middot; [LICENSE-CONTENT](LICENSE-CONTENT) — CC BY 4.0 (content)

## Website

Static site built with [Astro](https://astro.build). Content is Markdown — adding a project or a news post means adding a file, not writing code.

```bash
npm install        # first time
npm run dev        # http://localhost:4321
npm run build      # production build into dist/
npm run preview    # preview the production build
```

### Layout

```
src/
├── content/
│   ├── projects/     # one Markdown file per project
│   └── news/         # one Markdown file per post
├── pages/            # routes
├── layouts/          # BaseLayout
├── components/       # Header, Footer
├── styles/           # global.css (tokens + dark mode)
└── content.config.ts # schema for projects and news

public/
├── CNAME             # → aiforglobalgood.org
├── favicon.svg
└── robots.txt

.github/workflows/deploy.yml   # build + deploy to GitHub Pages
```

### Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. Live preview: [aiforglobalgood.github.io/homepage](https://aiforglobalgood.github.io/homepage/). Custom domain: [aiforglobalgood.org](https://aiforglobalgood.org) (after DNS is pointed at GitHub).

DNS for the apex points to GitHub Pages A records (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`); custom domain and HTTPS are configured in the repo's **Settings → Pages**.


> **WARNING** This github organization is not affiliated with the AI for Good Foundation ([ai4good.org](https://ai4good.org)), the ITU AI for Good platform, the United Nations, or the Erasmus AI for Global Good Initiative. See [CHARTER.md](CHARTER.md).
