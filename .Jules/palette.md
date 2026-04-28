## 2024-05-22 - Accessible File Upload Pattern
**Learning:** Static upload placeholders in dApps often lack keyboard accessibility and clear visual feedback for drag-and-drop actions. Transforming them into functional components with ARIA roles and keyboard support significantly improves the trust and usability of decentralized reporting tools.
**Action:** Implement `role="button"`, `tabindex="0"`, and keyboard event handlers (Enter/Space) for custom upload containers, and provide visual state changes during `dragover` and `drop` operations.
