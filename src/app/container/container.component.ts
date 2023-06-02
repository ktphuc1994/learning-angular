import { Component, AfterContentInit, ContentChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'hotel-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements AfterContentInit {
  @ContentChild(EmployeeComponent) employeeComponent!: EmployeeComponent;

  ngAfterContentInit(): void {
    this.employeeComponent.employeeName = 'Ricky';
  }
}
