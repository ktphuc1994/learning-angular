import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoomDetailsComponent } from './general-info/room-details/room-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/rooms',
    pathMatch: 'full',
  },
  {
    path: 'employee',
    component: EmployeeComponent,
  },
  {
    path: 'rooms',
    component: GeneralInfoComponent,
  },
  {
    path: 'rooms/:id',
    component: RoomDetailsComponent,
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
