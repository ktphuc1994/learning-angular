import { Component, Inject, OnInit } from '@angular/core';
import { localStorageToken } from './localServ/localStorage.token';
import { InitService } from './init.service';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'hotel-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hotel-inventory-app';

  constructor(
    @Inject(localStorageToken) private localStorage: Storage,
    private initService: InitService,
    private router: Router
  ) {
    // console.log(initService.config);
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((events) => events instanceof NavigationStart))
      .subscribe((event) => {});
  }
}
