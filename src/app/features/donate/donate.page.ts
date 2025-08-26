import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '../../shared-material.module';
import { DonateService } from './donate.service';
import { DonationIntent, Frequency } from './models/donation.model';

@Component({
    selector: 'app-donate-page',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, SharedMaterialModule],
    templateUrl: './donate.page.html',
    styleUrls: ['./donate.page.scss'],
})
export class DonatePageComponent {
    private fb = inject(FormBuilder);
    private donateService = inject(DonateService);

    frequencies: Frequency[] = ['one_time', 'monthly'];

    form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        amount: [null, [Validators.required, Validators.min(1)]],
        frequency: ['one_time' as Frequency, Validators.required],
        message: [''],
    });

    submitting = signal(false);
    lastDonation = this.donateService.lastDonation;

    submit() {
        if (this.form.invalid) return;
        this.submitting.set(true);
        const value = this.form.value;
        const intent: DonationIntent = {
            email: value.email!,
            amountMinor: Math.round(Number(value.amount) * 100),
            currency: 'GBP',
            frequency: value.frequency!,
            message: value.message || undefined,
        };
        this.donateService.donate(intent);
        setTimeout(() => this.submitting.set(false), 1000); // Simulate async
        this.form.reset({ frequency: 'one_time' });
    }
}
