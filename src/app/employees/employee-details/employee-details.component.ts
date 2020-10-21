import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeInterface } from '../../interface/employee.interface';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: EmployeeInterface;
  eId: number;
  empIndex = [];

  constructor(private empService: EmployeeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.empService.getEmployees().subscribe(res => {
      res.map((e) => this.empIndex.push(e.id));
    });
    this.activatedRoute.paramMap.subscribe(params => {
      this.eId = +params.get('id');
      this.empService.getEmployeeById(this.eId).subscribe(res => {
        this.employee = res;
      },
        (error) => {
          console.log(error.message);
        });
    });
  }

  onNextEmployee(): void {
    for (let i = 0; i < this.empIndex.length; i++) {
      if (this.empIndex[i] === this.eId) {
        this.eId = this.empIndex[i + 1];
        if (this.eId === undefined) {
          this.eId = this.empIndex[0];
        }
        break;
      }
    }
    this.router.navigate(['/employeeById', this.eId]);
  }

  onPrivousEmployee(): void {
    for (let i = 0; i < this.empIndex.length; i++) {
      if (this.empIndex[i] === this.eId) {
        this.eId = this.empIndex[i - 1];
        if (this.eId === undefined) {
          this.eId = this.empIndex[this.empIndex.length - 1];
        }
        break;
      }
    }
    this.router.navigate(['/employeeById', this.eId]);
  }
}
