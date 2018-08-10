import { TestBed, inject } from '@angular/core/testing';

import { DeadlineService } from './deadline.service';

describe('DeadlineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeadlineService]
    });
  });

  it('should be created', inject([DeadlineService], (service: DeadlineService) => {
    expect(service).toBeTruthy();
  }));
});
