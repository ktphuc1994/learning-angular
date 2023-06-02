import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';
import { RoomInfo } from '../rooms';

@Component({
  selector: 'hotel-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnChanges, OnDestroy {
  @Input() roomList: RoomInfo[] = [];
  @Input() title: string = '';

  @Output() selectRoomEvent = new EventEmitter<RoomInfo>();
  @Output() deleteRoomEvent = new EventEmitter<string>();
  @Output() roomListDestroyEvent = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    // console.log({ changes });
  }

  ngOnDestroy(): void {
    this.roomListDestroyEvent.emit();
  }

  selectRoom(room: RoomInfo) {
    this.selectRoomEvent.emit(room);
  }
  deleteRoom(roomId: string) {
    this.deleteRoomEvent.emit(roomId);
  }
}
