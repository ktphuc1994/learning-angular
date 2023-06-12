import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'hotel-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss'],
})
export class RoomDetailsComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}

  id$ = this.router.paramMap.pipe(map((params) => params.get('id')));

  ngOnInit(): void {
    // this.id = this.router.snapshot.params['id'];
  }
}
