## 2024-05-20 - Accessible File Upload Component
**Learning:** For custom file upload areas, using a <label> with a 'for' attribute linked to a hidden <input type="file"> ensures native mouse click support and accessibility. Adding role="button" and tabindex="0" with keyboard listeners (Enter/Space) makes the component fully keyboard-navigable.
**Action:** Always link custom upload containers to hidden inputs via 'for'/'id' and implement keyboard listeners for a consistent experience.
