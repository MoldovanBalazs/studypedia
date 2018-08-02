import { TestBed, inject } from '@angular/core/testing';

import { InMemoryRequestDataService } from './in-memory-request-data.service';

describe('InMemoryRequestDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryRequestDataService]
    });
  });

  it('should be created', inject([InMemoryRequestDataService], (service: InMemoryRequestDataService) => {
    expect(service).toBeTruthy();
  }));
});
