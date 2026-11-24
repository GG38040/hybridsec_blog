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

## Newsletter setup

The shared `src/components/Newsletter.astro` component renders a native HTML form named `newsletter` on the homepage, blog listing, and topic pages. It posts the required email address to Netlify Forms without JavaScript and redirects successful submissions to `/newsletter-success/`. A hidden `bot-field` honeypot helps filter spam. `netlify.toml` sets the build command and publish directory so Netlify can scan the generated HTML.

To activate collection on Netlify:

1. Open the site's **Forms** panel and select **Enable form detection**. If detection was previously disabled, use **Forms > Usage and configuration > Form detection**.
2. Deploy the site after enabling detection. In **Forms**, confirm that the `newsletter` form was detected.
3. Submit an email address you control through the deployed Subscribe form. Confirm that the thank-you page opens and the submission appears under **Forms > newsletter**. Local Astro development and preview servers do not process Netlify submissions.
4. If desired, configure a form submission notification in Netlify to be notified of new subscribers.

Netlify Forms collects signup submissions; it does not send newsletters or manage unsubscribe links. Before sending newsletter campaigns, connect or export the collected addresses to your email platform and configure unsubscribe handling there.

See the [Netlify Forms setup documentation](https://docs.netlify.com/manage/forms/setup/).
