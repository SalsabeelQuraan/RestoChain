## 2025-05-15 - [Dark Mode Consistency & Accessibility]
**Learning:** In static HTML projects, visual indicators like dark mode toggles must be explicitly wired with both functional handlers and accessibility attributes (ARIA labels, focus-visible rings) to avoid being perceived as "broken" placeholders.
**Action:** Always verify that interactive icon-only buttons include `onclick` logic, `aria-label`, and `focus-visible` utility classes for a complete and accessible experience.
