## 2024-05-23 - Accessible Custom File Upload Pattern
**Learning:** For custom-styled file uploads in static HTML, using a `<label>` as the primary interactive container (with `role="button"`, `tabindex="0"`, and `aria-label`) linked to a hidden `<input type="file" tabindex="-1">` ensures both visual flexibility and full accessibility (screen readers and keyboard navigation).
**Action:** Always implement `keydown` listeners for 'Enter' and 'Space' on the label to trigger the input, and use `focus-within:ring-2` on the label for visible focus states.
