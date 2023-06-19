import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { GeneralInfoModule } from './general-info/general-info.module';

// import local directive
import { HoverDirective } from './hover.directive';
import { EmailValidatorDirective } from './email-validator/email-validator.directive';

// import local components
import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

// import local services
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appConfig.service';
import { HttpRequestInterceptor } from './http-request.interceptor';
import { InitService } from './init.service';

// import angular material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { GeneralInfoRoutingModule } from './general-info/general-info-routing.module';

function initFactory(initService: InitService) {
  return () => initService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    EmployeeComponent,
    AppNavComponent,
    NotFoundComponent,
    LoginComponent,
    HoverDirective,
    EmailValidatorDirective,
  ],
  imports: [
    BrowserModule,
    GeneralInfoRoutingModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GeneralInfoModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
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
