import { TestBed, inject } from '@angular/core/testing';

import { InMemoryUniversityDataService } from './in-memory-university-data.service';

describe('InMemoryUniversityDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryUniversityDataService]
    });
  });

  it('should be created', inject([InMemoryUniversityDataService], (service: InMemoryUniversityDataService) => {
    expect(service).toBeTruthy();
  }));
});
