import { AbstractControl, FormGroup } from '@angular/forms';
import { Booking } from '../dto/booking';

export class CustomValidator {
  static validateName(control: AbstractControl<string>) {
    if (control.value && control.value.includes('test')) {
      return {
        invalidName: true,
      };
    }
    return null;
  }

  static validateSpecialChar(char: string) {
    return (control: AbstractControl<string>) => {
      const value = control.value;
      if (value.includes(char)) {
        return {
          invalidSpecialChar: true,
        };
      }
      return null;
    };
  }

  static validateCheckAll(control: AbstractControl<Booking>) {
    const checkinDate = new Date(control.value.checkinDate);
    const checkoutDate = new Date(control.value.checkoutDate);
    if (checkinDate > checkoutDate) {
      control.get('checkoutDate')?.setErrors({ invalidDate: true });
      control.get('checkinDate')?.setErrors({ invalidDate: true });
    } else {
      control.get('checkoutDate')?.setErrors(null);
      control.get('checkinDate')?.setErrors(null);
    }
    return null;
  }
}
