import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  getComments() {
    return this.http.get<InterfaceComment[]>(
      'https://jsonplaceholder.typicode.com/comments'
    );
  }
}
