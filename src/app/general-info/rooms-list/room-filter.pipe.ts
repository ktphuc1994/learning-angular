import { Pipe, PipeTransform } from '@angular/core';
import { RoomInfo } from '../rooms';

@Pipe({
  name: 'roomFilter',
})
export class RoomFilterPipe implements PipeTransform {
  transform(rooms: RoomInfo[], price: number) {
    return rooms.filter((room) => Number(room.price) >= price);
  }
}
