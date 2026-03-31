## 2025-05-14 - Blockchain Submission Feedback
**Learning:** Users often feel uncertain during "hidden" asynchronous processes like blockchain transaction signing; providing immediate visual feedback with a spinning icon and a subsequent success state significantly reduces perceived latency and prevents duplicate submissions.
**Action:** Always implement a multi-state (Idle, Processing, Success) pattern for critical async actions, ensuring the button is disabled during processing and provides clear visual/ARIA feedback upon completion.
