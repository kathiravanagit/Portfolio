# Katfolio — Kathiravan A's Portfolio

A modern, animated portfolio website built with Next.js, Tailwind CSS, and TypeScript. Replicates the clean design of [rbp-portfolio](https://rbp-portfolio.vercel.app/) with personalized content.

**Live:** [kathiravan.dev](https://kathiravan.dev)

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 16 (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) 4
- **Animations:** [Motion](https://motion.dev/) (Framer Motion)
- **Language:** TypeScript
- **Deployment:** [Vercel](https://vercel.com)
- **Fonts:** Geist Sans, Geist Mono, Fraunces (serif)

---

## Features

- Responsive pill-shaped navbar with active link indicator and theme toggle (light/dark)
- Hero section with BlurText and ShinyText animations (React Bits)
- Project cards with glare hover effect and image zoom
- About page with experience, education, skills, and an interactive physics-based tech stack (Matter.js)
- Contact card with WhatsApp, Email, GitHub, and LinkedIn links
- Smooth scroll, fade-in animations on scroll, and view-transition theme switching

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Homepage (Hero, Projects, Contact)
│   ├── globals.css         # Global styles, animations
│   ├── about/page.tsx      # About page
│   └── projects/page.tsx   # Projects page
├── components/
│   ├── hero/               # Hero section + portrait morph
│   ├── projects/           # Project cards + data
│   ├── contact/            # Contact card + WhatsApp button
│   ├── about/              # Experience, education, skills, stack
│   ├── layout/             # Navbar, providers, smooth scroll
│   ├── shaders/            # ShaderFlow background effect
│   └── ui/                 # BlurText, ShinyText, FadeIn, etc.
├── lib/
│   ├── metadata.ts         # Site config + SEO metadata
│   └── config.ts           # Feature flags
└── public/                 # Images, logos, icons
```

---

## Customization

All content is defined in component files under `components/`:

| File | What to edit |
|------|-------------|
| `components/hero/hero.tsx` | Name, role, description, portrait image |
| `components/projects/projects.tsx` | Project data (title, description, links, images) |
| `components/about/experience.tsx` | Work experience entries |
| `components/about/education.tsx` | Education entries |
| `components/about/skills.tsx` | Skills list |
| `components/about/stack.tsx` | Tech stack chips |
| `components/contact/contact-card.tsx` | Social links, email |
| `components/contact/contact-button.tsx` | WhatsApp number |
| `lib/metadata.ts` | Site name, description, URL, SEO |

---

## Animations (React Bits)

| Animation | Where | Description |
|-----------|-------|-------------|
| **BlurText** | Hero heading | Words blur-in from offset on scroll |
| **ShinyText** | Hero description | Continuous shine sweep across text |
| **GlareHover** | Project cards | Diagonal light glare on hover |
| **FadeIn** | All sections | Fade up on scroll intersection |
| **ScaleUnblur** | Portrait image | Scale + unblur entrance |
| **ShaderFlow** | Contact card | Animated gradient background |

---

## Deployment

Push to `main` — Vercel auto-deploys.

Make sure Vercel project settings:
- **Framework Preset:** Next.js
- **Root Directory:** `./`
- **Build Command:** `next build`

---

## License

Built with [React Bits Pro](https://reactbits.dev) template. Personal use only.
