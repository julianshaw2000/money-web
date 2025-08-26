import { Injectable } from '@angular/core';
import { DonationIntent } from './models/donation.model';
import { Signal, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DonateService {
    private _lastDonation = signal<DonationIntent | null>(null);
    lastDonation: Signal<DonationIntent | null> = this._lastDonation;

    donate(intent: DonationIntent) {
        // Here you would call an API. For now, just store the intent.
        this._lastDonation.set(intent);
    }
}
