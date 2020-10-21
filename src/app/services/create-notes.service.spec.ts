import { TestBed } from '@angular/core/testing';

import { CreateNotesService } from './create-notes.service';

describe('CreateNotesService', () => {
  let service: CreateNotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateNotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
