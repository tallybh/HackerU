import { TestBed } from '@angular/core/testing';

import { LanguagesServiceService } from './languages-service.service';

describe('LanguagesServiceService', () => {
  let service: LanguagesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguagesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
