# Portfolio Project Handover - Monochrome Update

## Objective
Convert the personal portfolio (Angular) from a high-contrast blue/cyan "glowing" aesthetic to a professional, minimalist **Black & White (Monochromatic)** theme and hide the global scrollbar for a cleaner look.

## Changes Implemented

### 1. Global Styles (`src/styles.css`)
- **Scrollbar:** Hidden globally (`display: none` on `::-webkit-scrollbar`).
- **Color Variables:** 
    - Updated `--primary-gradient-start/end` to White/Grey.
    - Updated `--accent-cyan` and `--accent-purple` to Monochrome.
    - Reduced `--shadow-glow` intensity significantly.
- **Selection:** Changed highlight color to a subtle grey.

### 2. Header & Navigation (`nav-menu.component.css`)
- Removed hardcoded `rgba(0, 217, 255)` borders and shadows.
- Updated hover backgrounds to subtle white/grey glass effects.
- Removed the "SS" logo text as per previous request.

### 3. Banner / Hero Section (`banner.component.css`)
- Removed all `--green` references.
- Primary CTA button (`btn-primary`) now uses a solid White/Black style.
- Interest tags and hover states are now monochromatic.

### 4. Skills Section (`skills.component.css`)
- Fixed "Expertise" level badges to use grey/white backgrounds instead of blue.
- Removed the cyan glow from progress bar fills.
- Updated hover borders to white.
- **Icons:** Assigned specific Boxicons to each skill (updated in `skills.component.ts`).

### 5. Projects Section (`projects.component.css` & `.ts`)
- **Icons:** Replaced generic bulb icon with specific ones:
    - Physics Engine -> `bx-atom`
    - Seismographic -> `bx-pulse`
    - Bank Teller -> `bxs-bank`
    - Games -> `bx-joystick`
    - Image Recognition -> `bx-scan`
- **Styling:** Removed the rotating icon animation and blue background glow. 
- **Tech Tags:** Updated colors to monochromatic.
- **Project Numbers:** Dimmed the "01, 02" opacity to 0.05 for a subtle look.

### 6. Education & Work Experience
- Removed green accents from institution names and role titles.
- Changed timeline/list bullets (`▹`) to monochromatic grey/white.

### 7. Contact Section
- Removed all blue/green tints from icons and social links.
- Social links now have a clean Black/White hover effect.

## Current State
- The website should be fully monochromatic.
- Scrolling works, but the scrollbar is invisible.
- The "gimmicky" animations and glows have been replaced with subtle scaling and border changes.

## Known Issues / Next Steps
- **Lint Error:** `background-clip` standard property still needs defining in `nav-menu.component.css` for cross-browser compatibility.
- **Verification:** Need to ensure no "legacy" blue colors are hardcoded in any smaller utility classes not yet reviewed.
