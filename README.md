# Shivansh Sagar — Personal Portfolio

[![Deploy to GitHub Pages](https://github.com/shivanshsagar/shivanshsagar.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/shivanshsagar/shivanshsagar.github.io/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live-shivanshsagar.github.io-FF9900?style=flat&logo=github)](https://shivanshsagar.github.io)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

> Personal portfolio of **Shivansh Sagar** — Senior AWS Cloud Engineer, DevOps Engineer, Solutions Architect & FinOps Consultant.

🌐 **Live:** [https://shivanshsagar.github.io](https://shivanshsagar.github.io)

---

## ✨ Features

- ⚡ **Blazing Fast** — Vite-powered build with code splitting and lazy loading
- 🎨 **Premium Design** — Glassmorphism UI, aurora background, smooth Framer Motion animations
- 🌑 **Dark Mode First** — Dark/light theme toggle with localStorage persistence
- ⌨️ **Command Palette** — `Ctrl+K` / `Cmd+K` fuzzy search navigation
- 📱 **Fully Responsive** — Mobile-first, works on all screen sizes
- 🔍 **SEO Optimized** — JSON-LD schema, Open Graph, Twitter Cards, sitemap, robots.txt
- 📦 **PWA Ready** — Service worker, offline support, installable
- ♿ **Accessible** — ARIA labels, keyboard navigation, focus states

---

## 📄 Pages

| Page | Route | Description |
|---|---|---|
| Home | `/#/` | Hero, stats, CTA |
| About | `/#/about` | Bio, philosophy, currently learning |
| Experience | `/#/experience` | Work history timeline |
| Projects | `/#/projects` | Filterable project showcase |
| Skills | `/#/skills` | Skill bars + AWS Services Wall |
| Certifications | `/#/certifications` | Certs + achievements timeline |
| Blog | `/#/blog` | Articles with search & tag filter |
| Gallery | `/#/gallery` | Architecture diagrams with lightbox |
| Testimonials | `/#/testimonials` | Colleague & customer quotes |
| Services | `/#/services` | Consulting offerings |
| Resume | `/#/resume` | Inline resume + PDF download |
| Contact | `/#/contact` | Contact form + social links |

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Routing | React Router DOM (HashRouter) |
| Icons | Lucide React |
| PWA | vite-plugin-pwa + Workbox |
| Deployment | GitHub Actions + GitHub Pages |

---

## 🚀 Local Development

```bash
# Clone the repo
git clone git@github.com:shivanshsagar/shivanshsagar.github.io.git
cd shivanshsagar.github.io

# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🌿 Branch Strategy

| Branch | Purpose |
|---|---|
| `dev` | All development work — default branch |
| `main` | Production only — triggers auto-deploy |

All changes are made on `dev` and merged to `main` only after local testing and explicit approval.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── background/     # AuroraBackground
│   ├── layout/         # Navbar, Footer, CommandPalette, ProgressBar
│   └── ui/             # Button, Badge, GlassCard, SectionReveal, etc.
├── context/            # ThemeContext, CommandPaletteContext
├── data/               # JSON data files + blog markdown posts
├── hooks/              # useScrollProgress, useAnimatedCounter
├── pages/              # All 14 page components
├── styles/             # globals.css (design tokens, utilities)
└── types/              # TypeScript interfaces
```

---

## 📬 Contact

- 🌐 [shivanshsagar.github.io](https://shivanshsagar.github.io)
- 💼 [LinkedIn](https://linkedin.com/in/shivanshsagar)
- 🐙 [GitHub](https://github.com/shivanshsagar)
- 📧 [hello@shivanshsagar.com](mailto:hello@shivanshsagar.com)

---

<p align="center">Built with ❤️ by Shivansh Sagar</p>
