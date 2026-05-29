## 2026-05-29 - [Dark Mode Persistence & Accessibility]
**Learning:** In static HTML projects, theme persistence requires both a head script to prevent FOUC (Flash of Unstyled Content) and a body script for interaction. Dual-icon approach with Tailwind's `dark:` classes is the most robust way to provide immediate visual feedback.
**Action:** Use a dedicated initialization script in `<head>` and a toggle listener in a script at the end of `<body>` for all future theme-related tasks.
