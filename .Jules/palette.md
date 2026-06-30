## 2025-05-15 - [Accessible Custom Interactive Elements & Notifications]
**Learning:** In this vanilla JS/Tailwind project, custom interactive elements (like the `div` dropzone) and dynamic notifications (toasts) require manual ARIA attribute management and event listeners to ensure parity with native elements for screen reader and keyboard users.
**Action:** Always apply `role="button"`, `tabindex="0"`, and `keydown` (Enter/Space) listeners to interactive `div`s, and include `role="status"` with `aria-live="polite"` for dynamic notifications.
