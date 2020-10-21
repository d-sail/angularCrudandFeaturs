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

  postEmployees(empData: EmployeeInterface[]): Observable<EmployeeInterface[]> {
    return this.httpClient.post<EmployeeInterface[]> (`${this.baseURL}employees`, empData);
  }

  getEmployees(): Observable<EmployeeInterface[]> {
    return this.httpClient.get<EmployeeInterface[]> (`${this.baseURL}employees`);
  }

  getEmployeeById(eI: number): Observable<EmployeeInterface> {
    return this.httpClient.get<EmployeeInterface> (`${this.baseURL}employees/${eI}`);
  }

}
