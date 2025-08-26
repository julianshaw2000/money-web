import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function amountMinorValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value == null || value === '') return null;
    if (!Number.isInteger(value) || value < 100 || value > 1_000_000) {
      return {
        amountMinor: {
          requiredRange: '100–1,000,000',
          actual: value,
          message: 'Amount must be a positive integer between £1.00 and £10,000.00',
        },
      };
    }
    return null;
  };
}
