# Editing the IT support portfolio

The landing page uses `index.html`, `portfolio.css`, and `portfolio.js` with no build or external assets required. Serve this directory with `python3 -m http.server 8000`.

## Adding real screenshots

Each entry in `portfolioProjects` in `portfolio.js` has a `screenshot: null` field. Leave it null to show a labeled CSS concept illustration. To replace that illustration, add a sanitized real image under `assets/img/labs/` and set:

```js
screenshot: {
  src: "assets/img/labs/domain-sign-in.png",
  alt: "Describe what is actually visible in the screenshot",
  caption: "Describe what this specific image verifies"
},
```

Use a relative path for GitHub Pages. Do not include credentials or private personal data. Supply meaningful alt text and an accurate caption. No image is required for a project to render.

## Updating project progress

Keep completed exercises in `completed`, unfinished work in `pending`, and environment/training boundaries in `limit`. Simulations must remain identified as simulations. Do not infer work results from a diagram or invent tickets, metrics, or screenshots.

The academic archive retains older project files and images. Its legacy narratives and individual contribution claims need owner review before being treated as current verified descriptions. Pixel Tales uses only the supplied capstone context. Resume links and certificate badges are omitted until verified files and issuer details are supplied.

The email address was retained from the existing public landing page. No new phone number or private contact information was added. Photography was removed from the landing page and active archive navigation; old assets and routes remain intact.

## Validation

Run `node --check portfolio.js`, serve the site, and verify the three project disclosures with keyboard and pointer input. Check narrow/mobile layouts, section links, and any newly added screenshots. The project requires no package installation or production build. Do not deploy automatically.
