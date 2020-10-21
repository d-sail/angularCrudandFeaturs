import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateEmployeesComponent } from '../employees/create-employees/create-employees.component';

@Injectable({
  providedIn: 'root'
})
export class CreateEmployeeCanDeactivateGuardServiceGuard implements CanDeactivate<CreateEmployeesComponent> {
  canDeactivate(component: CreateEmployeesComponent): boolean {
    if (component.createEmployeeRef.dirty) {
      return confirm('Are you sure you want to discard all the changes?');
    }
    return true;
  }
}
