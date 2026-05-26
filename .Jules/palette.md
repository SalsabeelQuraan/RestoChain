## 2025-05-14 - [Upload Zone Feedback]
**Learning:** When implementing custom drag-and-drop zones, visual feedback like border color changes must be explicitly reset on `dragleave` and `drop` events to avoid "stuck" visual states. Additionally, when using Tailwind utility classes dynamically in JS, original conflicting classes (like background colors) must be removed to ensure the new state is correctly rendered.
**Action:** Always include cleanup logic in event listeners for transient UI states and explicitly remove conflicting Tailwind classes.

## 2025-05-14 - [Tailwind Purge Protection]
**Learning:** In projects using Tailwind CSS (especially via CDN or build systems with purging), classes added exclusively via JavaScript may not be included in the final CSS if they don't appear in the HTML source.
**Action:** Include dynamic classes in a hidden HTML element to ensure they are preserved.
