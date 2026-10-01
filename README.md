# ES 2015 presentation

An editable source project recreating the [ES 2015 presentation](https://kholodar.bitbucket.io/#/) with Reveal.js, Highlight.js, and Vite.

## Project structure

```text
index.html          Slide content and HTML entry point
src/
  main.js           Presentation setup and syntax highlighting
  theme.css         Typography, colors, and code styling
  controls.css      Arrow appearance and interaction states
public/img/         Timeline image, served without transformation
package.json        Dependencies and development/build commands
package-lock.json   Locked dependency versions
vite.config.js      Relative asset URLs for static hosting
```

Edit `index.html` to change slides. Top-level `<section>` elements are horizontal topics; nested sections are vertical slides within a topic. Keep the two stylesheets alongside `main.js` while the source remains this small.

`node_modules/` contains installed dependencies, `dist/` contains generated production files, and `output/` contains local verification artifacts. These directories and browser automation output are excluded by `.gitignore`; they are not source files. Everything in `public/` is copied to the build, so keep only site assets there.

## Run locally

Use Node.js 20.19+ within the 20.x release line, or Node.js 22.12+ (Vite's supported versions).

```sh
npm ci
npm run dev
```

Open the URL printed by Vite. Navigate with the arrow keys or the on-screen controls.

## Build

```sh
npm run build
```

The generated site is in `dist/` and can be hosted as static files. Dependencies are pinned in `package.json` and `package-lock.json`. Run `npm run preview` to inspect the production build locally.

## GitHub Pages

The [live presentation](https://charliegordon.github.io/es-2015/) is deployed by `.github/workflows/deploy.yml`. Every push to `main` installs the locked dependencies, builds the site with the `/es-2015/` asset base, and publishes `dist/` to GitHub Pages. You can also run the workflow manually from the repository's Actions tab.

In the repository's **Settings → Pages**, set **Source** to **GitHub Actions** before the first deployment. The local Vite configuration keeps relative asset URLs for other static hosts.
