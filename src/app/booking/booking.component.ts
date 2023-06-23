import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';
import { BookingService } from './booking.service';
import { exhaustMap, mergeMap } from 'rxjs';
import { CustomValidator } from './validators/custom-validator';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'hotel-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  canLeaveRoute = false;
  bookingForm!: FormGroup;
  roomId = this.route.snapshot.paramMap.get('roomId');

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
    private bookingService: BookingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bookingForm = new FormGroup(
      {
        roomId: new FormControl(
          { value: this.roomId, disabled: true },
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
        checkinDate: new FormControl('', [Validators.required]),
        checkoutDate: new FormControl('', [Validators.required]),
        bookingDate: new FormControl(''),
        address: this.addressGroup,
        guests: this.formBuilder.array([this.guestGroup]),
        tnc: new FormControl(false, [Validators.requiredTrue]),
      },
      { updateOn: 'blur', validators: [CustomValidator.validateCheckAll] }
    );
    this.getBookingDate();
    this.bookingForm.valueChanges
      .pipe(exhaustMap((data) => this.bookingService.bookRoom(data)))
      .subscribe((value) => {
        console.log(value);
      });
  }

  canDeactivate(forceDeactivate: boolean = false, nextRoute?: string) {
    if (this.bookingForm.pristine || this.canLeaveRoute) return true;
    if (forceDeactivate) {
      this.canLeaveRoute = true;
      if (nextRoute) this.router.navigate([nextRoute]);
      return true;
    }
    return false;
  }

  getBookingDate() {
    this.bookingForm.patchValue({
      guestName: 'Khuc Thien Phuctest',
      guestEmail: 'test@gmail.com',
      mobileNumber: '0123456789',
      // bookingAmount: '',
      bookingStatus: 'booked',
      bookingDate: '',
      address: {
        addressLine1: '123',
        // addressLine2: '',
        city: 'District 1',
        state: 'HCM',
        country: '',
        zipCode: '',
      },
      guests: [
        {
          guestName: 'Phuc',
          age: '',
        },
      ],
      tnc: false,
    });
  }

  addBooking() {
    this.bookingForm.reset({
      roomId: this.roomId,
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
