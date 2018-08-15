import { TestBed, inject } from '@angular/core/testing';

import { SubmitentryService } from './submitentry.service';

describe('SubmitentryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubmitentryService]
    });
  });

  it('should be created', inject([SubmitentryService], (service: SubmitentryService) => {
    expect(service).toBeTruthy();
  }));
});
