import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralInfoComponent } from './general-info.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { RoomDetailsComponent } from './room-details/room-details.component';

const routes: Routes = [
  {
    path: 'rooms',
    component: GeneralInfoComponent,
    children: [
      {
        path: 'add',
        component: RoomAddComponent,
      },
      {
        path: ':id',
        component: RoomDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralInfoRoutingModule {}
