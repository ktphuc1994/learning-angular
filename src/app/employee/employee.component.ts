import { Component, Self } from '@angular/core';

// import local services
import { GeneralInfoService } from '../general-info/services/general-info.service';

@Component({
  selector: 'hotel-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [GeneralInfoService],
})
export class EmployeeComponent {
  employeeName: string = 'John';

  constructor(@Self() private generalInfoService: GeneralInfoService) {}
}
