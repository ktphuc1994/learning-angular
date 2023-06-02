import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RoomInfo, RoomManagement } from './rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'hotel-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss'],
})
export class GeneralInfoComponent
  implements OnInit, AfterViewInit, AfterViewChecked
{
  hotelName = 'Hilton Hotel';
  roomTitle = 'Room List';
  roomManage: RoomManagement = {
    totalRoom: 20,
    availableRoom: 5,
    bookedRoom: 15,
  };

  roomList: RoomInfo[] = [];
  selectedRoom: RoomInfo | null = null;

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  ngOnInit(): void {
    this.roomList = [
      {
        roomId: 'id1',
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
        price: 500,
        photos: 'https://picsum.photos/200',
        checkinTime: new Date('2023/05/28'),
        checkoutTime: new Date('2023/05/30'),
      },
      {
        roomId: 'id2',
        roomType: 'Regular Room',
        amenities: 'Free Wifi, TV, Bathroom',
        price: 300,
        photos: 'https://picsum.photos/200',
        checkinTime: new Date('2023/05/30'),
        checkoutTime: new Date('2023/06/02'),
      },
      {
        roomId: 'id3',
        roomType: 'Regular Room',
        amenities: 'Free Wifi, TV, Bathroom',
        price: 300,
        photos: 'https://picsum.photos/200',
        checkinTime: new Date('2023/06/04'),
        checkoutTime: new Date('2023/06/10'),
      },
    ];
  }

  ngAfterViewInit(): void {
    this.headerComponent.headerTitle = 'Hotel California';
  }
  ngAfterViewChecked(): void {}

  bookRoom() {
    if (this.roomManage.availableRoom === 0) return;
    this.roomManage.availableRoom--;
    this.roomManage.bookedRoom++;
  }
  unbookRoom() {
    if (this.roomManage.bookedRoom === 0) return;
    this.roomManage.availableRoom++;
    this.roomManage.bookedRoom--;
  }
  addRoom() {
    const room: RoomInfo = {
      roomId: 'id' + Date.now(),
      roomType: 'Regular Deluxe',
      amenities: 'TV, Yard',
      price: 200,
      photos: 'https://picsum.photos/200',
      checkinTime: new Date('2023/06/12'),
      checkoutTime: new Date('2023/06/15'),
    };
    this.roomList = [...this.roomList, room];
  }
  deleteRoom(roomId: string) {
    const deleteIndex = this.roomList.findIndex(
      (room) => room.roomId === roomId
    );
    const newRoomList = [...this.roomList];
    newRoomList.splice(deleteIndex, 1);
    this.roomList = newRoomList;
  }
  selectRoom(room: RoomInfo) {
    this.selectedRoom = room;
  }
  clearSelectedRoom() {
    this.selectedRoom = null;
  }
}
