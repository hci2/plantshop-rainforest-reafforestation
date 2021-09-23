import { TestBed } from '@angular/core/testing';

import { UuidGeneratorService } from './uuid-generator.service';

describe('UuidGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UuidGeneratorService = TestBed.get(UuidGeneratorService);
    expect(service).toBeTruthy();
  });
});
