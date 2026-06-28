## 2025-05-14 - Accessible Custom Interactive Components
**Learning:** In a vanilla JS/Tailwind environment, custom UI components like star ratings and drag-and-drop zones often lack inherent accessibility. They require manual addition of `role="button"`, `tabindex="0"`, and `keydown` listeners (Enter/Space) to be usable by keyboard and screen reader users.
**Action:** Always verify if non-button interactive elements have appropriate roles and keyboard support. Add `aria-busy` and `role="status"` for asynchronous feedback to ensure screen readers announce state changes.
