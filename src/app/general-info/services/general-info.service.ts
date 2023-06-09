import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';

// import types and interfaces
import { RoomInfo } from '../rooms';
import { AppConfig } from 'src/app/AppConfig/appConfig.interface';

// import local services
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appConfig.service';

@Injectable({
  providedIn: 'root',
})
export class GeneralInfoService {
  private readonly roomsList$: BehaviorSubject<RoomInfo[]> =
    new BehaviorSubject<RoomInfo[]>([]);

  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  getRoomsList() {
    this.http
      .get<RoomInfo[]>('/api/roomsList')
      .pipe(shareReplay(1), catchError(this.handleError))
      .subscribe((rooms) => this.roomsList$.next(rooms));
  }
  addRoom(room: Omit<RoomInfo, 'roomId'>) {
    return this.http
      .post<RoomInfo>('/api/roomsList', room)
      .pipe(catchError(this.handleError));
  }
  updateRoom(roomId: string, updateInfo: Partial<RoomInfo>) {
    return this.http
      .put<RoomInfo>(`/api/roomsList/${roomId}`, updateInfo)
      .pipe(catchError(this.handleError));
  }
  deleteRoom(roomId: string) {
    return this.http
      .delete(`/api/roomsList/${roomId}`)
      .pipe(catchError(this.handleError));
  }

  get roomsList() {
    return this.roomsList$.asObservable();
  }
}
