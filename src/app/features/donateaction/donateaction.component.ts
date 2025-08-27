import { Component, OnInit } from '@angular/core';
import { SharedMaterialModule } from '../../shared-material.module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DonateActionService } from './donateaction.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-donateaction',
  templateUrl: './donateaction.component.html',
  styleUrls: ['./donateaction.component.scss'],
  imports: [SharedMaterialModule, ReactiveFormsModule, RouterModule]
})
export class DonateactionComponent implements OnInit {
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // Use signal to send data to payment
    this.donateActionService.setDonationData(this.form.value);
    // Optionally navigate to payment page
    this.router.navigate(['/payment']);
  }

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private donateActionService: DonateActionService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      amount: [null, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit() {
  }

}
