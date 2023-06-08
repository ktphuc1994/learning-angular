import { Component, Inject, OnInit } from '@angular/core';
import { localStorageToken } from './localServ/localStorage.token';

@Component({
  selector: 'hotel-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hotel-inventory-app';

  constructor(@Inject(localStorageToken) private localStorage: Storage) {}

  ngOnInit(): void {}
}
