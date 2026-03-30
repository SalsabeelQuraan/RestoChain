# Palette's Journal - RestoChain

## 2025-05-14 - Accessibility Audit: Incident Report Form
**Learning:** Decorative `div` elements used as interactive file upload areas lack keyboard accessibility and screen reader support by default. Form labels without `for` attributes reduce the clickable area for users with motor impairments.
**Action:** Always refactor custom interaction containers using semantic `<label>` elements linked to hidden inputs, and ensure `role="button"`, `tabindex="0"`, and keyboard listeners are present.
