import { Component, OnInit } from '@angular/core';
import { RoomInfo, RoomManagement } from './rooms';

@Component({
  selector: 'hotel-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';

  roomManage: RoomManagement = {
    totalRoom: 20,
    availableRoom: 5,
    bookedRoom: 15,
  };

  roomList: RoomInfo[] = [];

  ngOnInit(): void {
    this.roomList = [
      {
        roomId: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
        price: 500,
        photos: 'https://picsum.photos/200',
        checkinTime: new Date('2023/05/28'),
        checkoutTime: new Date('2023/05/30'),
      },
      {
        roomId: 2,
        roomType: 'Regular Room',
        amenities: 'Free Wifi, TV, Bathroom',
        price: 300,
        photos: 'https://picsum.photos/200',
        checkinTime: new Date('2023/05/30'),
        checkoutTime: new Date('2023/06/02'),
      },
      {
        roomId: 3,
        roomType: 'Regular Room',
        amenities: 'Free Wifi, TV, Bathroom',
        price: 300,
        photos: 'https://picsum.photos/200',
        checkinTime: new Date('2023/06/04'),
        checkoutTime: new Date('2023/06/10'),
      },
    ];
  }

  bookRoom() {
    const availableRoom = this.roomManage.availableRoom - 1;
    const bookedRoom = this.roomManage.totalRoom - availableRoom;
    this.roomManage = { ...this.roomManage, availableRoom, bookedRoom };
  }
  unbookRoom() {
    const availableRoom = this.roomManage.availableRoom + 1;
    const bookedRoom = this.roomManage.totalRoom - availableRoom;
    this.roomManage = { ...this.roomManage, availableRoom, bookedRoom };
  }
}
