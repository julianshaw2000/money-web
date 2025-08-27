import { Component, OnInit, computed, signal, effect } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, NonNullableFormBuilder } from '@angular/forms';
import { DonateActionService } from '../donateaction/donateaction.service';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { FormControl } from '@angular/forms';

type PaymentForm = {
  email: FormControl<string>;
  name: FormControl<string>;
  amount: FormControl<number | null>;
};

@Component({
  selector: 'app-payment',
  standalone: true,
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class PaymentComponent implements OnInit {
  // Optional signal you can bind to a live counter/hint, etc.
  submitting = signal(false);

  fb = new FormBuilder();

  form = this.fb.group<PaymentForm>({
    email: this.fb.control('', { validators: [Validators.required, Validators.email], nonNullable: true }),
    name: this.fb.control('', { validators: [Validators.required], nonNullable: true }),
    amount: this.fb.control<number | null>(null, [Validators.required, Validators.min(1)]),
  });

  isDisabled = computed(() => this.submitting() || this.form.invalid);

  constructor(
    private donateActionService: DonateActionService,
  ) {
    // Use effect to react to signal changes (Angular v16+ best practice)
    effect(() => {
      const data = this.donateActionService.donationData();
      if (data) {
        this.form.patchValue({
          email: data.email ?? '',
          name: data.name ?? '',
          amount: data.amount ?? null,
        });
      }
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting.set(true);
    const payload = this.form.getRawValue();

    // Persist/update in your feature service. Replace with your real call (e.g. backend/Stripe PI).
    try {
      // Ensure amount is a number (not null) before passing to setDonationData
      if (payload.amount === null) {
        throw new Error('Amount must not be null');
      }
      this.donateActionService.setDonationData?.({
        ...payload,
        amount: payload.amount
      });
      // TODO: navigate or show success UI
      console.log('Submitting payment form', payload);
    } finally {
      this.submitting.set(false);
    }
  }
}
