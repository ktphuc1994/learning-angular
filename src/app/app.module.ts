import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import local components
import { AppComponent } from './app.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { RoomsListComponent } from './general-info/rooms-list/rooms-list.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';

// import local services
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appConfig.service';
import { HttpRequestInterceptor } from './http-request.interceptor';
import { InitService } from './init.service';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoomDetailsComponent } from './general-info/room-details/room-details.component';

function initFactory(initService: InitService) {
  return () => initService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    GeneralInfoComponent,
    RoomsListComponent,
    HeaderComponent,
    ContainerComponent,
    EmployeeComponent,
    AppNavComponent,
    NotFoundComponent,
    RoomDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [
    { provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
