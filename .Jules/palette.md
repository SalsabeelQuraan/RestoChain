## 2024-05-22 - [Accessible Custom Upload Zones]
**Learning:** Custom interactive elements (like div-based upload zones) must be explicitly made accessible by adding `tabindex="0"`, `role="button"`, and `aria-label`. They also require keyboard event listeners for 'Enter' and 'Space' to match standard button behavior.
**Action:** Always apply the accessibility triad (role, tabindex, label) and keyboard listeners to non-semantic interactive components.
