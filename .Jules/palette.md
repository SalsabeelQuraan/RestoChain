# Palette's Journal - RestoChain

## 2024-05-15 - Initial UX Audit
**Learning:** The application has several static placeholders for interactive elements, such as the "Report Food Poisoning" button and the file upload container. Users expect these to be functional.
**Action:** Focus on transforming these static elements into accessible, functional components with proper feedback.

## 2025-05-14 - Blockchain Transaction Feedback Pattern
**Learning:** Blockchain transactions are not instantaneous. Providing immediate visual feedback (disabling buttons, "Submitting..." states) and clear success confirmation (TxHash visibility) significantly reduces user anxiety during the wait.
**Action:** Always implement a three-state transition for blockchain buttons: Idle -> Submitting (disabled) -> Success (with transaction details).
