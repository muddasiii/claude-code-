# BRASA — Wood-Fired Steakhouse, Miami

A production-grade marketing site for a fictional upscale steakhouse, built with
**Astro + Tailwind CSS v4**. Dark, moody, luxe — elegant motion that stays fast
on any device.

> Design direction generated with the `ui-ux-pro-max` and `frontend-design`
> skills, then made deliberate (the templated "horizontal-scroll + liquid glass"
> default was rejected in favour of a refined editorial layout).

## Pages

| Route | What's there |
|-------|--------------|
| `/` | Hero, philosophy, signature cuts, the ember-cart experience, press, gallery teaser, visit/hours |
| `/menu` | Full menu with sticky category nav, dietary tags, market pricing |
| `/reservations` | Accessible booking form + policies/hours (demo submit) |
| `/gallery` | Masonry gallery with a native `<dialog>` lightbox (keyboard + arrows) |
| `/private-events` | Spaces, what's included, event-inquiry form |
| `/404` | On-brand not-found |

## Design system

- **Palette (dark-dominant):** ink `#0c0a09` · char `#16130f` · bone `#f6f3ee`
  text · **brass `#c9a24b`** accent · **ember `#d2542b`** used *once* as the
  signature glow.
- **Type:** Fraunces (optical display serif) · Inter (body) · Space Mono
  (prices/specs — reads like a butcher's spec sheet).
- **Motion:** CSS/transform-only scroll reveals, ease-out, 1–2 elements per
  view, with a full `prefers-reduced-motion` fallback. No scroll-jacking.

The full machine-generated source of truth lives in
`design-system/brasa-steakhouse/MASTER.md`.

## Commands

```bash
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the production build
```

## Make it real

Everything below is placeholder and clearly marked:

1. **Brand & details** — edit `src/data/site.ts` (name, address, hours, phone,
   social) and `src/data/menu.ts` (the menu).
2. **Photography** — every `<Placeholder>` is a self-contained CSS stand-in.
   Replace with `<img src="…" alt="…" loading="lazy" width="…" height="…"
   class="zoom-target h-full w-full object-cover" />`. Same goes for the gallery
   cells in `src/components/Gallery.astro`.
3. **Reservations & forms** — `ReservationForm.astro` / `EventForm.astro`
   currently confirm client-side. Search for `TODO:` to wire a real `fetch`
   POST, or drop in a Resy/OpenTable embed on `/reservations`.

## Built for performance & accessibility

- Astro ships ~0 KB JS by default; the small bits of interactivity are inlined.
- Semantic landmarks, skip link, labeled form fields, visible focus rings,
  `aria-current`, AAA-level text contrast on dark.
- Responsive at 375 / 768 / 1024 / 1440, no horizontal scroll, SVG icons only,
  hover states that never shift layout.
