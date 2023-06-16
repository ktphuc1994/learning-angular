import { Component } from '@angular/core';

// import types and interfaces
import { RoomInfo } from '../rooms';
import { GeneralInfoService } from '../services/general-info.service';

@Component({
  selector: 'hotel-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.scss'],
})
export class RoomAddComponent {
  isSuccess: boolean | undefined;
  room: Omit<RoomInfo, 'roomId'> = {
    roomType: '',
    amenities: '',
    photos: '',
    price: '0',
    checkinTime: new Date(),
    checkoutTime: new Date(),
  };

  constructor(private generalInfoService: GeneralInfoService) {}

  addRoom() {
    this.generalInfoService.addRoom(this.room).subscribe({
      next: () => {
        this.generalInfoService.getRoomsList();
        this.isSuccess = true;
      },
      error: () => {
        this.isSuccess = false;
      },
    });
  }
}
