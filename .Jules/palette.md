## 2025-05-14 - Accessible File Upload with Drag & Drop
**Learning:** Transforming a static placeholder into an accessible file upload requires linking a hidden input, adding ARIA roles/tabindex, and providing clear visual feedback during drag events. Using 'replaceChildren' with 'textContent' ensures safe and efficient DOM updates for file lists.
**Action:** Always implement 'role="button"' and 'tabindex="0"' on custom upload containers, and handle both click and keyboard (Enter/Space) events.
