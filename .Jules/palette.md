# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-15 - Functional File Upload Pattern
**Learning:** In Tailwind-based static HTML, functional file uploads can be implemented by wrapping a hidden `<input type="file">` within a styled `div` with `role="button"`, `tabindex="0"`, and `aria-label`. An IIFE can then manage interactions (click, keyboard, drag-and-drop) and provide immediate UI feedback without a page reload or complex framework.
**Action:** Use this pattern for custom file inputs to maintain accessibility while allowing full design flexibility.
