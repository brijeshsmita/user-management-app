import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee: Employee; 

  static isDisabled:boolean = true;

  addEmployee(){
    alert(`${this.employee.empId} ${this.employee.empName} ${this.employee.empSal} ${this.employee.empDept}`);
  }
  constructor() { }
  ngOnInit() {
  }
}
