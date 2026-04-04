## 2024-05-23 - [Accessible File Upload Pattern]
**Learning:** Using a `<label>` as a container for a hidden `<input type="file">` allows for fully custom, accessible file upload areas without sacrificing screen reader support or keyboard navigation.
**Action:** Always include `role="button"`, `tabindex="0"`, and keydown listeners ('Enter'/'Space') on the container label, and `tabindex="-1"` on the hidden input to avoid redundant tab stops.
