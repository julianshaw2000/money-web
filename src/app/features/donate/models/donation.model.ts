export type Frequency = 'one_time' | 'monthly';
export interface DonationIntent {
  email: string;
  amountMinor: number; // stored in pence
  currency: 'GBP';
  frequency: Frequency;
  message?: string;
}
