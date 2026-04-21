# HighCladd

Marketing website for **HighCladd**, a Toronto-based exterior siding company specialising in ACM panel supply, custom design, fabrication, and installation across the Greater Toronto Area.

Built with React 19, TypeScript, Tailwind CSS v4, and Webpack 5.

---

## Stack

| Layer | Technology |
|---|---|
| UI | React 19 (functional, hooks-only) |
| Styling | Tailwind CSS v4 via PostCSS |
| Language | TypeScript (strict) |
| Bundler | Webpack 5 + ts-loader |
| Fonts | Playfair Display, Inter (Google Fonts) |
| Icons | Bootstrap Icons (CDN) |

---

## Runbook

### Prerequisites

- Node.js 18+
- Yarn

### Install

```bash
yarn
```

### Development server (HTTPS)

```bash
yarn start
```

Opens at `https://localhost:3000`. The dev server uses a self-signed certificate — accept the browser warning on first load.

### Production build

```bash
yarn build
```

Output goes to `dist/`. The build copies everything in `public/` (images, fonts, `index.html`) alongside the compiled JS and CSS bundles.

### Lint & format

```bash
yarn lint       # ESLint (auto-fix)
yarn format     # Prettier (auto-fix)
```

---

## Project structure

```
src/
  components/
    App/          — root component and app-level state
    Common/       — reusable primitives (Button, Lightbox, SectionHeader, …)
    Navbar/       — top navigation with scroll-aware background
    Footer/       — footer with contact links
    Sections/     — page sections (HeroBanner, Services, Gallery, About, FAQ, Contact)
  hooks/          — useScrolled, useKeydown, useContactForm
public/
  assets/
    images/       — project photos (full + _sm mobile variants)
```

Each component has a co-located `.types.ts` file containing its TypeScript interfaces and static data constants.

---

## Contact

**HighCladd Siding**  
Phone: 437-559-0139 / 437-661-1916  
Email: info@highcladd.ca  
Instagram: @highcladd  
Service area: Toronto & Greater Toronto Area
