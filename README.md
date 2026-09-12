# 4dcitygml portal

Static source for the `4dcitygml` organization site at
<https://4dcitygml.github.io/>.

The initial portal provides:

- an English-language introduction to the project;
- links to tools, the city template, and three demonstration repositories;
- `cities.json`, a small discovery cache pointing to each repository's
  authoritative `4dcitygml.json`;
- `og.jpg`, the project-specific social preview image;
- `favicon.svg`, `favicon-32.png`, and `apple-touch-icon.png`, the site icon
  derived from the header mark; and
- `404.html`, which GitHub Pages serves for unknown paths.

The site has no analytics, cookies, external fonts, JavaScript, or server-side
processing. It can be published directly from the root of `main`
with GitHub Pages; no build step is required.

## Publishing settings

1. Keep the repository public.
2. In **Settings → Pages**, select **Deploy from a branch**.
3. Select `main` and `/ (root)`.
4. Confirm that `/`, `/cities.json`, and all repository links resolve.

Do not place unpublished source data, credentials, internal planning files, or
temporary schema URLs in this repository. Schemas are added only after their
namespace and permanence policy are approved.
