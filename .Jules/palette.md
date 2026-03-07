## 2024-03-22 - [Accessibility & Navigation Polish]
**Learning:** Nesting interactive elements like `<button>` inside `<a>` tags is invalid HTML and can confuse assistive technologies. Also, icon-only buttons MUST have an `aria-label` to be accessible to screen readers.
**Action:** Always use styled `<a>` tags for navigation between pages and ensure all icon-only buttons include descriptive ARIA labels.

**Learning:** Custom interactive elements (like an upload zone `div`) made focusable via `tabindex="0"` require explicit `keydown` listeners for 'Enter' and 'Space' to meet WCAG standards for keyboard accessibility.
**Action:** When creating custom focusable elements, always implement both click and keyboard event handlers.
