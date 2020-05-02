import { TestBed } from '@angular/core/testing';

import { ObservableOperatorService } from './observable-operator.service';

describe('ObservableOperatorService', () => {
  let service: ObservableOperatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservableOperatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
