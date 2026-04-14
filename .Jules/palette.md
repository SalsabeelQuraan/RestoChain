## 2024-05-24 - Accessible File Upload Pattern
**Learning:** Standard `<input type="file">` is difficult to style, but common custom implementations often break accessibility. A robust pattern uses a hidden input (`tabindex="-1"`) linked to a keyboard-focusable `<label>` (`tabindex="0"`, `role="button"`) via `id`/`for`.
**Action:** Use this pattern for all custom file uploaders to ensure both visual flexibility and full keyboard/screen reader support.
