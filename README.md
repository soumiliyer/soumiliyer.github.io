# Soumil Iyer Portfolio — Version 1

A static, responsive engineering portfolio designed for easy deployment on GitHub Pages, Vercel, Netlify, or any ordinary web host. It uses only HTML, CSS, and JavaScript — no build step or framework is required.

## Preview locally

Open `index.html` directly in a browser, or run a tiny local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy with GitHub Pages

1. Create a new public GitHub repository, e.g. `portfolio`.
2. Upload the contents of this folder (not the outer folder itself).
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, then choose `main` and `/ (root)`.
5. GitHub will give you a temporary `github.io` URL.
6. When your Name.com domain is ready, add it under **Settings → Pages → Custom domain** and follow GitHub's DNS instructions in Name.com.

## What to replace next

- Project imagery: replace the CSS-generated project artwork with photos, CAD screenshots, plots, test rigs, and prototypes.
- Resume: replace `docs/Soumil_Iyer_Resume.pdf` with whichever one-page resume you want public.
- Project reports: current links use the project documents already available from your coursework. You can later replace them with cleaner public-facing PDFs.
- Domain: once purchased, update metadata and optionally add a `CNAME` file containing only the domain name.
- Contact/location wording: adjust if your availability or target locations change.

## Structure

- `index.html` — page structure and content
- `styles.css` — all visual styling and responsive layout
- `script.js` — project data, filters, detail modal, theme toggle, animations
- `docs/` — resume and selected project reports

## Design notes

The site borrows the useful portfolio patterns from modern engineering sites — strong hero section, project cards, technical tags, academia, experience, and direct links to evidence — while using a distinct visual system based on neutral engineering tones and a muted Purdue-gold accent.
