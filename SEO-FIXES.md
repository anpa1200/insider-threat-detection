# SEO and AI-searchability fixes

Status at preparation time (2026-08-14): validated locally and awaiting publication. Search-engine submission remains a post-deployment human action.

## Issue 4 — Docusaurus metadata

- `docusaurus.config.js` centralizes the title suffix on `1200km`, declares the exact portfolio `og:site_name`, replaces the generic AP logo social card with the existing insider-activity hero cover, and enables the metadata build plugin.
- `src/pages/index.js` keeps the project name in the visible H1 and root metadata while the site configuration supplies only the shared suffix.
- `seo/descriptions.json` is the source of truth for 33 unique indexable-route descriptions, each 140–160 characters.
- `src/theme/DocItem/Metadata/index.js` applies those authored values and Twitter parity during server rendering, hydration, and client-side navigation.
- `seo-metadata-plugin.cjs` enforces the global title, description, canonical, social-parity, image, uniqueness, and branded-404 rules on every production build.

## Issue 7 — HexStrike destinations

- `docusaurus.config.js` labels the `github.com/0x4m4/hexstrike-ai` destination as `HexStrike AI (upstream project)`.
- No owner/fork HexStrike GitHub destination exists in this sub-site.

## Issue 8 — accurate sitemap dates

- `docusaurus.config.js` enables Git-derived document update times and date-valued sitemap entries, including the custom root route.
- `.github/workflows/deploy-pages.yml` checks out full Git history for accurate source dates.

## Issue 9 — structured data

- `src/pages/index.js` emits an absolute-URL root `BreadcrumbList`.
- `seo-metadata-plugin.cjs` preserves framework breadcrumbs, provides a valid fallback when absent, and exposes document update times as `article:modified_time`.
- `src/theme/DocItem/Metadata/index.js` exposes the same modified time and social metadata in the hydrated application head.

## Exact touched-file manifest

- `.github/workflows/deploy-pages.yml`
- `SEO-FIXES.md`
- `docusaurus.config.js`
- `seo-metadata-plugin.cjs`
- `seo/descriptions.json`
- `src/pages/index.js`
- `src/theme/DocItem/Metadata/index.js`

## Validation

- `npm run build` passed in a full-history worktree.
- Audited 33 indexable routes: 33 exact branded titles, 33 unique compliant descriptions, 33 canonical URLs, 33 Open Graph/Twitter parity matches, 33 project-cover matches, and 33 valid `BreadcrumbList` blocks.
- All 32 document routes expose `article:modified_time`; the custom root uses its Git date in the sitemap.
- `build/sitemap.xml` contains 33 URLs and 33 `<lastmod>` values.

## Deploy and human follow-ups

1. Publish this source repository and verify the deployment workflow completes successfully.
2. Rebuild the 1200km.com aggregate sitemap after the sub-site is live.
3. Resubmit the aggregate sitemap in Google Search Console and Bing Webmaster Tools, then inspect the root and representative case-study and detection pages.
