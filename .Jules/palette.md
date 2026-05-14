## 2026-05-14 - [Interactive File Upload & Form Accessibility]
**Learning:** Custom interactive elements (like a div-based upload zone) must have `role="button"`, `tabindex="0"`, and `keydown` handlers to be truly accessible to keyboard and screen reader users. Simply adding an `onclick` to a `div` is insufficient.
**Action:** Always implement full ARIA roles and keyboard event listeners when transforming static containers into interactive components.

**Learning:** When implementing a custom drop zone, use `pointer-events-none` on nested children to prevent "flickering" during drag operations caused by the `dragleave` event firing as the cursor moves over child elements.
**Action:** Apply `pointer-events-none` to all decorative or informative elements inside a drag-and-drop target.
