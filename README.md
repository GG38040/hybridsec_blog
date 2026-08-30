# HybridSec

Source for [hybridsec.org](https://hybridsec.org), an Astro-based publication covering cyber security, hybrid warfare, national security, science, and space.

## Local development

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

## Validation

```sh
npm run validate
```

The validation pipeline performs Astro type checking, ESLint analysis, a production build, and internal-link validation. GitHub Actions runs the same pipeline for pull requests and pushes to `main`.

## Publishing

Posts live in `src/content/blog` and are validated by `src/content.config.ts`. Set `draft: true` in front matter to exclude a post from listings, individual routes, RSS, and the generated sitemap.

Netlify deploys the static `dist` output from `main`. Newsletter submissions use Netlify Forms.
