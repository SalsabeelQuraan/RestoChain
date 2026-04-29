## 2024-04-29 - Interactive Upload Feedback
**Learning:** Transforming a static placeholder into a functional UI component requires balancing visual cues with accessibility. Using a focusable container (`role="button"`, `tabindex="0"`) linked to a hidden input ensures keyboard users can interact with the upload feature, while `pointer-events-none` on children prevents annoying click-bubbling issues.
**Action:** Always provide immediate visual feedback (like a file list) when an action like file selection occurs, even in a mock environment, to confirm the system state to the user.
