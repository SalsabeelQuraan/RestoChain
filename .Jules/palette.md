## 2024-05-20 - Accessible Custom File Upload
**Learning:** Custom-styled file upload areas (labels wrapping hidden inputs) should have `tabindex="0"` on the label for keyboard focus, but the hidden input itself should have `tabindex="-1"` to prevent redundant tab stops.
**Action:** Always include `tabindex="-1"` on hidden inputs associated with accessible custom labels and implement keydown listeners for 'Enter' and 'Space' on the container.
