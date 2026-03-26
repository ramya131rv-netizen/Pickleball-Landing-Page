
# EyeLevel Pickleball Landing Page Setup

## Overview
Set up the existing PickleballMarketing.tsx component as the landing page, keeping all content and design exactly as-is. The component is a long-form marketing page for a pickleball event management agency.

## Tasks

### 1. Install framer-motion dependency
The component uses `motion`, `useScroll`, `useTransform` from framer-motion.

### 2. Copy component and set as Index page
- Copy `PickleballMarketing.tsx` to `src/pages/` 
- Update `Index.tsx` to render the PickleballMarketing component as the home page

### 3. Add custom Button variants
The component uses `variant="lime"` and `variant="dark"` on the Button component — these need to be added to the button component's variants.
- **lime**: bright lime/green background (`#D4E86F` / similar), dark text
- **dark**: dark background, light text

### 4. Add custom Tailwind config & fonts
- Add `font-dela` (Dela Gothic One from Google Fonts) to index.html and tailwind config
- Add custom colors: `forest` and `forest-dark` (dark green tones matching `#1a3a2d` / `#0f2a1f`)
- Add these to the tailwind theme extend

### 5. Update CSS design system for dark theme
Update `index.css` CSS variables to match the dark green pickleball theme:
- `--primary`: lime green (`#D4E86F` approx)
- `--foreground`: white/light
- `--background`: dark forest green
- Other variables adjusted to match the component's dark green aesthetic

### 6. Create placeholder image assets
The component imports 4 images from `@/assets/`:
- `eyelevel-logo-dark.png`
- `pickleball-hero-bg.jpg`  
- `pickleball-event-bg.jpg`
- `pickleball-3d-hero.png`
- `pickleball-clipboard.png`

Create simple SVG/placeholder files in `src/assets/` so the page renders without errors. The user can replace these with real images later.
