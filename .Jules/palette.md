## 2026-06-12 - Multi-state Blockchain Submission Button
**Learning:** In decentralized apps, users often face latency during transaction signing and mining. Providing immediate visual feedback via button state transitions (Sign -> Signing... -> Success) significantly improves perceived performance and reduces duplicate submission attempts.
**Action:** Use a JavaScript IIFE to manage button states, targeting text nodes specifically to preserve icon markup, and apply 'aria-busy' for screen reader accessibility.
