# Happy 19th Birthday — Interactive Experience

A cinematic, full-screen interactive birthday journey built with React. Visitors progress through memories, mini-games, and heartfelt moments before reaching a grand birthday reveal.

**Theme:** Luxury gold (`#FFD700`) on rich black (`#090909`)  
**Experience:** One viewport per chapter, smooth transitions, living backgrounds, and subtle sound design.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Story Flow](#story-flow)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Assets](#assets)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Browser Support](#browser-support)
- [Accessibility](#accessibility)

---

## Overview

This is not a simple slideshow. It is a guided, chapter-based experience where each screen feels like part of a short film:

- Cinematic intro with fade-in storytelling
- Playful challenges tied to personal memories
- A scrapbook-style Memory Vault
- Secret videos with a playful YES/NO choice
- An emotional pre-finale transition
- A fireworks-filled birthday finale with typewriter messages

Background music starts after the first user interaction (browser autoplay policy).

---

## Features

| Area | Details |
|------|---------|
| **Visual design** | Glassmorphism cards, gold gradients, particle systems, bokeh, twinkling stars, floating balloons |
| **Motion** | Framer Motion page transitions, unlock interstitials, micro-interactions on correct answers |
| **Audio** | Background music toggle, procedural click/unlock/celebration sounds |
| **Games** | Nickname quiz, hidden cake hunt, memory match, multiple-choice memory quiz |
| **Media** | Lazy-loaded images, responsive video player, sequential video playback |
| **Responsive** | Optimized for phones, tablets, laptops, and desktops (320px–1920px+) |
| **Performance** | Canvas particles, lazy loading, fixed viewport layout (no horizontal scroll) |

---

## Story Flow

The experience runs in this order:

| # | Chapter | Description |
|---|---------|-------------|
| 0 | **Loading** | Luxury loading screen with progress bar |
| 1 | **Intro** | Cinematic opening lines → *Begin Journey* |
| 2 | **Nickname** | Guess childhood nickname (`tinku`, case-insensitive) with hints |
| 3 | **Find the Cake** | Hidden cake emoji in a photo grid (images 2–7) |
| 4 | **Memory Match** | Flip-card pairs (images 8–11) |
| 5 | **Memory Quiz** | *Where were we going?* → correct answer: **Movie** |
| 6 | **Memory Vault** | Polaroid-style gallery (images 13–16) |
| 7 | **Achievement** | Proud milestone message (image 17) |
| 8 | **Secret Videos** | YES/NO prompt → plays videos 18 & 19 in sequence |
| 9 | **Emotional Transition** | *Every picture… Every laugh…* → *Led to today.* |
| 10 | **Finale** | Happy 19th Birthday reveal, confetti, typewriter message |

Between chapters, a brief **Unlocking Memory…** transition plays with key animation and sound.

---

## Tech Stack

- **React 18** — UI
- **Vite 5** — Build tool and dev server
- **Tailwind CSS 3** — Styling
- **Framer Motion 11** — Animations and transitions
- **GSAP** — Available for advanced motion (project dependency)
- **React Confetti** — Finale celebration
- **React Icons** — Music toggle icons
- **Web Audio API** — Lightweight procedural sound effects (`src/utils/sound.js`)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (LTS recommended)
- npm (comes with Node.js)

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at **http://localhost:3000** (configured in `vite.config.js`).

### Production build

```bash
npm run build
```

Output is written to `dist/`.

### Preview production build

```bash
npm run preview
```

---

## Project Structure

```
19th/
├── public/
│   ├── images/          # 1.jpeg – 17.jpeg (served at /images/)
│   ├── videos/          # 18.mp4, 19.mp4 (served at /videos/)
│   └── music/           # background.mpeg (served at /music/)
├── src/
│   ├── components/
│   │   ├── CinematicBackground.jsx   # Layered stars, bokeh, balloons
│   │   ├── GoldButton.jsx            # Premium CTA button
│   │   ├── LoadingScreen.jsx         # Initial load screen
│   │   ├── MemoryUnlockTransition.jsx # Chapter unlock overlay
│   │   ├── MusicToggle.jsx           # Background music control
│   │   ├── PageTransition.jsx        # Cinematic page transitions
│   │   └── Particles.jsx             # Canvas golden particles
│   ├── pages/
│   │   ├── IntroPage.jsx
│   │   ├── NicknamePage.jsx
│   │   ├── CakePage.jsx
│   │   ├── MemoryMatchPage.jsx
│   │   ├── QuizPage.jsx
│   │   ├── MemoryVault.jsx
│   │   ├── AchievementPage.jsx
│   │   ├── VideoPage.jsx
│   │   ├── EmotionalTransitionPage.jsx
│   │   └── FinalPage.jsx
│   ├── utils/
│   │   └── sound.js                  # Click, unlock, celebration sounds
│   ├── App.jsx                       # Main app & chapter routing
│   ├── index.css                     # Global styles & utilities
│   └── main.jsx                      # React entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## Assets

Place media in `public/` so Vite serves them from the site root.

### Images

| File | Usage |
|------|--------|
| `public/images/1.jpeg` | Nickname chapter |
| `public/images/2–7.jpeg` | Cake hunt grid |
| `public/images/8–11.jpeg` | Memory match cards |
| `public/images/12.jpeg` | Memory quiz |
| `public/images/13–16.jpeg` | Memory Vault polaroids |
| `public/images/17.jpeg` | Achievement chapter |

Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp` (update paths in page components if you change extensions).

### Videos

| File | Usage |
|------|--------|
| `public/videos/18.mp4` | First secret video |
| `public/videos/19.mp4` | Second secret video (auto-plays after 18) |

### Music

| File | Usage |
|------|--------|
| `public/music/background.mpeg` | Looping background music |

Music path is set in `src/App.jsx`:

```js
const a = new Audio('/music/background.mpeg')
```

To use a different file (e.g. `background.mp3`), update that path and add the file under `public/music/`.

> **Note:** A duplicate `images/` folder may exist at the project root from initial setup. Only files under `public/` are served in production.

---

## Configuration

### Dev server port

Edit `vite.config.js`:

```js
server: { port: 3000 }
```

### Theme colors

Defined in `tailwind.config.js`:

```js
colors: {
  black: '#090909',
  gold: '#FFD700',
  'gold-soft': '#B8860B',
}
```

### Fonts

Loaded in `index.html`:

- **Playfair Display** — headings
- **Inter** — body text

### Game answers (for maintainers)

| Game | Correct answer |
|------|----------------|
| Nickname | `tinku` (any casing) |
| Memory quiz | `Movie` |

Hints and copy live in the respective page files under `src/pages/`.

---

## Deployment

### Static hosting (Vercel, Netlify, GitHub Pages, etc.)

1. Run `npm run build`
2. Deploy the `dist/` folder
3. Ensure SPA fallback routes to `index.html` if your host requires it

### Example: Netlify

- **Build command:** `npm run build`
- **Publish directory:** `dist`

### Example: Vercel

- Framework preset: **Vite**
- Build and output settings are detected automatically

---

## Browser Support

- Chrome, Edge, Firefox, Safari (modern versions)
- Mobile Safari and Chrome on iOS/Android
- Background audio requires a user gesture before playback
- `100dvh` used for full-viewport height on mobile browsers

---

## Accessibility

- Keyboard support on inputs and buttons
- `aria-label` on interactive elements where needed (e.g. hidden cake button)
- Readable contrast on gold/black theme
- `prefers-reduced-motion` respected in global CSS (animations minimized when enabled)

---

## Scripts Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |

---

## License

Private project — for personal use. All photos, videos, and music are personal assets and not licensed for redistribution.

---

*Built with care for a very special 19th birthday.*
