# Palette's Journal

## 2025-05-14 - [Dark Mode Persistence and Preferences]
**Learning:** Implementing dark mode by blindly adding a 'dark' class to the document element ignores user system preferences and previous choices, potentially causing visual flashes or a poor user experience.
**Action:** When implementing theme toggles, check for `(window.matchMedia('(prefers-color-scheme: dark)').matches)` and use `localStorage` to persist the user's choice.
