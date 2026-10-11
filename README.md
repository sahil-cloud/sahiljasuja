# sahiljasuja — portfolio

Personal engineering portfolio of Sahil Jasuja, deployed to GitHub Pages at
<https://sahil-cloud.github.io/sahiljasuja/>.

Single-page React app (Create React App). There's no router, no CSS framework, and no CDN dependencies.

## Structure

```
public/
  index.html                 SEO / Open Graph metadata
  favicon.svg                "SJ" monogram
  Sahil_Jasuja_Resume.pdf    resume served at /sahiljasuja/Sahil_Jasuja_Resume.pdf
src/
  data/profile.js            ALL site content (edit this to update the site)
  App.js                     page sections
  components/Nav.js          sticky, keyboard-accessible nav with mobile menu
  components/HeroGraphic.js  static SVG illustration
  index.css                  design tokens + layout
  App.test.js                smoke / accessibility tests
```

## Develop

```bash
npm install
npm start          # http://localhost:3000/sahiljasuja
npm test
npm run build
```

Requires Node 18 or newer.

## Deploy

```bash
npm run deploy     # builds and pushes build/ to the gh-pages branch
```

GitHub Pages serves the `gh-pages` branch. To update the resume, replace
`public/Sahil_Jasuja_Resume.pdf` (keep the filename) and redeploy.
