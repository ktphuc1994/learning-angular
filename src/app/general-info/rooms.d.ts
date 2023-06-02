export interface RoomManagement {
  totalRoom: number;
  availableRoom: number;
  bookedRoom: number;
}

export interface RoomInfo {
  roomId: string;
  roomType: string;
  amenities: string;
  price: number;
  photos: string;
  checkinTime: Date;
  checkoutTime: Date;
}
