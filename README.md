# georgezacharopoulos.com

Site for **George Zacharopoulos** — Astro 5 + `@kintana/sdk` 0.14.0 on Cloudflare Pages.

Full-screen hero, bottom nav, dark + gold brand. Sections: gigs, solo shows, press, gallery, bio, and contact.

## Setup

1. Copy `.env.example` to `.env` and add Kintana credentials from **Business → Websites → Custom site**.
2. Add hero photos to `public/hero.webp` and `public/hero-mobile.webp`.
3. Add gallery images to `public/gallery/` (see `src/content/site.ts`).
4. Run:

```bash
npm install
npm run setup:endpoints
npm run dev
```

## Deploy

```bash
npm run deploy
```

Set the same env vars in the Cloudflare Pages project settings.
