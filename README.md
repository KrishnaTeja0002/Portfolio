# Krishna Teja's Portfolio

A React portfolio built with Vite.

## Local development

```sh
npm ci
npm run dev
```

Run `npm run build` to create the production site in `dist`.

## GitHub Pages deployment

Every push to `main` runs the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the site and deploys `dist` to GitHub Pages. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

The Vite base path is configured for the `Portfolio` repository.
