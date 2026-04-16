## 2024-04-16 - Accessible Custom File Uploads
**Learning:** Standardizing a pattern for custom-styled file upload containers: use a keyboard-focusable (`tabindex="0"`) label acting as a wrapper for a hidden (`sr-only`, `tabindex="-1"`) input, and provide an ARIA-live (`role="status"`) element for feedback.
**Action:** Always include keyboard listeners (Enter/Space) on the custom label to programmatically trigger the hidden input, ensuring full parity with native button behavior.
