 **Stage 3 – Validators & Shared UI**

```text
You are GitHub Copilot. Create reusable validators and UI components.

Files:
/src/app/shared/validators/amount-minor.validator.ts
/src/app/shared/validators/email-tolerant.validator.ts
/src/app/shared/ui/amount-chips/amount-chips.component.ts

markdown
Copy
Edit

Details:
- `amount-minor.validator`: ensure positive integer within range (100–1,000,000 pence).
- `email-tolerant.validator`: permissive RFC-like, allow `+`, subdomains, with clear error messages.
- `amount-chips.component.ts`: Angular Material chips with suggested amounts; emit selected value or “custom”.
