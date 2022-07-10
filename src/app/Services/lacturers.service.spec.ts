import { TestBed } from '@angular/core/testing';

import { LacturersService } from './lacturers.service';

describe('LacturersService', () => {
  let service: LacturersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LacturersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
