## 2025-05-14 - Interactive Upload Pattern
**Learning:** Static "drag and drop" placeholders can be transformed into functional, accessible upload components by using a focusable `div` (`role="button"`, `tabindex="0"`) linked to a hidden `<input type="file">`. Applying `pointer-events-none` to children of the container prevents visual flicker during drag-over events and ensures the click is always handled by the container.
**Action:** Use this pattern (focusable container + hidden input + pointer-events-none on children) for all custom file upload UIs to ensure keyboard and mouse consistency.
