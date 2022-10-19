import { TestBed } from '@angular/core/testing';

import { RecipiceService } from './recipice.service';

describe('ApiService', () => {
  let service: RecipiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
