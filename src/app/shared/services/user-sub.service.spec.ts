import { TestBed } from '@angular/core/testing';

import { UserSubService } from './user-sub.service';

describe('UserSubService', () => {
  let service: UserSubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
