## 2024-05-15 - Accessible File Upload Pattern
**Learning:** In a Tailwind-based static HTML environment, an accessible file upload can be implemented by wrapping a hidden input in a label that acts as the visual container. This requires `role="button"`, `tabindex="0"`, and `focus-within:ring-2` for full accessibility.
**Action:** Use the `<label role="button" tabindex="0"> + <input type="file" class="sr-only">` pattern for custom file upload areas, ensuring JavaScript handles keyboard (Enter/Space) and file change events.
