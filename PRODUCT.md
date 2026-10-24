# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML5, CSS3 (Mobile-First, Grid, Flexbox, Custom Properties, `clamp()`), and Vanilla JavaScript (ES6+), organized at root (`index.html`, `css/style.css`, `js/main.js`, `assets/`).

## Users

1. **Primary Users — Parents and Legal Guardians (`Pais e Responsáveis`):** Seeking specialized, trustworthy, and empathetic psychological care for their children or teenagers facing emotional, behavioral, cognitive, academic, or family transition challenges.
2. **Secondary Users — Adolescents:** Looking for a safe, confidential, and judgment-free therapeutic space.

## Product Purpose

Convert visitors into initial WhatsApp scheduling conversations (`Agendar conversa pelo WhatsApp`) with a pre-filled message centralized in `js/main.js` (`WHATSAPP_CONFIG`), guiding families smoothly through recognizing common signs, understanding the Cognitive-Behavioral Therapy (TCC) approach, and feeling safe to take the first step.

## Positioning

Clinical child and adolescent psychology (`Psicologia Clínica Infantojuvenil`) by **Ingrid Cunha (`CRP 13/12719`)**, integrating **Cognitive-Behavioral Therapy (TCC)** with ongoing postgraduate specialization in **Neuropsychology (Uninovare)** and broad developmental context experience across Hospital, Social, and Educational Psychology internships (Unifacisa).

## Operating Context

- Regulated by the **Código de Ética Profissional do Psicólogo** and **CFP (Conselho Federal de Psicologia)** advertising resolutions:
  - Strictly no promises of cure, guaranteed outcomes, sensationalism, or self-diagnosis checklists.
  - No patient testimonials, before/after imagery, or identifiable photos/names of real children.
  - Clear emergency disclaimer (188 CVV) and LGPD privacy notice/modal.
- All WhatsApp CTAs share a single configuration source (`WHATSAPP_CONFIG` in `js/main.js`) and carry `data-track` attributes for GTM/GA4 and Meta Pixel measurement.

## Capabilities and Constraints

- 10 ordered conversion sections:
  1. Sticky accessible Header
  2. High-impact mobile-first Hero with 3 real credential badges
  3. Non-diagnostic Recognition of Signs (`Quando procurar ajuda?` — 7 cards)
  4. How I Can Help (`Atendimento Infantil`, `Atendimento de Adolescentes`, `Orientação de Pais`)
  5. About Ingrid Cunha (first-person official bio, education, and 3 differentials)
  6. TCC Approach explained simply for laypeople + active family partnership
  7. 4-step Care Process (`Como funciona o acompanhamento`)
  8. Accessible 8-question FAQ Accordion (`[A CONFIRMAR]` placeholders where needed)
  9. Gentle Final CTA
  10. Contact & Location placeholders + CFP/LGPD Footer
- Extras: Floating WhatsApp button (desktop/tablet) and Sticky Mobile CTA Bar.
- **Deliberately Open / Undecided Pre-Launch Facts (`[A CONFIRMAR]` / `[INSERIR ...]`):**
  - Clinical parameters: exact age range attended (`a partir de X até Y anos`), session duration (`ex. 50 minutos`), and modality (`Presencial em [CIDADE]` / `Online`).
  - Operational & contact data: real WhatsApp number in `js/main.js` (`WHATSAPP_CONFIG.phone`), clinic address/city/CEP, office hours, professional email, Instagram handle (`@[INSERIR_INSTAGRAM]`), final domain (`[SEU-DOMINIO.COM.BR]`), and GTM/Meta Pixel IDs.

## Brand Commitments

- **Brand Name:** Ingrid Cunha — Psicóloga Infantojuvenil (`CRP 13/12719`)
- **Brand Pillars:** Acolhimento, Ludicidade, Profissionalismo e Limpeza, Humanização.
- **Official Palette (Manual de Identidade Visual):**
  - Rosa Acolhimento: `#E9A4A8` (`rgb(233, 164, 168)`)
  - Amarelo Baunilha: `#F6DEBC` (`rgb(246, 222, 188)`)
  - Azul Serenidade: `#BAE5ED` (`rgb(186, 229, 237)`)
  - Branco Puro: `#FFFFFF` (`rgb(255, 255, 255)`)
  - Neutral text support per Manual application note: soft charcoal (`#2B2628` / `#544C4F`) on light/pastel backgrounds.
- **Official Typography:**
  - Display / Headings: `Dashing Personal` (Bold) with geometric fallback (`Outfit`, `Montserrat`)
  - Body / Subtitles: `Montserrat` (Light / Regular / SemiBold)
- **Official Graphic Motifs:** Hand-drawn crayon/pencil texture rainbow with 4-point star, scribbled hearts (`assets/coracao.png`), stars, clouds, 5-petal flowers, and softly rounded containers.

## Evidence on Hand

- Official bio and academic credentials provided by Ingrid Cunha (Bacharel em Psicologia — Centro Universitário Unifacisa; Pós-graduanda em Neuropsicologia — Uninovare; CRP 13/12719).
- Brand assets in `assets/`:
  - `assets/logo.png` (official rainbow + wordmark logo)
  - `assets/ingrid.png` (official portrait cutout of Ingrid Cunha)
  - `assets/coracao.png` (hand-drawn crayon pink heart)
  - `assets/canecas-2.png` (institutional ceramic mugs in `#F6DEBC` and `#E9A4A8`)
  - `assets/Brand Identity - Ingrid.png` (visual identity presentation board)
  - `assets/icons/insta.png` (Instagram icon)

## Product Principles

1. **Empathy Before Action:** Parents arrive with questions and concern; every section validates their experience without alarmism before inviting a conversation.
2. **Single-Point Conversion Clarity:** Every section has one clear purpose leading naturally to a low-friction WhatsApp conversation (`Sem compromisso`).
3. **Ethical Rigor (CFP Compliance):** Credibility comes exclusively from verifiable academic formation, clinical approach (TCC), and ethical transparency.
4. **Warmth with Legibility:** Pastel ludic aesthetics must always pair with high-contrast charcoal typography (`#2B2628`) to guarantee effortless reading and WCAG AA compliance.

## Accessibility & Inclusion

- WCAG 2.1 AA compliance required: contrast ratio >= 4.5:1 for body text, visible `:focus-visible` outlines, keyboard-navigable mobile menu and FAQ accordion, skip link, semantic landmarks, and full respect for `prefers-reduced-motion: reduce`.
