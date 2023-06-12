import { Component, Inject, OnInit } from '@angular/core';
import { localStorageToken } from './localServ/localStorage.token';
import { InitService } from './init.service';

@Component({
  selector: 'hotel-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hotel-inventory-app';

  constructor(
    @Inject(localStorageToken) private localStorage: Storage,
    private initService: InitService
  ) {
    // console.log(initService.config);
  }

  ngOnInit(): void {}
}
