import { TestBed } from '@angular/core/testing';

import { StudentSubService } from './student-sub.service';

describe('StudentSubService', () => {
  let service: StudentSubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentSubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
