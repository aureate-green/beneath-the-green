# Beneath the Green

A static Astro site for **Beneath the Green**: modern southern gothic cosmic horror, world bible, story archive, and AI-collaboration packet.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static site builds to `dist/`.

## Cloudflare Pages

Suggested settings:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `24` if Cloudflare asks / environment variable `NODE_VERSION=24`

If this repo is pushed as its own GitHub repository, no root directory setting is needed.
