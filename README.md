# Linwerk

The Linwerk website, built with Next.js (App Router), React 19 and TypeScript. It is a port of the static design
prototype and matches it pixel for pixel.

```bash
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`, `npm run format`.

## Routes

| Route             | Notes                                                        |
| ----------------- | ------------------------------------------------------------ |
| `/`               | Home                                                         |
| `/services`       | Services, integrations sphere, FAQ schema                    |
| `/industries`     | Industries, FAQ schema                                       |
| `/about`          | About us, dot globe                                          |
| `/careers`        | Open roles board (filters and search), FAQ schema            |
| `/careers/[slug]` | A role, statically generated from `src/data/jobs.ts`         |
| `/blog/[slug]`    | An article, statically generated from `src/data/articles.ts` |
| `/request`        | Request engineers form                                       |

Every page is prerendered. The design links to `/contact`, `/privacy`, `/terms`, `/terms-of-use`, `/cookies`,
`/pricing`, `/technologies` and `/security-compliance`, which do not exist yet; those links are kept, are not
prefetched, and land on `not-found.tsx`. The two forms validate in the browser and have no backend yet.

## Layout of the code

```
src/app                 routes, root layout, fonts, globals.css
src/components/sections one server component per page section (the markup)
src/components/fx       client components that attach motion to that markup; they render nothing
src/components/layout   header (client), footer, PageScope
src/components/careers  roles board, role page sections, apply dialog
src/components/forms    request form, shared field-validation hook
src/lib                 framework-free motion code (reveal, appear, scenes, accordion, trail)
src/data                jobs, articles, FAQs, team, globe points, image previews
src/fonts               self-hosted woff2 files
```

### Server markup, client effects

Sections are server components and ship no JavaScript. Motion (text reveal, scroll appear, the hero slider, the
interface scenes, the globes) is attached after hydration by small client components in `src/components/fx`.
Each one runs a single effect over the server-rendered DOM and cleans up after itself (timers, observers and
listeners via `AbortController`), so client-side navigation and React Strict Mode are safe. A page lists its
effects after `<main>`, with `<PageFx>` last.

Anything driven by data or user input is ordinary React state: the header menu, the roles board, the apply dialog
and the request form. Heavy or late code is loaded on demand: Lenis (smooth scroll) and the globe's land points.

### Stylesheet

`src/app/globals.css` is one stylesheet for the whole site. Rules shared by every page are written plainly. Rules
that belong to some pages only are scoped as `:where(html:has(.sN)) selector`; each page renders
`<PageScope page="…">`, a hidden marker carrying that page's `sN` classes (`src/styles/page-scope.ts`). `:where()`
adds no specificity, so the cascade on each page is exactly the cascade of the original page. When adding a page,
give it a `PageScope` of the page whose base styles it should share.

### Fonts

`src/app/fonts.ts` self-hosts Geist (300–400, variable), JetBrains Mono 400 and a seven-letter subset of Plus
Jakarta Sans 700 for the wordmark through `next/font/local`, with the same files and unicode ranges the design
uses. Only each face's own family name is passed to CSS (`--f-geist`, `--f-jbmono`, `--f-jakarta`); the fallback
chain lives in `globals.css`.

### Images

Pictures are pre-sized WebP and SVG files in `public/`, served as they are with plain `<img>`.

## Deploying

The project deploys to Vercel with the default Next.js settings; no environment variables are needed.
