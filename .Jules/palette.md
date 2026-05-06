## 2024-05-14 - Interactive Blockchain Submission Feedback
**Learning:** For decentralized applications, providing immediate visual feedback for "signing" and "mining" states significantly improves the perceived reliability of the UI.
**Action:** Always implement loading states and success/error feedback for blockchain-adjacent actions, using ARIA live regions for accessibility.

## 2024-05-14 - Accessible Custom File Uploads
**Learning:** Transforming a static "drag and drop" div into an accessible button requires `role="button"`, `tabindex="0"`, and `keydown` handlers for Enter/Space to match user expectations.
**Action:** When creating custom interactive containers, ensure they are keyboard focusable and respond to standard activation keys.

## 2024-05-14 - Event Bubbling in Custom Components
**Learning:** Triggering a child's click event from a parent's click handler can cause infinite recursion if the child is still within the parent's DOM tree.
**Action:** Move trigger targets (like hidden file inputs) outside the interactive container to avoid event bubbling loops.
