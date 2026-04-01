## 2024-04-01 - Accessible Custom File Upload with Feedback
**Learning:** In projects using Tailwind CSS without a dedicated UI library, an accessible custom file upload can be built using a styled `<label>` (with `role="button"` and `tabindex="0"`) linked to a hidden `<input type="file" class="sr-only">`. Providing immediate feedback via a `role="status"` element that displays selected filenames significantly improves the UX compared to the default "No file chosen" browser behavior.
**Action:** Use the `label` + `sr-only input` pattern for custom file uploads, ensuring keyboard listeners (Enter/Space) are added to the label for full accessibility.

## 2024-04-01 - Simulated Blockchain Transaction Feedback
**Learning:** For Web3-related interactions (like "signing" or "submitting to blockchain"), users expect a multi-stage feedback process. Transitioning a button from an idle state to a "Processing..." state (with a spinner) and finally to a "Success" state (with a change in color and icon) provides a sense of security and confirmation for what can be an abstract action.
**Action:** Implement visual state transitions (Idle -> Processing -> Success) for all simulated or real async actions to keep users informed of the application's progress.
