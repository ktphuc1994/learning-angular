import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import local components
import { EmployeeComponent } from './employee/employee.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

// import local guards
import { loadLoginGuard, loginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'rooms',
    loadChildren: () =>
      import('./general-info/general-info.module').then(
        (m) => m.GeneralInfoModule
      ),
    canActivate: [loginGuard],
    canMatch: [loadLoginGuard],
  },
  {
    path: 'booking/:roomId',
    loadChildren: () =>
      import('./booking/booking.module').then((m) => m.BookingModule),
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    canActivate: [loginGuard],
  },
  {
    path: 'comments',
    loadChildren: () =>
      import('./comments/comments.module').then((m) => m.CommentsModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
