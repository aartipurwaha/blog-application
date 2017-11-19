import { TestBed, inject } from '@angular/core/testing';

import { BloggingService } from './blogging.service';

describe('BloggingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BloggingService]
    });
  });

  it('should be created', inject([BloggingService], (service: BloggingService) => {
    expect(service).toBeTruthy();
  }));
});
