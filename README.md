# Perspectiva Matemática

Public research hub focused on quantitative market analysis, interactive
dashboards and data-driven financial visualization.

> **Site:** static landing page hosted on **GitHub Pages**.
> **Dashboards:** deployed separately on **Streamlit**.
> **Code:** each project has its own GitHub repository.

---

## File structure

```
perspectiva-matematica/
├── index.html        # Single-page site (Home + 4 projects + Links)
├── style.css         # Dark elegant dashboard styling
├── script.js         # Tab navigation + URL hash sync
├── assets/           # Images, logo, screenshots (placeholders for now)
│   ├── .gitkeep
│   └── README.txt
└── README.md         # This file
```

The site is a **single-page app** with internal tab navigation. There is no
build step, no framework, no backend — just static HTML/CSS/JS, ready for
GitHub Pages.

---

## Local preview

Just open `index.html` in any browser. No server required.

If you want to test it as a real server (recommended, for hash navigation):

```bash
# Python 3
python -m http.server 8000

# Then visit http://localhost:8000
```

---

## Deploy to GitHub Pages

You have two URL options. **Pick one** before creating the repo.

### Option A — Root URL (recommended for this brand)

Final URL: **https://perspectivamatematica.github.io/**

Repo name must match the username exactly:

```
perspectivamatematica.github.io
```

Steps:

1. Go to <https://github.com/PerspectivaMatematica> and create a new repository
   named exactly: `perspectivamatematica.github.io`
2. Make it **public**.
3. From this folder, push the files:

   ```bash
   git init
   git add .
   git commit -m "Initial site: Perspectiva Matemática"
   git branch -M main
   git remote add origin https://github.com/PerspectivaMatematica/perspectivamatematica.github.io.git
   git push -u origin main
   ```

4. In the repo, go to **Settings → Pages**.
5. Under **Build and deployment**:
   - Source: `Deploy from a branch`
   - Branch: `main` / `(root)`
6. Save. The site will be live in ~1 minute at
   **https://perspectivamatematica.github.io/**

### Option B — Sub-route URL

Final URL: **https://perspectivamatematica.github.io/perspectiva-matematica/**

Same steps, but name the repo `perspectiva-matematica` instead. Useful if
you want to keep the root URL free for another future site.

---

## Updating the site

### 1. Replace the Home placeholder with your real image

When you have your main visual ready, drop the file in `assets/` (e.g.
`assets/main-visual.png`) and edit `index.html`. Find this block:

```html
<div class="visual-placeholder" role="img" aria-label="Main Visual / Logo placeholder">
  <svg ...>...</svg>
  <span class="visual-placeholder-label">Main Visual / Logo</span>
</div>
```

Replace it with:

```html
<img src="assets/main-visual.png"
     alt="Perspectiva Matemática"
     class="visual-placeholder" />
```

The CSS class `visual-placeholder` already styles the container correctly.

### 2. Replace per-project preview placeholders

For each project tab (`event-window`, `silver`, `sectors`, `sentiment`),
find the block:

```html
<div class="preview-placeholder" role="img" aria-label="... Preview placeholder">
  <span class="preview-label">... Preview</span>
</div>
```

And replace it with:

```html
<img src="assets/event-window.png"
     alt="Event Window dashboard preview"
     class="preview-placeholder" />
```

### 3. Activate the View Dashboard / View Code buttons

Each project has two disabled buttons. To activate them, find this pattern
inside the project's `<div class="actions">` block:

```html
<button class="btn btn-primary is-disabled" disabled aria-disabled="true" title="Coming soon">View Dashboard</button>
<button class="btn btn-ghost   is-disabled" disabled aria-disabled="true" title="Coming soon">View Code</button>
```

Replace with real anchor tags pointing to your Streamlit deployment and
GitHub repo:

```html
<a class="btn btn-primary" href="https://YOUR-STREAMLIT-URL" target="_blank" rel="noopener">View Dashboard</a>
<a class="btn btn-ghost"   href="https://github.com/PerspectivaMatematica/PROJECT-REPO" target="_blank" rel="noopener">View Code</a>
```

### 4. Activate the Links section (GitHub / LinkedIn / Email)

In the `#links` panel, replace the disabled buttons with real anchors:

```html
<!-- GitHub -->
<a class="btn btn-ghost" href="https://github.com/PerspectivaMatematica" target="_blank" rel="noopener">Visit</a>

<!-- LinkedIn -->
<a class="btn btn-ghost" href="https://www.linkedin.com/in/YOUR-HANDLE" target="_blank" rel="noopener">Visit</a>

<!-- Email -->
<a class="btn btn-ghost" href="mailto:perspectiva.mate@gmail.com">Contact</a>
```

### 5. Add a new project

To add a 5th project (e.g. `vol-surface`):

1. Add a new tab button in the header `<nav class="tabs">`:
   ```html
   <button class="tab" data-tab="vol-surface">Vol Surface</button>
   ```
2. Add `"vol-surface"` to the `VALID_TABS` array in `script.js`.
3. Duplicate one of the existing `<section class="panel" id="...">` blocks
   in `index.html`, change the `id` and `data-panel` to `"vol-surface"`,
   and edit the content.
4. (Optional) Add a card for it in the Home `<div class="cards-grid">`.

---

## Design tokens

All colors are CSS variables defined at the top of `style.css`:

| Token | Value | Use |
|---|---|---|
| `--bg-0` | `#111315` | Page background |
| `--bg-2` | `#1E2226` | Header / footer |
| `--card-1` / `--card-2` | `#20252A` / `#252B31` | Cards & containers |
| `--text-1` | `#F3F6F4` | Primary text |
| `--text-2` | `#B4BDB8` | Secondary text |
| `--green` | `#35D07F` | **Main accent** (life green) |
| `--aqua` | `#22D3EE` | Secondary accent |
| `--red` | `#FF5A5F` | Minimal warning accent (disclaimer) |

Edit them once and the whole site updates.

---

## Disclaimer

The content presented on this site is for analytical and educational
purposes only. It does not constitute investment advice, a recommendation,
or an offer to buy or sell any financial instrument.

---

Developed by **BS Gobra** — Perspectiva Matemática
