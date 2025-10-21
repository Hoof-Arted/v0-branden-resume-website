# Branden Resume Website V1

This repository contains a statically generated Next.js portfolio that can be deployed on [GitHub Pages](https://pages.github.com/).

## Getting Started

```bash
pnpm install
pnpm dev
```

## Building for GitHub Pages

The project is configured to produce a fully static build via `pnpm run build`, which outputs files to the `out/` directory. Deploy the contents of that folder to the `gh-pages` branch (or your preferred Pages branch).

If your site is published from a subdirectory (for example, `https://<username>.github.io/<repository>`), set the environment variable `NEXT_PUBLIC_BASE_PATH` to the repository name before building:

```bash
NEXT_PUBLIC_BASE_PATH="<repository>" pnpm run build
```

After building, preview the static export locally with:

```bash
pnpm run preview
```

This starts a static server on [http://localhost:3000](http://localhost:3000).

This automatically adjusts the base path and asset prefix so that all links and static assets resolve correctly on GitHub Pages.

## Contact Form

Because GitHub Pages does not provide server-side execution, the contact form now opens a pre-populated email in the visitor's default mail client instead of attempting to send email through server actions.
