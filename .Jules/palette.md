## 2024-05-31 - Accessible File Upload Feedback
**Learning:** For custom file upload components that dynamically render a list of selected files, using `aria-live="polite"` on the list container ensures that screen reader users are immediately notified of successful file additions without interrupting their current flow.
**Action:** Always include an `aria-live` attribute on containers for dynamic status updates or list additions to provide inclusive feedback.
