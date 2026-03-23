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
| Fonts | [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) via `next/font` |
| Icons | Inline SVG |
| Formatting | Prettier |
| Hosting | Vercel |

---

## Features

- Dark / light mode toggle with `localStorage` persistence
- Animated star field (dark mode) and drifting cloud field (light mode) in hero
- Hero with CSS grid-line background, acid-green radial glow, pulsing availability dot, and staggered fade-up entrance animations
- Instrument Serif display headings with stroke italic treatment on the hero name
- Fully responsive — mobile, tablet, and desktop
- WCAG accessible — semantic HTML, ARIA labels, sufficient colour contrast
- Hamburger nav with animated full-screen drawer on mobile; accent pill CTA in desktop nav
- Two-column About layout with profile photo and contact row
- Three-column bordered skills triptych with accent-tinted core tags
- Editorial experience layout with → arrow bullets and pill-shaped tech stack tags
- Two-column contact section with card links and "available now" callout card
- Resume PDF download
- `/projects` route ready for future case studies
- Optimised images via `next/image`
- Below-fold sections lazy-loaded via `next/dynamic` for faster initial load

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
├── StarField.tsx        # Animated star background (dark mode)
├── CloudField.tsx       # Drifting cloud background (light mode)
├── About.tsx            # About section — photo, bio, contact row
├── Skills.tsx           # Skills grouped by category
├── Experience.tsx       # Work history
├── Education.tsx        # Education history
├── Contact.tsx          # Contact section — card links + available callout
├── Footer.tsx           # Footer
└── ThemeToggle.tsx      # Dark / light mode toggle

public/
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
