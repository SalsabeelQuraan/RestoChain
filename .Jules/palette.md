# Palette's Journal

## 2026-04-28 - Initializing Palette for RestoChain
**Learning:** The project uses Tailwind CSS and Material Symbols. Many interactive elements are currently placeholders (static divs or buttons without handlers).
**Action:** Focus on making these placeholders functional and accessible, starting with the report submission form.

## 2026-04-28 - Enhanced Blockchain Submission Feedback
**Learning:** Adding 'aria-live="polite"' and 'role="status"' to transaction status boxes ensures that screen reader users receive immediate feedback when a transaction state changes (e.g., from 'pending' to 'success'), which is critical for UX in asynchronous blockchain operations.
**Action:** Always include ARIA live regions for elements that update dynamically to reflect operation status or transaction results.
