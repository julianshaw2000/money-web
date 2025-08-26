import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Permissive RFC-like email validator: allows +, subdomains, etc.
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function emailTolerantValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        if (!value) return null;
        if (!EMAIL_REGEX.test(value)) {
            return {
                emailTolerant: {
                    message: 'Please enter a valid email address (e.g. user+test@sub.domain.com)',
                },
            };
        }
        return null;
    };
}
