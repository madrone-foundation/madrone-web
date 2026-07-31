# Madrone — Website

A redesigned website for **Madrone Community Development Foundation** and **Madrone Health Foundation**, two related California nonprofit public benefit corporations recognized as 501(c)(3) organizations. The design is modeled on peer nonprofit developer sites (e.g., Provident Resources Group), emphasizing the project portfolio, the nonprofit ownership/financing model, and sector capabilities.

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Homepage — hero, stats, sectors, featured projects, the Madrone model, the two foundations |
| `about.html` | Mission, the two entities, guiding principles |
| `what-we-do.html` | Sector capabilities and a step-by-step explanation of the P3 / tax-exempt financing model |
| `projects.html` | Full portfolio: four closed financings plus the development pipeline |
| `projects/florida-tech.html` | Florida Institute of Technology — 555 beds, opening Fall 2026 |
| `projects/university-of-memphis.html` | University of Memphis Park Avenue Campus — ~542 beds, ~$73M bonds |
| `projects/mtsu.html` | Womack Commons at MTSU — 554 beds, $56.5M bonds, opening Fall 2027 |
| `projects/morehouse-spelman.html` | 850 West End (Morehouse & Spelman) — 793 beds, $147M, occupancy Fall 2028 |
| `contact.html` | Contact information for both foundations |

## Tech

Pure static HTML/CSS/vanilla JS — no build step, no framework. Deployable as-is to GitHub Pages, Netlify, Vercel, or any static host. Google Fonts (Fraunces + Inter) is the only external dependency.

## Before launch — items to verify with the client

- **Project figures** were compiled from public press releases and bond records (MTSU News, PR Newswire, Kutak Rock, Memphis HEHF board records). Confirm all bed counts, dollar amounts, dates, and entity names with the client before publishing.
- **Photography**: project visuals currently use dusk-scene SVG illustrations (`images/illustrations/`). To swap in real renderings or photos, just add JPEGs to `images/projects/` named after each project — `florida-tech.jpg`, `university-of-memphis.jpg`, `mtsu.jpg`, `morehouse-spelman.jpg`, `workforce-housing.jpg`, `student-housing.jpg`, `hotel.jpg`, `hospital-eaas.jpg`. Every image slot tries the JPEG first and falls back to the illustration automatically, so no code changes are needed. Recommended size: ~1600×1000 (16:10).
- **Contact info**: currently uses the Berkeley address and `info@madronecdf.org` found in public records. Confirm, and add a phone number and a Madrone Health email if available.
- **Leadership** (`leadership.html`): lists Nicholas Waugh (President) and Blair Tavenner (COO) with brief role descriptions written generically — replace with client-approved bios. Headshots: drop `nicholas-waugh.jpg` and `blair-tavenner.jpg` into `images/team/` (square, ~400×400) and they'll replace the monogram avatars automatically.
- **Mission/exempt-purpose language**: the three-pillar mission (burdens of government, charitable burdens of higher education, administrative/financial burdens of healthcare organizations) and the Madrone Health Foundation senior-living exempt purpose were written from the client's direction — have counsel confirm the phrasing matches the articles of incorporation before launch.
