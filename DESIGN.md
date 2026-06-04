---
name: Radar4Flood
description: Public academic project website for radar-based flood forecasting.
colors:
  primary-navy: "#001E45"
  ink-navy: "#06172D"
  secondary-teal: "#0B676C"
  tertiary-sky: "#45A0F3"
  base-surface: "#FCFCFC"
  low-surface: "#F5F9FC"
  card-surface: "#FFFFFF"
  muted-text: "#52677E"
  line-soft: "#D9E6EF"
typography:
  display:
    fontFamily: "IBM Plex Sans Thai, Noto Sans Thai, system-ui, sans-serif"
    fontSize: "clamp(3rem, 8vw, 5.75rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "normal"
  headline:
    fontFamily: "IBM Plex Sans Thai, Noto Sans Thai, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "normal"
  title:
    fontFamily: "IBM Plex Sans Thai, Noto Sans Thai, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "Noto Sans Thai, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 2
  label:
    fontFamily: "Noto Sans Thai, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.5
rounded:
  pill: "9999px"
  xl: "12px"
  panel: "16px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "20px"
  xl: "32px"
  section-sm: "64px"
  section-lg: "96px"
components:
  button-primary:
    backgroundColor: "{colors.secondary-teal}"
    textColor: "{colors.card-surface}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
    height: "44px"
  button-secondary:
    backgroundColor: "{colors.card-surface}"
    textColor: "{colors.primary-navy}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
    height: "44px"
  chip:
    backgroundColor: "{colors.card-surface}"
    textColor: "{colors.primary-navy}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  card:
    backgroundColor: "{colors.card-surface}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.panel}"
    padding: "24px"
  nav-pill:
    backgroundColor: "{colors.card-surface}"
    textColor: "{colors.primary-navy}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
    height: "44px"
---

# Design System: Radar4Flood

## 1. Overview

**Creative North Star: "The Radar Current"**

Radar4Flood is a calm academic brand system for public visitors, collaborators, agencies, and university stakeholders who need to understand the project without entering an operational forecast dashboard. The design should feel like a field-research briefing: precise, evidence-led, image-rich, and approachable.

The visual system uses a deep navy foundation, teal action color, sky-blue signal accents, and generous editorial spacing. It should communicate "academic credibility, modern editorial layout, structured calm, signal-led emphasis, bilingual readability, professional but approachable tone" from the project direction.

This system explicitly rejects a generic university template, a startup landing page with inflated claims, an internal monitoring dashboard, and a complex SaaS product. The forecast interface remains a linked destination, not a rebuilt interface inside the website.

**Key Characteristics:**
- Deep navy identity with restrained teal and sky-blue signal accents.
- Thai-first typography with English support using the same visual hierarchy.
- Image-led proof of field work, radar context, and real project activity.
- Soft, rounded surfaces with flat tonal layering before heavy shadows.
- Clear public navigation: Home, Radar4Flood, News, Publication, Staff, Contact Us.

## 2. Colors

The palette is a restrained radar-current system: navy carries institutional authority, teal carries action, sky blue marks signal, and cool surfaces keep long Thai-English content readable.

### Primary
- **Deep Radar Navy**: The primary identity color for header, footer, hero field, final CTA, strong headings, and high-emphasis text.
- **Ink Navy**: The default reading color for body text on light surfaces.

### Secondary
- **Hydrology Teal**: The primary action color for filled CTAs, links, section markers, and selected emphasis.

### Tertiary
- **Signal Sky**: The bright signal accent for focus outlines, soft highlights, selection color, and radar-specific atmospheric details.

### Neutral
- **Base Surface**: The default page background. Use it for long scroll areas and quiet white space.
- **Low Surface**: The soft section band used to separate content groups without hard borders.
- **Card Surface**: The content surface for signal cards, publication rows, dropdowns, chips, and high-contrast buttons.
- **Muted Current Text**: Supporting copy color. Use only on light surfaces where contrast remains strong.
- **Soft Line**: Reserved for subtle dividers or future low-emphasis separation. Do not make the layout border-heavy.

### Named Rules
**The Navy Carries Trust Rule.** Deep Radar Navy is the brand anchor. It must appear in the first viewport, the primary navigation, and the footer.

**The Signal Is Rare Rule.** Hydrology Teal and Signal Sky are accents. They should guide action, focus, category, and radar signal moments, not wash whole pages in color.

**The No Dashboard Glow Rule.** Do not use neon, high-chroma gradients, or aggressive data-visualization colors. Radar4Flood is a public academic website, not an operations console.

## 3. Typography

**Display Font:** IBM Plex Sans Thai, with Noto Sans Thai and system sans fallback.
**Body Font:** Noto Sans Thai, with system sans fallback.
**Label/Mono Font:** No mono font is part of the system.

**Character:** The type system is Thai-first, steady, and technical without becoming mechanical. IBM Plex Sans Thai gives headings a clear institutional voice, while Noto Sans Thai keeps long bilingual reading comfortable.

### Hierarchy
- **Display** (600, fluid hero scale, 1.04 line-height): Used for the homepage hero wordmark-level heading and rare first-viewport identity moments.
- **Headline** (600, fluid section scale, 1.12 line-height): Used for major page and section headings such as News and Publication.
- **Title** (600, 1.5rem to 2.25rem, tight line-height): Used for cards, publication titles, CTA blocks, and grouped content headings.
- **Body** (400 to 500, 1rem to 1.5rem, open line-height): Used for Thai and English prose. Keep long content left-aligned and capped near 65 to 75 characters when possible.
- **Label** (600 to 700, 0.75rem to 0.875rem): Used for navigation, chips, categories, buttons, and compact metadata. Use title case or natural Thai text, not repeated tracked uppercase scaffolding.

### Named Rules
**The Thai Reading Rule.** Thai text gets generous line-height and left alignment. Do not center long-form Thai or English copy.

**The One Technical Voice Rule.** Do not add monospace as shorthand for radar, engineering, or data. Technical credibility comes from content structure, not costume typography.

## 4. Elevation

Radar4Flood is flat by default. Depth is created first through surface shifts, image overlays, spacing, and typography. Shadows are reserved for floating overlays and the hero media frame, where they help separate layered content from the navy background.

### Shadow Vocabulary
- **Hero Media Lift** (`box-shadow: 0 24px 42px rgb(0 10 28 / 18%)`): Use only for prominent image media that sits on the dark radar field.
- **Dropdown Lift** (`box-shadow: 0 8px 24px rgb(0 30 69 / 18%)`): Use for mobile navigation or future temporary overlays.

### Named Rules
**The Flat-By-Default Rule.** Surfaces rest flat. Use `Low Surface` and `Card Surface` before reaching for shadows.

**The Overlay-Only Shadow Rule.** Shadows are structural, not decorative. Do not pair soft wide shadows with borders on cards.

## 5. Components

### Buttons
- **Shape:** Full pill corners (`9999px`) with a minimum interactive height of 44px.
- **Primary:** Hydrology Teal background with white text, bold label, and compact horizontal padding.
- **Secondary:** Card Surface background with Deep Radar Navy text, used on dark navy or image-backed areas.
- **Hover / Focus:** Hover uses a slight color shift. Focus uses a visible 2px outline offset using either white, Hydrology Teal, or Signal Sky depending on surface contrast.

### Chips
- **Style:** Full pill labels with compact 4px vertical and 12px horizontal padding.
- **Color:** Use Card Surface on image or low-surface contexts. Category chips may use Hydrology Teal or Deep Radar Navy text depending on contrast.
- **State:** Chips are informational in the current site. Do not imply filters unless the page actually supports filtering.

### Cards / Containers
- **Corner Style:** Soft panel radius (`16px`) for cards, media frames, CTA panels, and grouped content surfaces.
- **Background:** Card Surface on Low Surface, Low Surface on Base Surface, and Deep Radar Navy for final high-emphasis CTA.
- **Shadow Strategy:** Flat by default. Hero media and dropdown overlays are the only current shadow use.
- **Border:** Avoid hard borders. Use surface shifts and spacing before lines.
- **Internal Padding:** 20px for compact signal blocks, 24px to 28px for news and publication surfaces, 32px to 40px for large CTA containers.

### Inputs / Fields
- **Style:** No input system is currently implemented.
- **Focus:** Future inputs should use Card Surface, full or soft rounded corners, strong text contrast, and Signal Sky or Hydrology Teal focus outlines.
- **Error / Disabled:** Future states must be explicit, readable, and should not rely on color alone.

### Navigation
- **Style:** Sticky Deep Radar Navy header with logo at left, rounded desktop navigation capsule, rounded nav links, and a rounded language switch.
- **Typography:** 0.875rem medium to semibold labels.
- **States:** Hover shifts links to a soft white overlay or white fill, focus uses a visible white outline.
- **Mobile Treatment:** Native `details` menu with a rounded white trigger and rounded white dropdown. Keep the menu simple until there is a real need for client-side navigation behavior.

### Hero Media
- **Style:** Rounded image frame with field-radar photography, dark bottom gradient, a restrained animated radar sweep, and a caption panel.
- **Motion:** The radar sweep rotates slowly over seven seconds and is disabled by reduced-motion settings.
- **Purpose:** Establish that Radar4Flood is grounded in radar infrastructure and field work, not abstract dashboard graphics.

## 6. Do's and Don'ts

### Do:
- **Do** keep Thai as the default language and ensure English routes use the same visual system.
- **Do** keep the confirmed navigation order: Home, Radar4Flood, News, Publication, Staff, Contact Us.
- **Do** use Deep Radar Navy as the identity anchor in the first viewport and footer.
- **Do** use Hydrology Teal for clear actions and links.
- **Do** use image-rich news and hero areas to show field work, collaborations, and project activity.
- **Do** use surface shifts, spacing, and hierarchy before borders.
- **Do** keep long-form Thai and English content left-aligned with comfortable line length.
- **Do** link clearly to the existing forecast webpage instead of visually implying that the forecast interface is rebuilt here.

### Don't:
- **Don't** make the site look like a generic university template.
- **Don't** make the site feel like a startup landing page with inflated claims.
- **Don't** make the site feel like an internal monitoring dashboard.
- **Don't** make the site feel like a complex SaaS product.
- **Don't** introduce neon dashboard styling, heavy border systems, public login patterns, complex app-shell behavior, or contact forms by default.
- **Don't** replace Sanity, add user authentication, rebuild the forecast interface, or introduce a complex custom backend as part of visual work.
- **Don't** use loud dashboard styling, thick borders, side-stripe accent cards, gradient text, or repeated tiny uppercase tracked labels above every section.
- **Don't** use border-left or border-right greater than 1px as a colored accent on cards, list items, callouts, or alerts.
- **Don't** over-center long-form Thai or English content.
- **Don't** rely on decorative glassmorphism, generic hand-drawn SVG illustrations, or diagonal repeating stripe backgrounds.
