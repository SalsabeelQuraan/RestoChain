# Palette's Journal - Critical UX & Accessibility Learnings

## 2024-05-15 - Interactive JavaScript Initialization
**Learning:** In static HTML projects lacking a build step, interactive JavaScript logic must be wrapped in `document.addEventListener('DOMContentLoaded', ...)` to ensure DOM elements are fully loaded before interaction.
**Action:** Always wrap interactive JS in `DOMContentLoaded` listeners.

## 2024-05-16 - Accessible Custom File Uploads
**Learning:** Accessible file upload containers require a `<label>` linked to a hidden `<input type='file'>` via `id`/`for`, with `role='button'`, `tabindex='0'`, and explicit keyboard listeners for 'Enter' and 'Space'.
**Action:** Use the label-input pattern with keyboard listeners for custom file uploads.

## 2024-05-17 - Form Data Persistence
**Learning:** Always include the 'name' attribute on `<input>` and `<textarea>` elements to ensure data is correctly included in the form payload for server recognition.
**Action:** Ensure all form inputs have a 'name' attribute.
