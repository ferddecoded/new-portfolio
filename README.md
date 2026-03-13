# Ferdinand Ismael — Portfolio

Personal portfolio website for Ferdinand Ismael, Front End Engineer based in Toronto, Ontario.

**Live site:** [ferdinandismael.dev](https://ferdinandismael.dev)

---

## Purpose

A modern, accessible portfolio to showcase my experience, skills, and background as a Front End Engineer with 8+ years of experience across eCommerce, SaaS, and enterprise tools.

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | CSS Modules |
| Fonts | [Syne](https://fonts.google.com/specimen/Syne) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) via `next/font` |
| Icons | Inline SVG |
| Hosting | Vercel (coming soon) |

---

## Features

- Dark / light mode toggle with `localStorage` persistence
- Fully responsive — mobile, tablet, and desktop
- WCAG accessible — semantic HTML, ARIA labels, sufficient colour contrast
- Hamburger nav with animated full-screen drawer on mobile
- Resume PDF download
- `/projects` route ready for future case studies
- Optimised images via `next/image`

---

## Project Structure

```
app/
├── globals.css          # CSS variables + base styles (themes)
├── layout.tsx           # Root layout, fonts, metadata
├── page.tsx             # Home page — assembles all sections
└── projects/
    └── page.tsx         # Projects route (coming soon)

components/
├── Nav.tsx              # Fixed nav with hamburger + theme toggle
├── Hero.tsx             # Hero section with CTA + social links
├── About.tsx            # About section with photo + bio
├── Skills.tsx           # Skills grouped by category
├── Experience.tsx       # Work history
├── Education.tsx        # Education history
├── Contact.tsx          # Contact section
├── Footer.tsx           # Footer
└── ThemeToggle.tsx      # Dark / light mode toggle

public/
├── logo.svg             # FI monogram logo
├── ferdinand.jpeg       # Profile photo
└── FerdinandIsmaelResume.pdf
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Contact

- **Email:** ferdinand.ismael@gmail.com
- **LinkedIn:** [linkedin.com/in/fismael](https://www.linkedin.com/in/fismael)
- **GitHub:** [github.com/ferddecoded](https://github.com/ferddecoded)
