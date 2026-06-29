## 2025-05-14 - Accessible Custom Interactive Elements
**Learning:** In static HTML projects using Tailwind, custom interactive elements (like <div>-based upload zones) require specific attributes and listeners to meet accessibility standards.
**Action:** Always include `tabindex="0"`, `role="button"`, and `aria-label` on the HTML element, and implement both `click` and `keydown` (Enter/Space) listeners in JavaScript to ensure full keyboard parity with native buttons.
