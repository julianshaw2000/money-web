You are GitHub Copilot. Create an **Impact/About feature** to showcase the charity.

Files:
/src/app/features/impact/
impact.routes.ts
impact.page.ts
impact.page.scss
impact.service.ts
components/impact-figure/impact-figure.component.ts
components/story-card/story-card.component.ts
/assets/img/ (include placeholder sample images)

markdown
Copy
Edit

Details:
- Route: `/impact` (default landing page).
- Sections:
  1. **Hero**: mission statement + CTA buttons (“Donate now”, “Learn more”).
  2. **Impact highlights**: grid of `ImpactFigure` components (metric + context).
  3. **Story cards**: 2–3 short stories with images.
  4. **How funds help**: list mapping donation amounts → outcomes.
  5. **Trust & safety**: partner logos, PCI/Stripe, accreditation.
- Components:
  - `impact-figure`: number + label.
  - `story-card`: image, title, short summary.
- Image handling: use `.webp`, `loading="lazy"`, proper alt text, CSS aspect-ratio, optional captions.
