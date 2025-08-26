You are GitHub Copilot. Create a **donation flow feature**.

Files (with implementations):

/src/app/features/donate/
donate.routes.ts
donate.page.ts
donate.page.scss
donate.service.ts
models/donation.model.ts

Details:
- Route: `/donate` → `DonatePageComponent`.
- `DonationModel`: 
  ```ts
  export type Frequency = 'one_time' | 'monthly';
  export interface DonationIntent {
    email: string;
    amountMinor: number; // stored in pence
    currency: 'GBP';
    frequency: Frequency;
    message?: string;
  }
