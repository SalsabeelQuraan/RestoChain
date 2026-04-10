## 2025-05-14 - Accessible File Uploads with Keyboard Support
**Learning:** Custom styled file upload areas often use a `div` that lacks native accessibility. Converting these to a `label` wrapping a hidden `input` and adding `role="button"`, `tabindex="0"`, and keydown listeners for 'Enter'/'Space' provides a fully accessible experience for both screen reader and keyboard users.
**Action:** Always use a label-wrapped hidden input pattern for custom uploads, ensure focus states are visible (e.g., `focus-within:ring-2`), and implement keyboard triggers for the input.
