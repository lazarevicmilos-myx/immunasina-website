# Immunasina Rtanj Boba Tea — Design Brainstorm

## Three Stylistic Approaches

### Approach A: Sacred Apothecary
An alchemical, manuscript-inspired aesthetic drawing from medieval herbalism and illuminated manuscripts. Probability: 0.04

### Approach B: Balkan Heritage Luxe
A warm, editorial luxury aesthetic rooted in Balkan mountain heritage — aged parchment tones, serif editorial typography, gold leaf accents, and a reverent sense of place. Probability: 0.07

### Approach C: Mystical Modernism
A clean, high-contrast modern editorial layout that uses dramatic full-bleed photography, sparse type, and a tension between ancient symbolism and contemporary minimalism. Probability: 0.03

---

## Chosen Approach: **B — Balkan Heritage Luxe**

This direction most faithfully mirrors the brand story: a product born from a legendary Serbian mountain, rooted in centuries of herbal tradition, and validated by modern science. The aesthetic should feel like a premium heritage brand — warm, reverent, and deeply rooted — while remaining legible and contemporary enough for a wellness consumer audience.

---

## Expanded Design System

### Design Movement
Neoclassical Editorial Luxury — drawing from the visual language of premium European apothecary brands, heritage spirits packaging, and high-end wellness editorial photography.

### Core Principles
1. **Warmth over coolness**: Every color decision defaults to warm ivory, amber, and gold rather than clinical whites or cool grays.
2. **Reverence through restraint**: Generous whitespace and deliberate pacing communicate that this product is not rushed — it is earned.
3. **Tradition validated by science**: The layout physically separates and then reunites the mystical narrative and the scientific evidence, mirroring the brand's core tension.
4. **Layered depth**: Botanical illustrations, subtle grain textures, and soft shadow gradients create a sense of physical materiality.

### Color Philosophy
The palette draws from the mountain at dusk — warm stone, dried herbs, and golden light.
- **Background**: Warm ivory `oklch(0.97 0.015 80)` — parchment-like, never stark white
- **Foreground / Text**: Deep warm brown `oklch(0.22 0.04 55)` — like aged ink
- **Gold accent**: Antique gold `oklch(0.72 0.12 80)` — the signature brand color, used for ornaments, dividers, and key callouts
- **Muted secondary**: Warm stone `oklch(0.88 0.02 75)` — for card backgrounds and section dividers
- **Deep contrast**: Dark charcoal-brown `oklch(0.18 0.03 55)` — for hero text over light imagery

### Layout Paradigm
Asymmetric editorial flow — alternating full-bleed image panels with offset text columns. Sections do not center-align uniformly; instead, text and imagery trade dominance across the page. The hero is full-viewport with the mountain emerging from mist. Ingredient sections use a split-panel layout (image left, text right, then reversed). The order section is a contained card with generous padding.

### Signature Elements
1. **Thin gold ornamental dividers** — a small botanical motif (◆ or ✦) flanked by hairline rules, used between every major section.
2. **Botanical line illustrations** — delicate single-weight line drawings of Satureja montana sprigs, used as background texture and section accents.
3. **Circular seal badges** — premium stamp-style badges (like "Power of Tradition · Validated by Science") echoing the brand's dual identity.

### Interaction Philosophy
Slow, deliberate scroll reveals. Each section fades and rises into view as the user scrolls, reinforcing the sense of uncovering something ancient. Hover states on ingredient cards reveal a soft gold glow. The order button has a satisfying press-down scale effect.

### Animation
- Entrance: `opacity: 0 → 1` with `translateY(24px → 0)` over 600ms `cubic-bezier(0.23, 1, 0.32, 1)`, staggered 80ms per element.
- Section transitions: Full-bleed image sections use a subtle parallax scroll effect (background-position shift).
- Ornamental dividers: Fade in with a slight scale from 0.95 → 1.
- CTA button: `scale(0.97)` on `:active`, 160ms ease-out.
- Respect `prefers-reduced-motion`.

### Typography System
- **Display / Hero**: `Cormorant Garamond` (serif, italic for taglines) — editorial, classical, luxurious
- **Section headings**: `Cormorant Garamond` bold — commanding presence
- **Body text**: `Lato` regular — clean, readable, modern enough to carry scientific content
- **Labels / Caps**: `Lato` uppercase letter-spaced — for ingredient names, pillar labels, and technical details
- **Hierarchy**: 72px hero → 48px section → 32px subsection → 18px body → 13px label

### Brand Essence
The only boba tea born from a legendary mountain and the rarest milk on Earth — for those who demand that wellness be both ancient and proven.
Personality adjectives: **Reverent. Rare. Grounded.**

### Brand Voice
Headlines and CTAs should feel like a quiet authority — not shouting, but certain. Avoid generic wellness clichés.
- Example headline: "Some mountains become landmarks. Rtanj became a legend."
- Example CTA: "Begin your ritual"
- Banned phrases: "Get started today", "Welcome to our website", "Discover the difference"

### Wordmark & Logo
The existing brand logo (donkey head inside a teardrop, with "Immunasina" in a refined serif) is the anchor. It should appear in antique gold on the ivory background in the nav, and in white over dark hero imagery.

### Signature Brand Color
**Antique gold** `oklch(0.72 0.12 80)` — warm, mineral, unmistakably premium.
