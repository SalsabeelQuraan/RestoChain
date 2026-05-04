## 2024-05-20 - [Accessible Blockchain Interactions]
**Learning:** Micro-UX enhancements like adding `aria-live` to transaction status updates and `role="button"` with keyboard support to custom upload containers significantly improve accessibility for assistive technologies.
**Action:** Always include `aria-live="polite"` for dynamic blockchain feedback and ensure custom interactive containers have `tabindex="0"` and handle `Enter`/`Space` keys.

## 2024-05-20 - [Safe File Upload Display]
**Learning:** Using `textContent` when displaying uploaded filenames prevents DOM XSS vulnerabilities compared to `innerHTML`.
**Action:** Use `textContent` or `display.replaceChildren()` when rendering user-provided data like file lists.
