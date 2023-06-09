import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';

// import types and interfaces
import { RoomInfo, RoomManagement } from './rooms';

// import local components
import { HeaderComponent } from '../header/header.component';

// import local services
import { GeneralInfoService } from './services/general-info.service';
import { FormControl } from '@angular/forms';

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

  nowDate = new Date();
  roomsList = this.generalInfoService.roomsList;
  selectedRoom: RoomInfo | null = null;

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  constructor(private generalInfoService: GeneralInfoService) {}

  ngOnInit(): void {
    this.getRoomsList();
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

  priceFilter = new FormControl(0);

  getRoomsList = () => {
    this.generalInfoService.getRoomsList();
  };
  addRoom() {
    const room: Omit<RoomInfo, 'roomId'> = {
      roomType: 'Regular Deluxe',
      amenities: 'TV, Yard',
      price: '200',
      photos: 'https://picsum.photos/200',
      checkinTime: new Date('2023/06/12'),
      checkoutTime: new Date('2023/06/15'),
    };
    this.generalInfoService.addRoom(room).subscribe(this.getRoomsList);
  }
  updateRoom(roomId: string) {
    const updateRoomInfo: Partial<RoomInfo> = {
      roomType: 'Updated RoomType',
      amenities: 'TV, Yard, New PS5, Updated',
    };
    this.generalInfoService
      .updateRoom(roomId, updateRoomInfo)
      .subscribe(this.getRoomsList);
  }
  deleteRoom(roomId: string) {
    this.generalInfoService.deleteRoom(roomId).subscribe(this.getRoomsList);
  }

  selectRoom(room: RoomInfo) {
    this.selectedRoom = room;
  }
  clearSelectedRoom() {
    this.selectedRoom = null;
  }
}
