import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeInterface } from '../interface/employee.interface';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseURL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<EmployeeInterface[]> {
    return this.httpClient.get<EmployeeInterface[]> (`${this.baseURL}employees`);
  }

}
