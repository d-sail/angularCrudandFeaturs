import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeInterface } from 'src/app/interface/employee.interface';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: EmployeeInterface[];
  show = false;
  optionalId: number;

  constructor(private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(response => {
      this.employees = response;
    });
    this.activatedRoute.paramMap.subscribe(param => this.optionalId = +param.get('id'));
  }

  toggelEmpDetails() {
    this.show = !this.show;
  }

  onClickShowDetails(id: number) {
    this.router.navigate(['/employeeById', id]);
  }

}

