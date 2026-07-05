# Design System & Styling Guidelines

## Core Principles
- **Strictly Black & White**: The theme is strictly black and white. Avoid using greys or subtle off-whites for structural elements. Use stark white and pure black for maximum contrast.
- **White Outlines & Dividers**: All section dividers, underlines, and structural borders must use crisp white lines (e.g., `border-white`). Do not use grey or subtle borders like `border-border-subtle`.
- **No Gradients**: Under no circumstances should any gradients be added to the design. All backgrounds, borders, and elements must use solid colors.
- **Consistent Layouts**: All section containers use `w-full` to span the entire screen width instead of being restricted to `max-w-7xl` or other container sizes, ensuring a spacious, full-bleed feel.
- **Strict Copy Rule (No Dashes)**: Never use em dashes (—) or en dashes (–) in any copy or code. Use standard hyphens or rephrase entirely.

## Typography (Premium & Elegant)
- **Sans-Serif Font**: Montserrat (`var(--font-montserrat)`) with weights 100, 200, 300, 400, 500, 600, 700 loaded.
- **Serif Font**: Cormorant Garamond (`var(--font-cormorant)`)
- **Major Headings (h1, h2, h3)**: Use standard `font-normal` (400) weight for a clean, premium look. Often combined with uppercase and wide tracking (`tracking-widest`).
- **Body Text**: Uses `font-normal` (400) with relaxed line heights for clean spacing.
- **Small Labels & Accents**: Small labels, titles, and subheadings use `text-xs` or `text-sm`, `font-bold` (700), and `uppercase tracking-[0.2em]` or `tracking-widest` to create sharp structural contrast.

## Component Implementations

### Headers, Navbars & Footers
- Headers and footers must span the full width of the screen.
- **Nav Links**: Must use a thinner, elegant weight like `font-medium` (500), `text-[12px]`, `uppercase`, and wide tracking (`tracking-[0.2em]`). Do not use heavy `font-bold` for nav links.
- Emblems/Logos use clean borders (`border border-white/50` or `border-border`).

### Grid Layouts
- **Services Grid**: The services layout must display 2 columns side-by-side on all viewport sizes (including mobile devices) using `grid-cols-2` with `gap-8`.
- **Team / Content Grids**: Where applicable, favor text-heavy, image-free elegant grid layouts (e.g., name/title on left, bio on right).

### Buttons
- Buttons must use crisp borders (e.g., `border border-white`), `font-bold uppercase tracking-[0.2em]`, and include transition effects like `hover:bg-white hover:text-black hover:shadow-md`.
