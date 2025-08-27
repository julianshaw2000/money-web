import { Injectable, signal } from '@angular/core';

export interface DonationFormData {
    email: string;
    name: string;
    amount: number;
}

@Injectable({ providedIn: 'root' })
export class DonateActionService {
    donationData = signal<DonationFormData | null>(null);

    setDonationData(data: DonationFormData) {
        this.donationData.set(data);
    }

    clearDonationData() {
        this.donationData.set(null);
    }
}
