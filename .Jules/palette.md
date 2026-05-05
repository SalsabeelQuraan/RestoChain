## 2024-05-20 - Blockchain Transaction Feedback Pattern
**Learning:** In decentralized apps, users often feel anxious during the "waiting for confirmation" phase. Providing immediate visual feedback (button disabling, loading state) followed by a persistent, accessible success state with transaction details (Block #, TxHash) significantly improves perceived trust and system transparency.
**Action:** Always implement a three-state (Idle -> Pending -> Confirmed) interaction pattern for blockchain-related actions, ensuring the final state is announced via `aria-live="polite"`.

## 2024-05-20 - Accessible Form Association
**Learning:** Static HTML prototypes often omit the critical link between `<label>` and `<input>` via `for`/`id` attributes, which breaks the ability to focus inputs by clicking their labels and hinders screen readers.
**Action:** When auditing forms, prioritize linking labels to inputs to improve click targets and screen reader navigation as a fundamental accessibility win.
