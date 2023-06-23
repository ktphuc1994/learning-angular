import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'hotel-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
  comments$ = this.activatedRoute.data.pipe(map((data) => data['comments']));

  constructor(private activatedRoute: ActivatedRoute) {}
}
