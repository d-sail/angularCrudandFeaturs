import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Departments } from 'src/app/interface/departments';

import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeInterface } from '../../interface/employee.interface';

@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.scss']
})
export class CreateEmployeesComponent implements OnInit {
  @ViewChild('createEmployeeRef') public createEmployeeRef: NgForm;
  employeeForm: FormGroup;
  imgPreview = false;
  photoPath = '';

  departments: Departments[] = [
    { id: 1, name: 'HR' },
    { id: 2, name: 'UI Developer' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Admin' }
  ];
  constructor(private fb: FormBuilder,
              private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      contactPref: ['', Validators.required],
      dob: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      isActive: ['', Validators.required],
      department: ['', Validators.required],
      imgPath: [this.photoPath],
      // created new nested form group for skills
      skills: this.fb.group({
        skillName: ['', Validators.required],
        numberOfYears: ['', Validators.required],
        proficiance: ['', Validators.required]
      })
    });
  }

  onImgPreview() {
    this.imgPreview = !this.imgPreview;
    console.log('route', this.createEmployeeRef);
  }

  onEnployeeFormSave() {
    const empData: EmployeeInterface[] = this.employeeForm.value;
    console.log('empData', empData);
    this.employeeService.postEmployees(empData).subscribe(() => { },
      (error) => {
        alert(JSON.stringify(error.message));
      });
  }
}
