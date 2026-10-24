---
name: "Ingrid Cunha — Psicóloga Infantojuvenil"
description: "Welcoming, ludic, serene, and ethical design system for child and adolescent clinical psychology (CRP 13/12719)."
colors:
  rose: "#E9A4A8"
  vanilla: "#F6DEBC"
  sky: "#BAE5ED"
  white: "#FFFFFF"
  charcoal: "#2B2628"
  charcoal-soft: "#4F4649"
  charcoal-muted: "#594F53"
  cream-soft: "#FDF9F3"
  rose-soft: "#FBF0F1"
  rose-hover: "#DF8D92"
  sky-soft: "#EEF9FB"
  border: "#EFE4DF"
typography:
  display:
    fontFamily: "'Dashing Personal', 'Outfit', 'Outfit Fallback', 'Montserrat', 'Montserrat Fallback', sans-serif"
    fontSize: "clamp(2rem, 1.48rem + 2.15vw, 3.125rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.022em"
  headline:
    fontFamily: "'Dashing Personal', 'Outfit', 'Outfit Fallback', 'Montserrat', 'Montserrat Fallback', sans-serif"
    fontSize: "clamp(1.65rem, 1.32rem + 1.35vw, 2.35rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.018em"
  title:
    fontFamily: "'Dashing Personal', 'Outfit', 'Outfit Fallback', 'Montserrat', 'Montserrat Fallback', sans-serif"
    fontSize: "clamp(1.275rem, 1.14rem + 0.55vw, 1.55rem)"
    fontWeight: 700
    lineHeight: 1.28
    letterSpacing: "-0.012em"
  body:
    fontFamily: "'Montserrat', 'Montserrat Fallback', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(0.985rem, 0.94rem + 0.22vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.68
  label:
    fontFamily: "'Montserrat', 'Montserrat Fallback', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(0.8125rem, 0.785rem + 0.14vw, 0.875rem)"
    fontWeight: 600
    letterSpacing: "0.09em"
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
  2xl: "clamp(4rem, 6vw, 6.5rem)"
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
  button-primary-lg:
    backgroundColor: "{colors.rose}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.pill}"
    padding: "1.05rem 1.85rem"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.pill}"
    padding: "0.875rem 1.5rem"
  button-secondary-hover:
    backgroundColor: "{colors.rose-soft}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.pill}"
    padding: "0.875rem 1.5rem"
  button-header:
    backgroundColor: "{colors.rose}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.pill}"
    padding: "0.65rem 1.15rem"
  section-tag:
    backgroundColor: "{colors.vanilla}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 1rem"
  sign-card:
    backgroundColor: "{colors.cream-soft}"
    textColor: "{colors.charcoal-soft}"
    rounded: "{rounded.lg}"
    padding: "1.5rem"
  pillar-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.charcoal-soft}"
    rounded: "{rounded.lg}"
    padding: "2.25rem"
  faq-item:
    backgroundColor: "{colors.white}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.md}"
    padding: "1.15rem 1.35rem"
---

# Design System: Ingrid Cunha — Psicóloga Infantojuvenil

## Overview

**Creative North Star: "O Consultório Acolhedor em Giz Pastel (The Pastel Crayon Sanctuary)"**

The visual identity and web design system of **Ingrid Cunha — Psicóloga Infantojuvenil (`CRP 13/12719`)** embody four core brand pillars established in the Visual Identity Manual: **Acolhimento** (soft colors and rounded forms), **Ludicidade** (organic crayon/dry-brush textures evoking childhood), **Profissionalismo e Limpeza** (modern, highly legible sans-serif typography), and **Humanização** (affection, active listening, and healthy development). The mood is welcoming, ludic, serene, and ethical—translating the tactile warmth of the brand's stationery, ceramic mugs (`assets/canecas-2.png`), and editorial posters (`assets/Brand Identity - Ingrid.png`) into a digital space where parents and adolescents immediately feel safe.

Every surface balances the tenderness of hand-drawn pastel motifs—the three-arch dry-brush rainbow with its four-point star (`assets/logo.png`), scribbled crayon hearts (`assets/coracao.png`), stars, clouds, and spirals—with the structured clarity required to explain Cognitive-Behavioral Therapy (TCC) and Neuropsychology to families. The system explicitly rejects two visual extremes: sterile, cold hospital-white clinical interfaces on one side, and overstimulating, primary-color daycare aesthetics or aggressive commercial sales funnels on the other.

**Key Characteristics:**
- Luminous pastel triad (`Rosa Acolhimento`, `Amarelo Baunilha`, `Azul Serenidade`) grounded by warm vanilla-cream (`#FDF9F3`) and pure white (`#FFFFFF`) breathing room.
- High-contrast soft charcoal typography (`#2B2628`, `#4F4649`, `#594F53`) over light and pastel surfaces to achieve WCAG AA/AAA readability without harsh pure black.
- Authentic crayon and dry-brush graphical motifs (`assets/logo.png`, `assets/coracao.png`, rainbow, cloud, spiral, and 4/5-point star doodles) used as purposeful focal anchors around portraits and callouts.
- Soft, tactile, and reassuring components with generous corner radii (`0.75rem` to `2.5rem` and full `9999px` pills) and gentle `2px` hover lifts.

## Colors

A luminous pastel triad inspired by childhood tenderness and emotional regulation, paired with warm paper-cream backgrounds and three calibrated charcoal ink steps for effortless reading.

### Primary
- **Rosa Acolhimento** (`#E9A4A8` / `rgb(233, 164, 168)`): Official Brand Color 01 representing affection, empathy, and delicacy. Used for all primary WhatsApp conversion CTAs, the Hero portrait arch frame, primary icon badges (`Infância`), active FAQ/card borders, list bullets, and brand highlights in the footer.
- **Rosa Acolhimento Hover** (`#DF8D92`): Slightly denser rose tone triggered on `:hover` and `:focus-visible` states of primary buttons and floating WhatsApp actions.
- **Rosa Suave** (`#FBF0F1`): Whisper-soft rose tint used for secondary button hover fills, navigation link hover states, differential cards, and the top gradient wash of the `Atendimento Infantil` pillar card.

### Secondary
- **Amarelo Baunilha** (`#F6DEBC` / `rgb(246, 222, 188)`): Official Brand Color 02 bringing warmth, creativity, and gentle energy. Used for uppercase section eyebrow tags (`.section-tag`), the inline marker highlight behind key Hero phrases (`.text-highlight::after`), the `Sobre mim` portrait frame, step `02` badges, default FAQ `+` icons, and `Orientação de Pais` icon badges.

### Tertiary
- **Azul Serenidade** (`#BAE5ED` / `rgb(186, 229, 237)`): Official Brand Color 03 evoking tranquility, trust, and peace. Used for `Atendimento de Adolescentes` icon badges, step `03` badges, the Cognitive Triad's `3. Comportamentos` pill, dashed ethical notice borders, and privacy link accents on dark footer surfaces.
- **Azul Serenidade Suave** (`#EEF9FB`): Calm sky tint used as the background fill for the non-diagnostic CFP ethical notice box (`.ethical-notice-box`) and the top gradient wash of the `Atendimento de Adolescentes` pillar card.

### Neutral
- **Branco Puro** (`#FFFFFF` / `rgb(255, 255, 255)`): Official Brand Color 04 providing visual breathing room, crisp card surfaces on cream sections, secondary button fills, floating credential tags, and modal dialogs.
- **Creme Baunilha Suavizado** (`#FDF9F3`): Primary page canvas derived from softened `#F6DEBC` (as seen on the textured stationery reverse in `assets/Brand Identity - Ingrid.png`), eliminating clinical coldness and serving as the resting background for sign cards and process step cards.
- **Chumbo Suave** (`#2B2628`): Primary display, heading, strong emphasis, and button label ink (delivering >12:1 contrast on `#FDF9F3` and >8.2:1 WCAG AAA contrast on `#E9A4A8`), as well as the grounded dark surface of `.site-footer`.
- **Chumbo Médio** (`#4F4649`): Primary body copy color for narrative paragraphs, card descriptions, and FAQ answers (delivering >7.5:1 contrast across light surfaces).
- **Chumbo Neutro** (`#594F53`): Supporting neutral ink for microcopy, credential subtitles, and contact subdetails (maintaining >5.8:1 contrast across all light and pastel backgrounds).
- **Borda Quente** (`#EFE4DF`): Warm, subtle structural hairline (`1px solid`) separating cards, accordion items, and credential dividers without visual harshness.

### Named Rules
**The Charcoal-On-Pastel Rule.** Never place pure white body text or button labels directly over `#E9A4A8`, `#F6DEBC`, or `#BAE5ED` on light UI components; always pair pastel fills with Chumbo Suave (`#2B2628`) so every CTA button, eyebrow badge, and triad pill passes WCAG AA/AAA effortlessly.

**The Official Palette Exclusivity Rule.** Never introduce external saturated greens, corporate blues, or diagnostic reds—including neon WhatsApp green buttons. Every WhatsApp CTA uses Rosa Acolhimento (`#E9A4A8`) with Chumbo Suave (`#2B2628`) text to preserve the serene therapeutic atmosphere.

**The Warm Canvas Rule.** Never leave the entire page on stark `#FFFFFF`; alternate sections between Creme Baunilha Suavizado (`#FDF9F3`), Branco Puro (`#FFFFFF`), and soft pastel gradients so families experience a warm, stationery-like tactile rhythm.

## Typography

**Display Font:** `Dashing Personal` (Bold `700`, loaded via local `@font-face` with `Outfit` `700` and metric-compatible `'Outfit Fallback'` (`size-adjust: 100.8%`) geometric fallbacks)
**Body Font:** `Montserrat` (Regular `400`, Medium `500`, SemiBold `600`, paired with metric-compatible `'Montserrat Fallback'` (`size-adjust: 105.5%`))

**Character:** The pairing unites the contemporary, clean display personality of `Dashing Personal`—distinguished in the brand wordmark (`assets/logo.png`) by its bespoke lowercase **"g"** with an angled top ear and open loop—with Julieta Ulanovsky's geometric `Montserrat`, which brings airy legibility to clinical explanations, credentials, and uppercase tracked labels (`PSICÓLOGA INFANTOJUVENIL`).

### Hierarchy
- **Display (`--text-3xl`)** (`700` weight, `clamp(2rem, 1.48rem + 2.15vw, 3.125rem)`, `1.15` line-height, `-0.022em` letter-spacing, `text-wrap: balance`): Reserved exclusively for the Hero `<h1>` value proposition, featuring an inline vanilla marker highlight (`.text-highlight`).
- **Headline (`--text-2xl`)** (`700` weight, `clamp(1.65rem, 1.32rem + 1.35vw, 2.35rem)`, `1.2` line-height, `-0.018em` letter-spacing, `text-wrap: balance`): Section `<h2>` headings across all conversion sections and the final CTA banner.
- **Title (`--text-xl` / `--text-lg` / `--text-md`)** (`700` weight, `1.28` line-height, `-0.012em` letter-spacing, `text-wrap: balance`): Major card headings (`<h3>` at `--text-xl`: `clamp(1.275rem, 1.14rem + 0.55vw, 1.55rem)`) in the Care Pillars (`.pillar-title`), TCC cards (`.tcc-card-title`), and Privacy Modal header. Compact card titles (`.sign-card-title`, `.step-title`) step down to `--text-lg` (`clamp(1.125rem, 1.04rem + 0.38vw, 1.3125rem)`), while sub-section and contact card titles (`.credentials-title`, `.contact-card h3`) use `--text-md` (`clamp(1.05rem, 0.99rem + 0.28vw, 1.1875rem)`).
- **Body (`--text-base` / `--text-sm`)** (`400` weight with `600` strong emphasis, `clamp(0.985rem, 0.94rem + 0.22vw, 1.0625rem)`, `1.68` line-height, `text-wrap: pretty`): Main narrative copy in `Sobre a Ingrid`, TCC explanations, and introductory texts constrained to `54ch–65ch`. Lead subtitles (`.hero-subtitle`, `.section-subtitle`) scale to `--text-md` (`clamp(1.05rem, 0.99rem + 0.28vw, 1.1875rem)`, `1.6` line-height, `max-width: 54ch`) so they remain optically distinct from card `<h3>` titles (`--text-lg`).
- **Label (`--text-xs`)** (`600` weight, `clamp(0.8125rem, 0.785rem + 0.14vw, 0.875rem)`, `0.09em` letter-spacing, `1.3` line-height, uppercase): Section eyebrow pills (`.section-tag`), microcopy captions, and credential tags, enforcing a strict `13px` (`0.8125rem`) minimum legibility floor. Numerical identifiers (`CRP 13/12719`, steps `01–04`, phone numbers, `CVV 188`, `SAMU 192`) enforce `font-variant-numeric: tabular-nums lining-nums`.

### Named Rules
**The 13px Minimum Floor Rule.** No text token or caption may drop below `0.8125rem` (`13px`), ensuring that CRP numbers, LGPD notices, and microcopy remain effortlessly legible on mobile screens for parents reading under stress.

**The Marker Highlight Rule.** Use the `.text-highlight` vanilla underline bar (`height: 0.36em` in `#F6DEBC` behind the baseline) at most once per primary headline to draw the eye to the core emotional benefit (*"compreender emoções"*).

## Layout

The layout is mobile-first, built around a centered `1200px` (`1240px` at `1280px+`) max-width container (`--container-max`) with single-layer horizontal padding (`1.25rem` on mobile, `2rem` on `768px+`) and generous `4.5rem–5.5rem` vertical section rhythm. Section headers are centered and constrained to `44rem` (`52rem` for the FAQ container and `56rem` for the Final CTA card) to prevent eye fatigue. All fixed/sticky bars and modals honor iOS/Android safe-area insets (`env(safe-area-inset-*)` with `viewport-fit=cover`).

- **Responsive Breakpoints & Context Adaptations:**
  - **Compact Mobile (`320px–379px` — iPhone SE / compact Android):** Single-column flow (`1fr`), full-width stacked CTA buttons, tucked portrait doodles to prevent edge clipping, stacked family mugs banner, scrollable `100dvh` mobile navigation drawer, and `44×44px` minimum touch targets.
  - **Standard Mobile (`380px+` — iPhone 12–16 / Pro / Max, Galaxy S, Pixel):** Brand wordmark and CRP (`Ingrid Cunha • CRP 13/12719`) revealed in the sticky header; horizontal family mugs banner.
  - **Large Mobile / Phablet (`480px+`):** Full crayon doodle offsets restored around `.hero-photo-frame` and `.about-photo-wrapper`.
  - **`sm` (`640px+`):** Inline horizontal Hero CTA group, 3-column Hero trust badges, 2-column recognition signs grid (with the 7th Adolescence card spanning 2 columns), 3-column differentials grid, and 2-column process steps and contact grids.
  - **`md` (`768px+` — iPad Mini / iPad Air Portrait):** Header CTA label text revealed alongside icon, 2-column Care Pillars grid (with the 3rd card spanning 2 columns), horizontal ethical notice box, horizontal 3-step TCC cognitive triad with inline `↔` arrows, and transition from the mobile bottom bar to the desktop floating WhatsApp button (`.floating-whatsapp`).
  - **Tablet Landscape / Large iPad (`900px–1023px`):** Side-by-side 2-column Hero (`1.15fr 0.85fr`) and 2-column About (`0.85fr 1.15fr`) layouts.
  - **`lg` (`1024px+` — Laptops / iPad Pro Landscape):** Header height expands from `4.5rem` to `5rem` with inline horizontal navigation links (`white-space: nowrap`); asymmetric 2-column Hero (`1.25fr 0.75fr`), 3-column recognition signs grid (card 7 spanning all 3 columns), 3-column Care Pillars, asymmetric 2-column About section (`0.85fr 1.15fr`), 2-column TCC & Family layout (`1.2fr 0.8fr`), and 4-column Process Steps and Contact grids.
  - **`xl` (`1280px+` — Wide Desktops / 4K):** Container expands to `1240px`, brand wordmark + CRP re-enabled alongside full-size horizontal navigation links.
  - **Mobile Landscape (`max-height: 520px` and `orientation: landscape`):** Header compacts to `3.6rem` and the bottom sticky bar yields to the compact floating WhatsApp button to preserve vertical reading height.
  - **Touch vs. Pointer (`@media (hover: none), (pointer: coarse)`):** Disables sticky card hover lifts on touch screens and applies crisp `:active` press feedback (`scale(0.985)`).

## Elevation & Depth

The system uses **soft tonal layering with diffused ambient elevation**. Primary separation comes from alternating canvas tones (`#FDF9F3` vs. `#FFFFFF`), subtle pastel surface washes, and warm `1px solid #EFE4DF` hairlines. Shadows are low-opacity and warm—tinted with soft charcoal (`rgba(43, 38, 40, ...)`) or Rosa Acolhimento (`rgba(233, 164, 168, ...)`)—acting as a gentle cushion for floating cards, portrait frames, and interactive hover lifts rather than rigid structural dividers.

### Shadow Vocabulary
- **Subtle Resting Cushion (`--shadow-sm`)** (`box-shadow: 0 4px 16px rgba(43, 38, 40, 0.05)`): Applied to Hero eyebrow badges, trust badges, secondary buttons, contact cards, scrolled sticky header, and expanded FAQ items.
- **Elevated Surface & Hover Lift (`--shadow-md`)** (`box-shadow: 0 12px 32px rgba(43, 38, 40, 0.07)`): Applied at rest to Care Pillar cards, TCC & Family cards, floating photo credential tags, and the Final CTA banner, and triggered on `:hover` (`translateY(-3px)` to `translateY(-4px)`) for sign cards and process step cards.
- **Rose Portrait Halo (`--shadow-lg`)** (`box-shadow: 0 20px 48px rgba(233, 164, 168, 0.22)`): Diffused warm rose glow behind the Hero portrait frame (`.hero-photo-frame`).
- **Primary CTA Glow** (`box-shadow: 0 8px 22px rgba(233, 164, 168, 0.42)`, intensifying to `0 12px 26px rgba(233, 164, 168, 0.55)` on hover): Gives primary WhatsApp buttons a tactile, inviting presence.
- **Accessible Keyboard Focus Ring (`--shadow-focus`)** (`outline: 3px solid #2B2628; outline-offset: 3px`): Unmistakable high-contrast focus indicator across all interactive controls.

### Named Rules
**The Warm Shadow Rule.** Never use pure black (`rgba(0, 0, 0, ...)`) or high-opacity drop shadows; every shadow must use either warm charcoal (`rgba(43, 38, 40, 0.05–0.10)`) or rose-tinted ambient light (`rgba(233, 164, 168, 0.22–0.55)`).

## Shapes

Guided by Section 5 of the Visual Identity Manual (*"Containers Arredondados"*), the form language eliminates sharp `0px` corners in favor of soft, protective curves that mirror a child-safe therapeutic environment:

- **Small Radius (`--radius-sm`: `0.75rem`):** Trust badge icon squares, mobile menu links, hamburger button, and footer emergency callout.
- **Medium Radius (`--radius-md`: `1.25rem`):** Trust badge cards, sign card icon containers, floating portrait credential cards, TCC triad step cards, differential items, and FAQ accordion containers.
- **Large Radius (`--radius-lg`: `1.75rem`):** Primary content cards (`.sign-card`, `.pillar-card`, `.tcc-explanation-card`, `.family-work-card`, `.step-card`, `.contact-card`), inner portrait cutouts, and the dashed ethical notice box (`2px dashed #BAE5ED`).
- **Extra-Large Arch/Frame Radius (`--radius-xl`: `2.5rem`):** Outer portrait frames (`.hero-photo-frame`, `.about-photo-wrapper`) and the Final CTA hero card (`.final-cta-card` with `2px solid #FFFFFF` border).
- **Full Pill (`--radius-pill`: `9999px`):** All buttons (`.btn`), section eyebrow tags (`.section-tag`), pillar audience badges (`.pillar-badge`), and cognitive triad step badges (`.triad-badge`).
- **Organic Crayon Motifs:** Circular floating heart badges (`border-radius: 50%` housing `assets/coracao.png`), circular step numbers (`.step-number`), and freeform hand-drawn SVG/PNG doodles positioned at frame edges.

## Motion

The motion system expresses the creative north star: **"O Consultório Acolhedor em Giz Pastel"**. Motion is purposeful, organic, and gentle—designed to reassure parents under stress and evoke a child-safe therapeutic sanctuary. It avoids aggressive mechanical transitions, bouncy spring physics, and long blocking sequences.

### Motion Tokens & Curves
- **Natural Exponential Deceleration (`--ease-out-expo`):** `cubic-bezier(0.16, 1, 0.3, 1)` used for confident, smooth arrivals and state reveals.
- **Soft Continuous Easing (`--ease-in-out-soft`):** `cubic-bezier(0.4, 0, 0.2, 1)` for organic, non-mechanical breathing rhythms.
- **Fast Feedback (`--transition-fast`):** `160ms` for immediate button hover lifts, color shifts, and click depressions (`:active`).
- **Base State Change (`--transition-base`):** `280ms` for card lifts, FAQ grid expands, mobile menu slides, and modal entries.
- **Entrance Duration (`--transition-entrance`):** `520ms` for progressive viewport scroll reveals (`[data-reveal]`).

### Focal Moment & Ambient Sanctuary
- **Authored Hero Focal Moment (Crayon Stroke):** Upon arrival, the vanilla pastel marker highlight (`.text-highlight::after`) progressively draws from left to right behind *"compreender emoções"* (`animation: crayon-draw 750ms var(--ease-out-expo) 320ms forwards;`), personifying the hand-crafted care of the brand.
- **Sanctuary Ambient Rhythm:** Subtle, slow-breathing floating animations (`4.6s–6.4s` loops on `transform` only) on the crayon heart (`.hero-badge-heart`, `.about-doodle--heart`) and rainbow doodles (`.hero-badge-rainbow`, `.about-doodle--spiral`), evoking an affectionate and living clinic space.
- **Welcoming Availability Pulse:** A reassuring, soft rose pulse on `.status-dot` (*"Tire suas dúvidas iniciais sem compromisso"*), communicating active openness to families.

### Feedback & State Transitions
- **Tactile Button Press:** Buttons elevate `-2px` with expanded rose glow on hover, rotate the WhatsApp icon slightly (`scale(1.08) rotate(-3deg)`), and respond instantly on click/tap with `transform: translateY(1px) scale(0.985);`.
- **Card Depth & Icon Micro-Interactions:** Cards (`.sign-card`, `.pillar-card`, `.step-card`, `.contact-card`) lift smoothly (`translateY(-4px)`) with border highlight and subtle icon scaling (`1.06–1.08`). On touch devices (`@media (hover: none)`), sticky lifts are disabled in favor of active tap feedback.
- **Smooth FAQ Accordion:** Expanded via CSS Grid (`grid-template-rows: 0fr ↔ 1fr`), rotating the plus icon 180° with a 90° crossfade on the vertical bar, completely eliminating height-jumping layout jank.
- **Progressive Scroll Reveal & Stagger:** Content is 100% visible by default without JS; when JS is active (`html.js-ready`), sections rise smoothly (`16px` with `--ease-out-expo`), with grid children staggered in a 50ms cascade (capped at 240ms).

### Reduced Motion Contract
Under `@media (prefers-reduced-motion: reduce)`, all spatial movements, rotations, infinite floating loops, and status dot pulses are completely disabled (`animation: none !important; transform: none !important;`). The crayon marker renders fully drawn immediately, and all interactive feedback is communicated through instant, legible opacity and color shifts.

## Experience & Delight Details

Delight in this clinical setting is not generic whimsy or loud celebration; it is **character revealed through humane, considered utility**:

- **Delight Thesis:** *"Ao navegar pela página, pais e responsáveis devem sentir o alívio imediato de serem verdadeiramente compreendidos, encontrando em cada detalhe o cuidado afetuoso de um consultório acolhedor e a segurança técnica de uma profissional ética."*
- **1-Click Credential Copy with Serene Toast:** Parents verifying credentials for medical referrals or insurance reimbursement receipts can click the CRP chip (`.btn-copy-chip`) in `.about-crp-tag` or `.footer-crp` to copy `CRP 13/12719` with a tranquil, non-intrusive floating toast confirmation (*"CRP 13/12719 copiado! ✓"*).
- **Themed Browser Surfaces:** Custom rounded Webkit scrollbars (`#E9A4A8` thumb on `#FDF9F3` track), soft charcoal on baunilha selection (`::selection`), rose text caret (`caret-color: #E9A4A8`), and generous `0.22em` underline offsets prevent generic un-themed browser defaults.
- **Reading Progress Tracker:** An ultra-subtle, 3px gradient line (`Rosa Acolhimento ↔ Amarelo Baunilha`) pinned to the top of the sticky header quietly reflects reading progress as parents scroll through explanations.
- **Interactive Cognitive Triad Flow:** Hovering on any of the 3 steps of the Cognitive Triad (`Pensamentos`, `Emoções`, `Comportamentos`) elevates the step with a custom pastel border and activates a directional nudge on `.triad-arrow`, visually reinforcing the interconnected mental model of TCC.
- **End-of-FAQ Empathetic Support:** A gentle callout banner at the conclusion of the 8 FAQ items specifically invites parents with unique circumstances to send a pre-filled, low-friction message without the pressure of formulating a "perfect question".
- **Tactile Scrapbook Depth:** Bounded, micro-tilt parallax perspective (`max 2.5deg`) on the Hero frame when desktop fine-pointer users interact with the portrait, evocative of an illustrated children's book.

## Components

Components feel **soft, tactile, and reassuring**—combining generous pill and card radii, high-contrast charcoal labels, and subtle `200ms–320ms cubic-bezier(0.25, 1, 0.5, 1)` microinteractions (`translateY(-2px)` on buttons, `translateY(-4px)` on cards) that fully respect `prefers-reduced-motion: reduce`.

### Buttons
- **Shape:** Full pill (`border-radius: 9999px`) with inline flexbox alignment (`gap: 0.625rem`) for the WhatsApp SVG icon and label.
- **Primary (`.btn-primary`):** Rosa Acolhimento (`#E9A4A8`) background, Chumbo Suave (`#2B2628`) text (`600` weight), `0.875rem 1.5rem` padding (`1.05rem 1.85rem` for `.btn-lg`, `0.625rem 1.125rem` for `.btn-sm`), and warm rose shadow (`0 8px 22px rgba(233, 164, 168, 0.42)`).
- **Hover / Focus / Active:** Shifts background to `#DF8D92` with a `translateY(-2px)` lift and deeper rose shadow (`0 12px 26px rgba(233, 164, 168, 0.55)`); active state returns to `translateY(0)`; `:focus-visible` displays a `3px solid #2B2628` outline with `3px` offset.
- **Secondary (`.btn-secondary`):** Pure white (`#FFFFFF`) background, `2px solid #E9A4A8` border, Chumbo Suave (`#2B2628`) text, shifting to Rosa Suave (`#FBF0F1`) with `translateY(-2px)` on hover.

### Chips & Eyebrow Badges
- **Section Tag (`.section-tag`):** Uppercase pill badge (`9999px` radius, `0.35rem 1rem` padding) in Amarelo Baunilha (`#F6DEBC`) with `600` weight Chumbo Suave (`#2B2628`) text and `0.1em` tracking.
- **Hero Eyebrow Badge (`.eyebrow-badge`):** White pill container (`1px solid rgba(233, 164, 168, 0.45)`, `--shadow-sm`) pairing the crayon heart (`assets/coracao.png`) with `Psicologia Infantojuvenil • CRP 13/12719`.
- **Pillar & Triad Badges (`.pillar-badge`, `.triad-badge`):** Compact pill labels (`0.25rem–0.3rem` vertical padding) identifying developmental stages (`Infância`, `Adolescência`, `Família`) and cognitive steps (`1. Pensamentos`, `2. Emoções`, `3. Comportamentos`).

### Cards / Containers
- **Recognition Sign Cards (`.sign-card`):** `1.75rem` radius, `#FDF9F3` background on white section canvas, `1px solid #EFE4DF` border, `1.5rem` padding, and a `3rem × 3rem` rounded icon badge (`1.25rem` radius) cycling through `#E9A4A8`, `#F6DEBC`, and `#BAE5ED`. Hovering lifts the card by `-4px`, applies `--shadow-md`, and shifts the border to `#E9A4A8`.
- **Care Pillar Cards (`.pillar-card`):** `1.75rem` radius, `2.25rem` padding, `--shadow-md`, and a soft top-down linear gradient wash (`linear-gradient(180deg, <tint> 0%, #FFFFFF 38%)` using `#FBF0F1` for Rose, `#EEF9FB` for Sky, and `#FDF9F3` for Vanilla). Features a `3.5rem × 3.5rem` pastel icon box, stage pill badge, and a custom list with `✦` rose star bullets (`content: '✦'`).
- **TCC & Family Cards (`.tcc-explanation-card`, `.family-work-card`):** White `1.75rem` radius cards (`2.25rem` padding, `--shadow-md`) housing the 3-step Cognitive Triad (`#FBF0F1`, `#FDF9F3`, `#EEF9FB` sub-cards connected by rose `↔` arrows) and the family partnership list (`♥` rose bullets) paired with the institutional ceramic mugs banner (`assets/canecas-2.png`).
- **Ethical Notice Box (`.ethical-notice-box`):** Non-alarmist callout in `#EEF9FB` with a `2px dashed #BAE5ED` border, `1.75rem` radius, and `assets/coracao.png` icon, reminding parents that behavioral signs are not a clinical diagnosis.
- **Accessible FAQ Accordion (`.faq-item`):** White `1.25rem` radius containers (`1px solid #EFE4DF`, shifting to `#E9A4A8` via `:has(.faq-trigger[aria-expanded="true"])`). Triggers use `Dashing Personal` bold headings and a circular `1.75rem` `+`/`−` icon badge that transitions from `#F6DEBC` (closed) to `#E9A4A8` (expanded) with full `ArrowUp`/`ArrowDown`/`Home`/`End` keyboard support.

### Navigation & Persistent Conversion Surfaces
- **Sticky Header (`.site-header`):** `4.5rem` height (`5rem` at `1024px+`) with translucent cream backdrop blur (`rgba(253, 249, 243, 0.92)`, `backdrop-filter: blur(12px)`), shifting to `rgba(255, 255, 255, 0.96)` with `--shadow-sm` when `.is-scrolled` is active. Left side displays `assets/logo.png` (`255×197` aspect ratio); center houses anchor links with `#FBF0F1` hover pills; right side holds `.btn-header`.
- **Mobile Sticky CTA Bar (`.mobile-cta-bar`) & Floating WhatsApp (`.floating-whatsapp`):** On viewports `< 768px`, a fixed bottom white bar (`border-top: 2px solid #E9A4A8`) slides in after `340px` scroll; on `768px+`, it yields to a `3.5rem × 3.5rem` circular `#E9A4A8` floating button with a `#2B2628` slide-in tooltip (`Agendar conversa`).

### Portrait Frame with Crayon Doodles (Signature Component)
- **Structure (`.hero-photo-frame`, `.about-photo-wrapper`):** Directly translates Section 6 of the Visual Identity Manual (*"Fotografia Profissional: Recortes aplicados sobre fundos das cores da paleta interagindo com elementos desenhados à mão"*). A `2.5rem` rounded container in Rosa Acolhimento (`#E9A4A8` in Hero) or Amarelo Baunilha (`#F6DEBC` in About) frames the cutout portrait `assets/ingrid.png`, layered with white hand-drawn 4- and 5-point stars in the background, a floating dry-brush rainbow (`assets/icons/rainbow.svg`) and circular crayon heart badge (`assets/coracao.png`) on the edges, and a frosted-glass credential caption (`.hero-floating-card` / `.about-crp-tag`) featuring `assets/logo.png` and `CRP 13/12719` at the base.

## Do's and Don'ts

### Do:
- **Do** use only the four official Visual Identity Manual colors (`#E9A4A8`, `#F6DEBC`, `#BAE5ED`, `#FFFFFF`) and their documented warm-cream/charcoal support tokens (`#FDF9F3`, `#FBF0F1`, `#DF8D92`, `#EEF9FB`, `#EFE4DF`, `#2B2628`, `#4F4649`, `#594F53`).
- **Do** pair pastel fills (`#E9A4A8`, `#F6DEBC`, `#BAE5ED`) with Chumbo Suave (`#2B2628`) text so buttons, badges, and step indicators maintain >8:1 WCAG AAA contrast.
- **Do** use the official brand assets (`assets/logo.png`, `assets/ingrid.png`, `assets/coracao.png`, `assets/canecas-2.png`, `assets/icons/insta.png`) with explicit `width` and `height` attributes and preserve a light badge (`#FFFFFF` or `#FDF9F3`) behind `assets/logo.png` when placed over dark surfaces like `.site-footer`.
- **Do** route every WhatsApp conversion button through `.js-whatsapp-link` and `WHATSAPP_CONFIG` in `js/main.js`, preserving `[data-track]` attributes for GTM/GA4 and Meta Pixel measurement.

### Don't:
- **Don't** introduce external saturated accent colors—especially neon WhatsApp greens (`#25D366`), clinical blues, or alarmist reds—anywhere in the UI.
- **Don't** place pure white (`#FFFFFF`) body text or button labels directly on pastel `#E9A4A8`, `#F6DEBC`, or `#BAE5ED` backgrounds where contrast drops below WCAG AA.
- **Don't** use sharp `0px` corners, cold gray backgrounds, or heavy black drop shadows that break the welcoming, child-friendly sanctuary atmosphere.
- **Don't** include diagnostic checklists, promises of cure, patient testimonials, or identifiable photos of real children (strict CFP ethical prohibition).
