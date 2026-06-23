# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing website for **Elevate Art Entertainment** — a recording studio / music production / visual content company in **Downtown Cincinnati, OH** (services: voice recording, licensed beats, full production/mix/master, digital distribution, copyright registration, music video & photography, graphic design, and hourly studio rental). Bilingual business (ES/EN) but the **site is Spanish-only for now** (an EN toggle is a planned future enhancement). Owned/billed under **Vulqo LLC**; deploys to Vercel under the `vulqollc` account.

Built on a purchased template — **Frisk – Creative Agency & Portfolio (Next.js)** — using its **home-8 ("Personal Portfolio")** variant, adapted to the brand. (A previous build used the "Webfolio" template; it was fully replaced. The old files are not in the repo.)

## Commands

```bash
npm run dev      # local dev server
npm run build    # production build — run this to verify changes compile
npm run start    # serve the production build (use PORT=3001 npm run start if 3000 is busy)
npm run lint     # next lint
```

No test suite, no TypeScript — plain JavaScript/JSX. "Verify before done" = `npm run build` passes **and** the page renders correctly in a browser (use `agent-browser` to screenshot).

## Stack

- **Next.js 16 App Router**, **React 19**, JavaScript only. Node 18.18+/20+ (dev machine runs Node 22).
- `jsconfig.json` maps `@/*` to the repo root — import as `@/components/...`, `@/data/...`.
- **Real Sass build**: global styles are `public/assets/sass/style.scss` + `public/assets/css/vendor.css`, imported in `app/layout.jsx`. `next.config.mjs` sets `images.unoptimized: true` and silences Sass deprecations.
- Bootstrap 5 (dynamically imported in layout), GSAP, Isotope, react-slick, react-fast-marquee, react-scroll-parallax, react-tooltip, WOW.js (`utils/wow.js`).
- `app/layout.jsx` is a **client component** (uses `usePathname` to re-init WOW). It renders `<html lang="es"><body>` with `next/font` (Unbounded + Poppins) and wraps children in `Context` + `ParallaxProvider`. Because it's a client component it can't export `metadata` — **per-page `metadata` exports** carry SEO instead.

## Architecture and conventions

- **Data-driven.** Most content lives in `data/*.js` (not hardcoded in components). Edit these to change site content:
  - `data/site.js` — **central business config**: WhatsApp number, Instagram, email, city, YouTube. `waLink(msg)` builds a prefilled WhatsApp deep link; `igLink` is the Instagram URL. Everything contact-related imports from here. **Placeholders marked `PENDIENTE`** (real WhatsApp #, Instagram handle, email) must be filled in.
  - `data/menu.js` — top nav. Trimmed to the 5 real sections (Inicio `/`, Servicios `/service`, Portafolio `/project`, Estudio `/about`, Contacto `/contact`). Menu renderers (`components/headers/component/{Nav,DarkNav,MobileNav}.jsx`) guard on `subMenuItems`, so flat `{title, link}` items render as plain links.
  - `data/features.js` — the studio services (with `price`). `featureData2` (6) feeds the home; `featureData4` (7) feeds the Servicios page. All derive from one `SERVICES` array.
  - `data/videos.js` — YouTube video IDs for the portfolio (placeholder content from the artist's channel `@eslordhighh` until real portfolio media exists).
  - `data/contactInfo.js`, `data/socials.js`, `data/footerlink.js`, `data/portfolio.js` — contact cards, social links (IG/WhatsApp/YouTube), footer links, portfolio teaser items.
- **Pages compose Header + sections + Footer.** Each `app/.../page.jsx` is a server component (exports `metadata`) that stacks section components. The live site standardizes on **`Header7` + `Footer7`** (home-8's chrome) across all 5 used pages, so branding/nav/contact only need editing in one header + one footer.
- **Routing:** the root `app/page.jsx` renders the home-8 composition (`app/(homes)/home-8/page.jsx`). The template ships 12 home variants, plus shop/blog/team/pricing/faq and extra service/portfolio variants under route groups `app/(homes|services|portfolio|team|shop|blog)/` — these are **unused** (not linked in the menu) but kept. URLs keep the template's English slugs (`/service`, `/project`, `/about`); the nav labels are Spanish.

## Key adaptations already made (match these patterns)

- **Contact = WhatsApp, no backend.** There is **no database and no API route** (the previous Supabase setup was removed). The contact form (`components/contact/Contact.jsx`) and all CTAs build a `waLink(...)` and open WhatsApp. The Cta/Hero/Header/Footer "Reserva tu sesión" buttons all point to WhatsApp.
- **Brand assets** live in `public/assets/img/` as `logo.svg`, `logo-white-sm.svg`, `logo-white.svg`, `logo-dark.svg` (migrated from the brand kit; source files in `Logo/`). Favicon/icons in `app/` (`favicon.ico`, `icon.svg`, `apple-icon.png`).
- **Brand color = one variable.** `app/elevate.css` (imported in `app/layout.jsx`) defines `:root { --brand: #12a4db ... }` and aliases the template's `--theme-color`/`--yellow-color` to it. **To re-skin, change `--brand` only.** elevate.css also holds the dark-mode text-legibility overrides (`body.bg-title ...`) and the marquee/button accent fixes — when a section looks dark-on-dark, fix it there.
- **Dark everywhere.** Every used page adds `bg-title` to `<body>` via `components/common/DarkBody.jsx` (home does it through its Hero). New sections must use light text (`text-smoke`, `sec-text`) on dark; the `feature-card style2` variant is the dark card.
- **SEO:** per-page metadata is built with `data/seo.js` `buildMeta({title, description, path})` (adds OpenGraph + Twitter + canonical + metadataBase). `app/sitemap.js` + `app/robots.js` cover the 6 routes. `components/common/LocalBusinessSchema.jsx` emits JSON-LD (MusicGroup + LocalBusiness) on home and `/about`. Base URL lives in `data/site.js` (`site.url`).
- **No real photography yet — themed placeholders.** The template ships only "dimension" placeholder images. Use `placeholderImg(seed, w, h, theme)` from `data/site.js` (LoremFlickr, music/studio themes) for any image spot; hero/breadcrumb backgrounds use **dark CSS gradients**. The portfolio (`/project`) and home "Nuestros trabajos" embed real **YouTube** videos from `data/videos.js` (`@eslordhighh` placeholder). Don't rely on `public/assets/img/**` photos.

## Conventions for this repo (from global rules)

- Commit author must be `Vulqo LLC <vulqollc@gmail.com>`. Conventional commits, one logical change each. Never push (Luis pushes himself).
- Reuse template components and `data/*.js` before adding new ones. Keep content in Spanish. Never read or echo `.env.local`.
