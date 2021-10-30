import { TestBed } from '@angular/core/testing';

import { OrderDataExtractorService } from './order-data-extractor.service';

describe('DataExtractorService', () => {
  let service: OrderDataExtractorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderDataExtractorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
