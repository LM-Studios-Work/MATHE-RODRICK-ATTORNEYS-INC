# Design System & Styling Guidelines

## Core Principles
- **No Gradients**: Under no circumstances should any gradients be added to the design. All backgrounds, borders, and elements must use solid colors.
- **Consistent Layouts**: All section containers use `w-full` to span the entire screen width instead of being restricted to `max-w-7xl` or other container sizes, ensuring a spacious, full-bleed feel.
- **Contrast Typography (Premium & Elegant)**: 
  - Major headings (h1, h2) use ultra-thin weights (`font-thin` / 100) for a premium, clean look inspired by high-end law firms.
  - Body text uses `font-light` (300) for clean spacing.
  - All small labels, navigation links, form labels, card index numbers, and buttons use `font-bold` (700) to create a sharp structural contrast against the thin headings.
- **Refined Outlines for Depth**: Element borders, section dividers, and button outlines use thinner, subtle borders (`border border-border/50` or `border border-border-subtle`) to preserve the sleek aesthetic, rather than heavy lines.
- **Brighter Text**: Text labels and elements must use high-contrast and brighter text colors (e.g., `--color-muted-foreground` is set to `#d4d4d4`) for better readability.

## Typography
- **Sans-Serif Font**: Montserrat (`var(--font-montserrat)`) with weights 100, 200, 300, 400, 500, 600, 700 loaded.
- **Serif Font**: Cormorant Garamond (`var(--font-cormorant)`)

## Grid Layouts
- **Services Grid**: The services layout must display 2 columns side-by-side on all viewport sizes (including mobile devices) using `grid-cols-2` with `gap-8`.

## Component Implementations

### Headers & Footers
- Headers and footers must span the full width of the screen.
- Emblems/Logos use `border border-border/50 font-thin shadow-sm`.
- Nav links must be set to `font-bold`.

### Buttons
- Buttons must use `border border-border/50 font-bold uppercase tracking-[0.2em] transition-all hover:bg-foreground hover:text-background hover:shadow-md`.
