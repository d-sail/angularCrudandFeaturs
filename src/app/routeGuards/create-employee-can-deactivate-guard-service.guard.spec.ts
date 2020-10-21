import { TestBed } from '@angular/core/testing';

import { CreateEmployeeCanDeactivateGuardServiceGuard } from './create-employee-can-deactivate-guard-service.guard';

describe('CreateEmployeeCanDeactivateGuardServiceGuard', () => {
  let guard: CreateEmployeeCanDeactivateGuardServiceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CreateEmployeeCanDeactivateGuardServiceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
