## 2024-04-08 - Accessible and Interactive Form Patterns
**Learning:** In projects using the Tailwind CDN, dynamically added classes (e.g., via JavaScript) will not be rendered unless they are already present in the static HTML. Additionally, making non-interactive elements like labels focusable via `tabindex="0"` requires explicit keydown listeners for keyboard accessibility.
**Action:** Always include a hidden div with any dynamic Tailwind classes used in scripts, and implement Enter/Space key listeners for custom focusable elements.
