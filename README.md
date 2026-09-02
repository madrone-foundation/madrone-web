# Madrone — Website

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Homepage — hero, stats, sectors, featured projects, the Madrone model, the two foundations |
| `about.html` | Mission, the two entities, guiding principles |
| `what-we-do.html` | Sector capabilities and a step-by-step explanation of the P3 / tax-exempt financing model |
| `projects.html` | Full portfolio: four closed financings plus the development pipeline |
| `projects/florida-tech.html` | Florida Institute of Technology — Crimson Crossing, 553 beds, opened August 2026 |
| `projects/university-of-memphis.html` | University of Memphis Park Avenue Campus — ~542 beds, ~$73M bonds |
| `projects/mtsu.html` | Womack Commons at MTSU — 554 beds, $56.5M bonds, opening Fall 2027 |
| `projects/morehouse-spelman.html` | 850 West End (Morehouse & Spelman) — 793 beds, $147M, occupancy Fall 2028 |
| `news.html` | News ledger: closings, groundbreakings, and openings with source links (dates compiled from public coverage — verify before launch) |
| `governance.html` | Board & governance: board overview (roster to be provided by client), corporate structure with EIN, documents & disclosures incl. EMMA |
| `contact.html` | Contact information for both foundations |
| `thanks.html` | Contact-form confirmation page (noindex) |
| `privacy.html` | Privacy policy — accurate for the current site (no cookies, no analytics, no forms); update it if analytics or forms are ever added |

## Tech

Pure static HTML/CSS/vanilla JS — no build step, no framework, and zero third-party dependencies (Archivo and Newsreader are self-hosted variable fonts in `fonts/`, SIL OFL licensed). Deployable as-is to GitHub Pages, Netlify, Vercel, or any static host. Optional later optimization: convert the TTFs to woff2 (~3–4× smaller) with `fonttools`.
