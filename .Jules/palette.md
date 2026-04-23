# Palette's Journal - Critical Learnings

## 2025-04-23 - Clean Repository Hygiene
**Learning:** Committing binary verification artifacts (screenshots, videos) and temporary scripts to the repository is a major professional error that bloats the repo and clutters the source tree.
**Action:** Always delete the `verification/` directory and all temporary artifacts before calling `submit`.

## 2025-04-23 - Form Accessibility Fundamentals
**Learning:** Static HTML pages often lack basic accessibility features like linked labels and `name` attributes, which are essential for screen readers and browser form handling.
**Action:** Prioritize linking `<label>` elements to inputs using `for` and `id` attributes and ensuring all interactive fields have descriptive `name` attributes.
