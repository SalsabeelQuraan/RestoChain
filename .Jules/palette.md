## 2024-05-15 - Enhancing Accessibility for Custom Interactive Elements

**Learning:** Static HTML projects often use `div` elements for complex interactive zones (like upload areas) which are inaccessible to keyboard and screen reader users by default.

**Action:** Always provide `role="button"`, `tabindex="0"`, and an explicit `aria-label`. Implement an `onkeydown` handler to support 'Enter' and 'Space' keys to ensure these elements meet basic WCAG accessibility standards.
