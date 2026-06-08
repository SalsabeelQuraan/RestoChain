## 2024-05-15 - Accessible Custom Interactive Elements
**Learning:** Custom 'upload zone' divs styled as buttons often lack keyboard accessibility and focus indicators in this project.
**Action:** Always add `tabindex="0"`, `role="button"`, `aria-label`, and an `onkeydown` handler for Enter/Space, along with Tailwind `focus-visible` rings to these elements.
