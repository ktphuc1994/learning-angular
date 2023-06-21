export class Booking {
  roomId: string;
  guestName: string;
  guestEmail: string;
  mobileNumber: string;
  bookingAmount: number;
  bookingStatus: string;
  checkinDate: Date;
  checkoutDate: Date;
  bookingDate: Date;
  address: {
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
  guests: { guestName: string; age: string }[];
  tnc: boolean;
}
