---
name: "Ingrid Cunha — Psicóloga Infantojuvenil"
description: "Humanized, welcoming, and ludic design system for child and adolescent clinical psychology (CRP 13/12719)."
colors:
  rose: "#E9A4A8"
  vanilla: "#F6DEBC"
  sky: "#BAE5ED"
  white: "#FFFFFF"
  charcoal: "#2B2628"
  charcoal-soft: "#544C4F"
  charcoal-muted: "#6E6468"
  cream-soft: "#FDF9F3"
  rose-soft: "#FBF0F1"
  rose-hover: "#DF8D92"
  sky-soft: "#EEF9FB"
  border: "#EFE4DF"
typography:
  display:
    fontFamily: "'Dashing Personal', 'Outfit', 'Montserrat', sans-serif"
    fontSize: "clamp(1.95rem, 1.55rem + 1.9vw, 3.1rem)"
    fontWeight: 700
    lineHeight: 1.22
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "'Dashing Personal', 'Outfit', 'Montserrat', sans-serif"
    fontSize: "clamp(1.65rem, 1.4rem + 1.2vw, 2.35rem)"
    fontWeight: 700
    lineHeight: 1.22
    letterSpacing: "-0.015em"
  title:
    fontFamily: "'Dashing Personal', 'Outfit', 'Montserrat', sans-serif"
    fontSize: "clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(0.975rem, 0.94rem + 0.2vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(0.75rem, 0.72rem + 0.15vw, 0.825rem)"
    fontWeight: 600
    letterSpacing: "0.1em"
rounded:
  sm: "0.75rem"
  md: "1.25rem"
  lg: "1.75rem"
  xl: "2.5rem"
  pill: "9999px"
spacing:
  2xs: "0.375rem"
  xs: "0.625rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2.25rem"
  xl: "3.5rem"
components:
  button-primary:
    backgroundColor: "{colors.rose}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.pill}"
    padding: "0.875rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.rose-hover}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.pill}"
    padding: "0.875rem 1.5rem"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.pill}"
    padding: "0.875rem 1.5rem"
  section-tag:
    backgroundColor: "{colors.vanilla}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 1rem"
---

# Design System: Ingrid Cunha — Psicóloga Infantojuvenil

## Overview

**Creative North Star: "O Consultório Acolhedor em Giz Pastel (The Pastel Crayon Sanctuary)"**

The visual system of **Ingrid Cunha — Psicóloga Infantojuvenil (`CRP 13/12719`)** balances the emotional warmth and playfulness of childhood development with the clarity, ethics, and scientific rigor that parents expect from a clinical psychologist working with Cognitive-Behavioral Therapy (TCC) and Neuropsychology.

Soft luminous pastels (`Rosa Acolhimento`, `Amarelo Baunilha`, and `Azul Serenidade`) and organic hand-drawn crayon motifs (rainbows, hearts, stars, and clouds) create an atmosphere of safety and affection, while geometric sans-serif typography and generous cream/white breathing room ensure scannability and clinical trust.

**Key Characteristics:**
- Luminous pastel surfaces grounded by warm cream (`#FDF9F3`) and pure white (`#FFFFFF`) breathing room.
- High-contrast soft charcoal typography (`#2B2628`) over pastel surfaces to achieve WCAG AAA readability without harsh pure black.
- Hand-drawn crayon/dry-brush graphical accents (`assets/logo.png`, `assets/coracao.png`, rainbow and star doodles) used as purposeful focal anchors.
- Generously rounded containers (`1.25rem` to `2.5rem`) that echo a safe, child-friendly physical environment.

## Colors

A luminous pastel triad supported by warm paper neutrals and soft charcoal ink for accessible legibility.

### Primary
- **Rosa Acolhimento** (`#E9A4A8`): Primary brand color representing affection, empathy, and delicacy. Used for primary CTAs, portrait arch frames, primary icon badges, and key active borders.
- **Rosa Acolhimento Hover** (`#DF8D92`): Slightly denser rose state for interactive button hover feedback.
- **Rosa Suave** (`#FBF0F1`): Tinted rose surface used for subtle card backgrounds, hover states, and soft gradients.

### Secondary
- **Amarelo Baunilha** (`#F6DEBC`): Secondary brand color bringing warmth, creativity, and gentle energy. Used for eyebrow section tags, headline marker highlights, and secondary icon badges.

### Tertiary
- **Azul Serenidade** (`#BAE5ED`): Support brand color evoking tranquility, trust, and peace. Used for adolescent care pillars, ethical notice callouts, and triad steps.
- **Azul Serenidade Suave** (`#EEF9FB`): Light sky tint for non-alarmist informational boxes and calm callouts.

### Neutral
- **Branco Puro** (`#FFFFFF`): Clean card surfaces, modal backgrounds, and visual breathing room.
- **Creme Baunilha Suavizado** (`#FDF9F3`): Primary page canvas derived from `#F6DEBC`, eliminating clinical coldness.
- **Chumbo Suave** (`#2B2628`): Primary heading and CTA label color, delivering >8.2:1 contrast on `#E9A4A8` and >12:1 on `#FDF9F3`.
- **Chumbo Médio** (`#544C4F`): Body copy color for comfortable long-form reading.
- **Chumbo Neutro** (`#6E6468`): Microcopy, captions, and credential subtitles.
- **Borda Quente** (`#EFE4DF`): Subtle structural border for cards and accordions.

### Named Rules
**The Charcoal-On-Pastel Rule.** Never place pure white body text or button labels directly over `#E9A4A8`, `#F6DEBC`, or `#BAE5ED`; always pair pastel fills with Chumbo Suave (`#2B2628`) so every button and badge passes WCAG AA/AAA effortlessly.

**The Official Palette Rule.** Never introduce external saturated greens, blues, or purples (including generic WhatsApp green buttons); all conversion CTAs stay strictly within the brand's Rosa Acolhimento (`#E9A4A8`) and official palette.

## Typography

**Display Font:** `Dashing Personal` (with `Outfit` and `Montserrat` Bold fallback)
**Body Font:** `Montserrat` (Light 300, Regular 400, Medium 500, SemiBold 600, Bold 700)

**Character:** Expressive, rounded contemporary display headings paired with a clean geometric sans-serif body that keeps clinical explanations approachable for parents and adolescents.

### Hierarchy
- **Display** (`700`, `clamp(1.95rem, 1.55rem + 1.9vw, 3.1rem)`, `1.22` line-height): Hero `<h1>` headline only.
- **Headline** (`700`, `clamp(1.65rem, 1.4rem + 1.2vw, 2.35rem)`, `1.22` line-height): Section `<h2>` titles.
- **Title** (`700`, `clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)`, `1.25` line-height): Pillar cards and TCC sub-cards (`<h3>`).
- **Body** (`400`, `clamp(0.975rem, 0.94rem + 0.2vw, 1.0625rem)`, `1.65` line-height): Main narrative paragraphs, constrained to `38rem–44rem` measure for effortless reading.
- **Label** (`600`, `clamp(0.75rem, 0.72rem + 0.15vw, 0.825rem)`, `0.1em` letter-spacing, uppercase): Section eyebrow tags (`.section-tag`).

## Layout

Mobile-first responsive layout built around a `1200px` max-width container (`--container-max`) with fluid horizontal padding (`clamp(1.125rem, 4vw, 2rem)`) and generous vertical section rhythm (`clamp(4rem, 6vw, 6.5rem)`).

- **Breakpoints:** `640px` (2-column grids), `768px` (desktop floating CTA transition, horizontal TCC triad), `1024px` (full horizontal navigation, asymmetric 2-column Hero `1.25fr 0.75fr` and About `0.85fr 1.15fr`, 3-column pillars, 4-column process steps and contact cards).
- **Alternating Canvas Rhythm:** Sections alternate between warm cream (`#FDF9F3`), pure white (`#FFFFFF`), and soft pastel gradients to separate cognitive steps without heavy dividers.

## Elevation & Depth

Depth is gentle and warm, combining soft tonal borders (`1px solid #EFE4DF`) with diffused, low-opacity shadows that never feel harsh or metallic.

### Shadow Vocabulary
- **Ambient Subtle (`--shadow-sm`)** (`box-shadow: 0 4px 16px rgba(43, 38, 40, 0.05)`): Resting state for trust badges, secondary buttons, and contact cards.
- **Elevated Card (`--shadow-md`)** (`box-shadow: 0 12px 32px rgba(43, 38, 40, 0.07)`): Pillar cards, floating photo credentials, and hover states on sign/step cards.
- **Rose Portrait Glow (`--shadow-lg`)** (`box-shadow: 0 20px 48px rgba(233, 164, 168, 0.22)`): Hero portrait arch frame.

## Shapes

All containers use generous, welcoming corner radii as prescribed by the Brand Manual ("Containers Arredondados"):
- **Pills (`9999px`):** All primary/secondary CTA buttons and section eyebrow tags.
- **Cards (`1.25rem` to `1.75rem`):** Sign cards, pillar cards, TCC cards, FAQ accordion items, and contact cards.
- **Portrait Frames & Hero Callouts (`2.5rem`):** Arch-inspired portrait containers for `assets/ingrid.png` and the final CTA block.

## Components

### Buttons
- **Shape:** Full pill (`border-radius: 9999px`).
- **Primary (`.btn-primary`):** Rosa Acolhimento (`#E9A4A8`) background, Chumbo Suave (`#2B2628`) text (`600` weight), `0.875rem 1.5rem` padding (`1.05rem 1.85rem` for `.btn-lg`), warm rose shadow (`0 8px 22px rgba(233, 164, 168, 0.42)`).
- **Hover / Focus:** Shifts to `#DF8D92` with `translateY(-2px)` lift; keyboard focus displays a `3px solid #2B2628` outline with `3px` offset.
- **Secondary (`.btn-secondary`):** White background (`#FFFFFF`), `2px solid #E9A4A8` border, `#2B2628` text, shifting to `#FBF0F1` on hover.

### Cards / Containers
- **Corner Style:** Softly rounded (`1.25rem` for compact items, `1.75rem` for content cards).
- **Background:** Alternates between `#FFFFFF` (on cream sections) and `#FDF9F3` (on white sections).
- **Border:** `1px solid #EFE4DF`, transitioning to `#E9A4A8` on hover or active accordion expansion; Pillar cards feature a `6px` top accent bar in `#E9A4A8`, `#BAE5ED`, or `#F6DEBC`.
- **Internal Padding:** `1.5rem` to `2.25rem`.

### Navigation
- **Header (`.site-header`):** Sticky `4.5rem` (`5rem` on desktop) bar with translucent cream backdrop blur (`rgba(253, 249, 243, 0.92)`), official `assets/logo.png` on the left, anchor links in the center, and compact WhatsApp CTA on the right.
- **Mobile Treatment:** Accessible hamburger toggle (`aria-expanded`, `Escape` and outside-click close) plus a sticky bottom conversion bar (`.mobile-cta-bar`) that appears after scrolling past the Hero fold.

### Portrait Frame with Crayon Doodles (Signature Component)
- **Structure (`.hero-photo-frame`, `.about-photo-wrapper`):** Rounded `2.5rem` frame in Rosa Acolhimento (`#E9A4A8`) or Amarelo Baunilha (`#F6DEBC`) housing the transparent cutout `assets/ingrid.png`, layered with white hand-drawn stars in the background, floating `assets/coracao.png` and `assets/icons/rainbow.svg` badges on the edges, and a frosted-glass credential card with `assets/logo.png` at the base.

## Do's and Don'ts

### Do:
- **Do** use only the official palette (`#E9A4A8`, `#F6DEBC`, `#BAE5ED`, `#FFFFFF`) and its documented warm-cream/charcoal support tokens defined in `:root`.
- **Do** pair pastel backgrounds (`#E9A4A8`, `#F6DEBC`, `#BAE5ED`) with Chumbo Suave (`#2B2628`) text to maintain WCAG AA/AAA contrast.
- **Do** use the real brand assets (`assets/logo.png`, `assets/ingrid.png`, `assets/coracao.png`, `assets/canecas-2.png`, `assets/icons/insta.png`) with explicit `width` and `height` attributes to prevent layout shift.
- **Do** route every WhatsApp CTA through the `.js-whatsapp-link` class and `WHATSAPP_CONFIG` in `js/main.js`.

### Don't:
- **Don't** invent unrequested accent colors (such as neon WhatsApp greens or generic corporate blues).
- **Don't** use sharp `0px` corners or heavy dark brutalist shadows that break the welcoming child-and-adolescent therapeutic atmosphere.
- **Don't** include diagnostic checklists, promises of cure, patient testimonials, or identifiable photos of real children (CFP ethical prohibition).
