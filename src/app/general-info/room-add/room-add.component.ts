import { Component } from '@angular/core';

// import types and interfaces
import { RoomInfo } from '../rooms';
import { GeneralInfoService } from '../services/general-info.service';
import { NgForm } from '@angular/forms';

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

  addRoom(roomForm: NgForm) {
    this.generalInfoService.addRoom(this.room).subscribe({
      next: () => {
        this.generalInfoService.getRoomsList();
        this.isSuccess = true;
        roomForm.reset();
      },
      error: () => {
        this.isSuccess = false;
      },
    });
  }
}
