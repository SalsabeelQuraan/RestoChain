## 2026-05-15 - Securely Displaying User Filenames
**Learning:** Directly injecting user-provided data like filenames into the DOM via `innerHTML` creates an XSS vulnerability, as filenames can contain malicious script tags.
**Action:** Always use `textContent` or `document.createElement` with `append` when displaying user-controlled data in the UI.
