import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';
import { BookingService } from './booking.service';
import { mergeMap } from 'rxjs';
import { CustomValidator } from './validators/custom-validator';

@Component({
  selector: 'hotel-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }
  get guestGroup() {
    return this.formBuilder.group({
      guestName: new FormControl('', { validators: [Validators.required] }),
      age: new FormControl(''),
    });
  }
  get addressGroup() {
    return this.formBuilder.group({
      addressLine1: ['', [Validators.required]],
      addressLine2: [''],
      city: ['', [Validators.required]],
      state: ['', Validators.required],
      country: [''],
      zipCode: [''],
    });
  }

  constructor(
    private formBuilder: FormBuilder,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    this.bookingForm = new FormGroup(
      {
        roomId: new FormControl(
          { value: '2', disabled: true },
          { validators: [Validators.required] }
        ),
        guestName: new FormControl('', {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.minLength(5),
            CustomValidator.validateSpecialChar('test'),
          ],
        }),
        guestEmail: new FormControl('', [
          Validators.required,
          Validators.email,
        ]),
        mobileNumber: new FormControl('', { updateOn: 'blur' }),
        bookingAmount: new FormControl(''),
        bookingStatus: new FormControl(''),
        checkinDate: new FormControl(''),
        checkoutDate: new FormControl(''),
        bookingDate: new FormControl(''),
        address: this.addressGroup,
        guests: this.formBuilder.array([this.guestGroup]),
        tnc: new FormControl(false, [Validators.requiredTrue]),
      },
      { updateOn: 'blur', validators: [CustomValidator.validateCheckAll] }
    );
    this.getBookingDate();
    this.bookingForm.valueChanges
      .pipe(mergeMap((data) => this.bookingService.bookRoom(data)))
      .subscribe((value) => {
        console.log(value);
      });
  }

  getBookingDate() {
    this.bookingForm.patchValue({
      roomId: '2',
      guestName: 'Khuc Thien Phuc',
      guestEmail: 'test@gmail.com',
      mobileNumber: '0123456789',
      // bookingAmount: '',
      bookingStatus: 'booked',
      checkinDate: new Date(),
      checkoutDate: new Date(new Date().setDate(new Date().getDate() + 1)),
      bookingDate: '',
      address: {
        // addressLine1: '',
        addressLine2: '123',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      guests: [
        {
          guestName: '',
          age: '',
        },
      ],
      tnc: false,
    });
  }

  addBooking() {
    console.log(this.bookingForm.value);
    this.bookingForm.reset({
      roomId: '2',
      guestName: '',
      guestEmail: '',
      mobileNumber: '',
      bookingAmount: '',
      bookingStatus: '',
      checkinDate: '',
      checkoutDate: '',
      bookingDate: '',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      guests: [
        {
          guestName: '',
          age: '',
        },
      ],
      tnc: false,
    });
  }

  addGuest() {
    this.guests.push(this.guestGroup);
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  deleteControl(control: string) {
    this.bookingForm.removeControl(control);
  }

  removeGuest(index: number) {
    this.guests.removeAt(index);
  }
}
