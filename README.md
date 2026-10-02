# 4dcitygml portal

Source of the `4dcitygml` organization site at <https://4dcitygml.github.io/>.

The site is written in Markdown and rendered by GitHub Pages with Jekyll and
the Primer theme; there is no build step in this repository.

- `index.md`: what 4dcitygml is, the repositories and their roles, and the
  reference documents they own;
- `cities.md`: the list of city repositories, each linking to its
  authoritative `4dcitygml.json`;
- `404.md`: served by GitHub Pages for unknown paths;
- `_config.yml`: site title, theme, and the social preview image `og.jpg`;
- `_includes/head-custom.html`: the site icons (`favicon.svg`,
  `favicon-32.png`, `apple-touch-icon.png`).

The site links to the repositories that own each piece of content instead of
restating it. It has no analytics, cookies, external fonts, or JavaScript of
its own.

## Publishing settings

1. Keep the repository public.
2. In **Settings → Pages**, select **Deploy from a branch**.
3. Select `main` and `/ (root)`.
4. Confirm that `/`, `/cities.html`, a missing path (404), and all repository
   links resolve.

Do not place unpublished source data, credentials, internal planning files, or
temporary schema URLs in this repository. Schemas are added only after their
namespace and permanence policy are approved.
