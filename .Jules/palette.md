## 2025-05-14 - [Accessible Custom Interactive Elements]
**Learning:** In a static HTML/JS environment, custom interactive elements (like `div` dropzones) require manual implementation of `tabindex="0"`, `role="button"`, and `keydown` listeners for 'Enter'/'Space' to be fully keyboard accessible.
**Action:** Always pair `click` listeners with `keydown` listeners for custom buttons and ensure they have appropriate ARIA roles and labels.

## 2025-05-14 - [Asynchronous State Feedback]
**Learning:** Using `aria-busy="true"` combined with `aria-live="polite"` on the triggering button during simulated or real async operations (like blockchain transactions) provides excellent screen reader feedback without needing complex state management.
**Action:** Dynamically toggle these attributes in the start/end of async event handlers.
