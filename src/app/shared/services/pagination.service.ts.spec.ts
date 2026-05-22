import { TestBed } from '@angular/core/testing';

import { PaginationServiceTs } from './pagination.service.ts';

describe('PaginationServiceTs', () => {
  let service: PaginationServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginationServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
