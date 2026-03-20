## 2024-10-27 - Form Label Association
**Learning:** Found that several key form fields in `submit.html` (Order Number, Date & Time, Case Description) lacked explicit programmatic association between labels and inputs, which degrades accessibility for screen readers and reduces the clickable area for all users.
**Action:** Always check for `id`/`for` attributes on form fields in this repository and implement them to improve navigation and accessibility.
