## 2025-05-14 - Interactive Form Feedback & Accessibility
**Learning:** Even in small, static HTML micro-interactions, avoiding `innerHTML` for user-provided data (like filenames) is critical to prevent XSS patterns. Additionally, dynamically added success messages should use `role="status"` for screen reader visibility.
**Action:** Use `textContent` on target spans and include ARIA live roles for all dynamic UI feedback.
