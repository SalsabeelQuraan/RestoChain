## 2025-05-15 - [Functional File Upload Pattern]
**Learning:** Transforming static placeholders into functional components (like file uploads) provides immediate visual feedback and improves usability. When rendering user-controlled content like filenames in the UI, use `textContent` or `document.createElement` instead of `innerHTML` to mitigate 'self-XSS' vulnerabilities.
**Action:** Apply this pattern when bringing static UI mockups to life, ensuring accessibility (roles, ARIA) and security are baked into the interactivity.
