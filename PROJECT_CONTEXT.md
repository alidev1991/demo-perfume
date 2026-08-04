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

The homepage foundation and the approved image phase are complete.

Completed:

-   Requirements gathering, business context, design direction, and
    technology decision
-   RTL Persian homepage structure and the core visual system
-   Header, Hero, brand introduction, category, lifestyle banner,
    product grid, reviews placeholder, and footer placeholder sections
-   Product category filtering with keyboard-accessible category cards
-   Final image phase with 19 optimized WebP images stored in
    `assets/images/generated/`
-   Hero image replacement with the final editorial visual
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

Verification completed:

-   Desktop layout checked at 1440px and 1920px widths
-   All four category cards are equal in size
-   All 12 product cards have equal height and complete bottle visuals
-   Filters verified: Iranian, Arabic, European, and American each show
    3 products; All shows 12 products
-   Browser Console checked with no warnings or errors

Not completed:

-   Final client-approved brand name and production identity
-   Final customer reviews and contact / social information
-   Shop page
-   Product detail page
-   Product inquiry workflow and backend integration
-   Full responsive QA for tablet and mobile breakpoints
-   Production SEO, accessibility audit, performance audit, and deployment

------------------------------------------------------------------------

# Next Steps

Recommended next stage:

1.  Finalize the homepage content, especially customer reviews, contact
    details, social links, and the final brand identity.
2.  Complete responsive behavior and visual QA for tablet and mobile.
3.  Define the product inquiry flow behind `استعلام قیمت`.
4.  After homepage approval, build the Shop and Product Detail pages.

------------------------------------------------------------------------

# AI Assistant Instructions

Read this document before working on the project.

Before writing code: - Understand the goals. - Respect previous
decisions. - Do not change architecture without discussion. - Propose
the next step first.

When coding: - Write clean production-quality code. - Keep files
organized. - Avoid unnecessary dependencies.
