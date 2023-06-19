import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import modules
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { GeneralInfoRoutingModule } from './general-info-routing.module';

// import local components
import { GeneralInfoComponent } from './general-info.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomAddComponent } from './room-add/room-add.component';

// import angular material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    GeneralInfoComponent,
    RoomsListComponent,
    RoomDetailsComponent,
    RoomAddComponent,
  ],
  imports: [
    GeneralInfoRoutingModule,
    CommonModule,
    HeaderModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
})
export class GeneralInfoModule {}
