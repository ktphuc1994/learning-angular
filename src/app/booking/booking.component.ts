import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'hotel-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;
  addressOpen = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const addressGroup = this.formBuilder.group({
      addressLine1: [''],
      addressLine2: [''],
      city: [''],
      state: [''],
      country: [''],
      zipCode: [''],
    });
    this.bookingForm = this.formBuilder.group({
      roomId: new FormControl({ value: '2', disabled: true }),
      guestName: [''],
      guestEmail: [''],
      mobileNumber: [''],
      bookingAmount: [''],
      bookingStatus: [''],
      checkinDate: [''],
      checkoutDate: [''],
      bookingDate: [''],
      address: addressGroup,
      guestCount: [''],
    });
  }

  addBooking() {
    console.log(this.bookingForm.value);
  }
}
