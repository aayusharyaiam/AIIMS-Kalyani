# Odyssey — AIIMS Kalyani Portal

Welcome to the **Odyssey 2026** Fest site repository!

## Stack & Technologies

This project is built using the latest modern web technologies:
- **Next.js 15 (App Router)**: The React framework for the web.
- **Tailwind CSS v4**: Utility-first CSS framework for rapid and highly customizable UI.
- **Framer Motion**: Production-ready animation library for React to handle complex page transitions and micro-animations.
- **GSAP**: Professional-grade animation platform for complex sequencing and scroll-linked animations.
- **Lenis**: Smooth scrolling library optimized for modern web performance.
- **Lucide React**: Beautiful and consistent iconography.

## Key Features

1. **Greek Mythology Theming**: The UI is heavily inspired by Greek Mythos (Olympus, Ambrosia, ancient scripts, celestial gradients) to match the fest theme.
2. **Gates of Olympus Login**: A highly interactive, responsive authentication portal with:
   - Dynamic switching between **Sign In** and **Sign Up** modes with smooth Framer Motion transitions.
   - Social authentication stubs (Google & Facebook).
   - Password visibility toggling.
   - Custom styled inputs and cinematic glowing CTA buttons.
3. **Smooth Scrolling Experience**: Using `@studio-freight/lenis` wrapper globally in the application layout to provide a premium scroll feel.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Navigate to `/login` to view the Gates of Olympus Authentication portal.

## Next Steps

- Integrate the Dashboard ("Voyager's Acropolis Dashboard")
- Integrate the landing experience ("Greek Mythos Experience")
- Connect the authentication stubs to a real backend provider (e.g., Supabase or NextAuth.js).

