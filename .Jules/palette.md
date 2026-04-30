## 2025-05-15 - Copy-to-Clipboard with Feedback
**Learning:** Providing immediate visual feedback for non-obvious background actions (like copying to clipboard) significantly improves perceived system responsiveness and user confidence.
**Action:** Always implement a success state (e.g., icon change to 'check') for at least 1.5-2 seconds after a copy action.

## 2025-05-15 - Semantic Navigation
**Learning:** Interactive elements that lead to a new page should be implemented as semantic '<a>' tags rather than '<button>' elements to preserve native browser behaviors like "Open in new tab".
**Action:** Use '<a>' tags with appropriate styling for navigation, even if they visually resemble buttons.
