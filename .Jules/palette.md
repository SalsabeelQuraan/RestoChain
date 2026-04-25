## 2025-04-25 - Accessible Drag-and-Drop File Upload Pattern
**Learning:** For custom file uploads where a label acts as the interactive container for a hidden input, set `tabindex="0"` on the label for keyboard focus and `tabindex="-1"` on the hidden input. Use `pointer-events-none` on children of the label to prevent visual flicker and inconsistent event targeting during drag actions.
**Action:** Always implement `keydown` handlers (Enter/Space) on focusable labels to trigger the hidden file input, and use `textContent` to safely display selected file names.
