
## 2026-06-02 - [Accessible File Upload Pattern]
**Learning:** Transforming static upload zones into functional components requires explicit ARIA roles (button), tab indexing, and keyboard event handlers (Enter/Space) to meet accessibility standards. Rendering file names with textContent instead of innerHTML is a critical security pattern to prevent self-XSS from malicious file names.
**Action:** Always implement role="button" and keydown handlers for custom interactive zones, and use secure DOM manipulation for user-controlled strings.
