# PROJECT CONTEXT - demo-perfume

## Project Identity

Project Name: demo-perfume

Repository: demo-perfume

Project Type: Luxury perfume store website demo

Purpose: Create a premium frontend demo website for a perfume business.
The demo will be presented to the client for approval. After approval,
the project can be expanded into a production website.

------------------------------------------------------------------------

# Business Context

Client: علیرضا ابطحی

Business: Perfume store

Product Categories: - Iranian perfumes - Arabic perfumes - European
perfumes - American perfumes

Brand name: Not finalized.

Temporary brand suggestion: REZVAN

------------------------------------------------------------------------

# Main Goal

Create a website that gives a luxury and premium feeling.

The website should communicate: - elegance - trust - high-quality
products - premium shopping experience

------------------------------------------------------------------------

# Design Direction

Style: Luxury / Minimal / Premium / Modern

Reference inspiration: https://sorrad.ir/

The final design should be unique and not a copy.

Characteristics: - Large whitespace - Elegant typography - Premium
product cards - Clean layout - Strong visual hierarchy

------------------------------------------------------------------------

# Technology Stack

Frontend only.

Technologies: - HTML5 - CSS3 - Vanilla JavaScript

Requirements: - RTL support - Persian language - Responsive design -
Clean maintainable structure

Font: Vazirmatn

------------------------------------------------------------------------

# Development Rules

1.  Build step by step.
2.  Do not implement features outside approved scope.
3.  Explain the plan before major implementation.
4.  Keep architecture scalable.
5.  Avoid unnecessary complexity.
6.  Prioritize visual quality.

------------------------------------------------------------------------

# Expected Pages

-   Home page
-   Shop page
-   Product detail page

------------------------------------------------------------------------

# Suggested Structure

demo-perfume/

-   index.html
-   shop.html
-   product.html
-   css/
-   js/
-   assets/
-   PROJECT_CONTEXT.md

------------------------------------------------------------------------

# Current Status

The homepage foundation, approved image phase, customer reviews, FAQ,
and full responsive homepage phase are complete.

Completed:

-   Requirements gathering, business context, design direction, and
    technology decision
-   RTL Persian homepage structure and the core visual system
-   Header, Hero, brand introduction, category, lifestyle banner,
    product grid, customer reviews, FAQ, and footer placeholder sections
-   Product category filtering with keyboard-accessible category cards
-   Customer reviews section completed with three natural testimonials
    presented as demo sample content
-   Demo testimonials are explicitly documented in the HTML and must be
    replaced with real, verified customer reviews on the production site
-   FAQ section added after customer reviews with six purchase-guidance
    questions and answers
-   FAQ implemented as a lightweight Vanilla JavaScript accordion
-   At most one FAQ answer can remain open at any time, and clicking the
    open question closes it again
-   FAQ uses semantic `button` elements with `aria-expanded`,
    `aria-controls`, labeled answer regions, and synchronized ARIA state
-   FAQ includes a visible focus ring and a native keyboard-usable
    structure for Tab, Enter, and Space interaction
-   Full homepage responsive implementation completed with centralized
    rules in `css/responsive.css`
-   Responsive breakpoints are organized at 1199px, 820px, 640px, and
    359px
-   RTL mobile navigation added with a CSS hamburger and a 44x44px touch
    target
-   Mobile navigation uses a dark Drawer, page Overlay, and body scroll
    locking while open
-   Mobile navigation supports closing from the hamburger, Overlay,
    Escape key, and internal navigation links, with focus returned to
    the menu button
-   Mobile menu state is synchronized through `aria-expanded`,
    `aria-controls`, and an accessible button label
-   Hero composition is responsive so the approved model's face remains
    visible while headline, subtitle, and CTAs stay readable on mobile
-   Brand story, category grid, product grid, reviews, FAQ, lifestyle
    banner, and Footer are responsive across desktop, tablet, and mobile
-   Product cards use a single-column mobile layout while preserving the
    approved 4/5 image ratio and complete product visuals
-   Product filters wrap on small screens and retain 44px touch targets
-   Long English product names use safe wrapping to prevent card and
    viewport overflow
-   Touch-specific hover handling and `prefers-reduced-motion` support
    are included for menu, accordion, smooth scrolling, and motion effects
-   Final image phase with 19 optimized WebP images stored in
    `assets/images/generated/`
-   Hero image finalized with `hero-editorial-v7.webp`
-   The final Hero features an adult model with a natural, beautiful
    face and a direct, confident gaze
-   A closed, subtle, mysterious, and controlled smile was added while
    preserving the model's natural facial identity
-   The model wears a fully covered, very dark burgundy outfit with a
    luxury Fashion and Editorial silhouette
-   Facial, outfit, and environmental lighting are visually harmonized
-   Extra smoke beside the model's face was removed for a cleaner image
-   The advertising appeal is created through the model's gaze, subtle
    smile, tailored outfit, and cinematic lighting
-   The original `hero-editorial.webp` is retained only as a rollback
    option
-   Brand introduction image replacement with the final atelier visual
-   Addition of four final category images: Iranian, Arabic, European,
    and American
-   Replacement of the product placeholders with 12 real perfume
    products and their final product visuals
-   Product pricing state changed to `استعلام قیمت`
-   Category and product image areas corrected to a `4 / 5` aspect ratio
-   Four-column desktop product grid with equal-height product cards
-   Product images use `object-fit: contain` so bottles and packaging
    remain complete; category images use `object-fit: cover`

Image inventory:

-   1 Hero image
-   1 brand introduction image
-   1 lifestyle / scent ritual banner
-   4 category images
-   12 product images
-   Total: 19 WebP images
-   1 additional original Hero rollback asset, not used by the page

Verification completed:

-   Desktop layout checked at 1440px and 1920px widths
-   Final Hero v7 checked at 1440px and 1920px; headline, subtitle, and
    both CTAs remain visible and readable at both widths
-   Final Hero asset path verified as
    `assets/images/generated/hero-editorial-v7.webp`
-   All four category cards are equal in size
-   All 12 product cards have equal height and complete bottle visuals
-   Filters verified: Iranian, Arabic, European, and American each show
    3 products; All shows 12 products
-   Product filters reverified after the Reviews and FAQ work with the
    same expected 3/3/3/3 and 12-product results
-   All six FAQ items verified for opening, single-open behavior, and
    closing the currently open item with a second click
-   Browser Console checked after the Reviews and FAQ update with no
    warnings or errors
-   Responsive layout verified at 1920x1080, 1440x900, 1280x800,
    1024x768, 768x1024, 640px, 430x932, 390x844, 375x812, and 320x568
-   No horizontal overflow found at any tested width
-   Mobile navigation verified for hamburger open/close, Overlay close,
    Escape close, internal-link close, scroll locking, ARIA state, and
    focus return
-   All 19 page images loaded successfully with no broken image detected
-   Product filters and all six FAQ items reverified after responsive work
-   Browser Console rechecked after the responsive phase with no warnings
    or errors

Not completed:

-   Final client-approved brand name and production identity
-   Replacement of the three demo testimonials with real, verified
    customer reviews for the production site
-   Final contact / social information
-   Shop page
-   Product detail page
-   Product inquiry workflow and backend integration
-   Production SEO, accessibility audit, performance audit, and deployment

------------------------------------------------------------------------

# Next Steps

Recommended next stage:

1.  Finalize production content: replace demo testimonials with verified
    customer reviews and add contact details, social links, and the final
    brand identity.
2.  Define the product inquiry flow behind `استعلام قیمت`.
3.  After homepage approval, build the Shop and Product Detail pages.
4.  Complete production SEO, accessibility and performance audits, then
    prepare deployment.

------------------------------------------------------------------------

# AI Assistant Instructions

Read this document before working on the project.

Before writing code: - Understand the goals. - Respect previous
decisions. - Do not change architecture without discussion. - Propose
the next step first.

When coding: - Write clean production-quality code. - Keep files
organized. - Avoid unnecessary dependencies.
