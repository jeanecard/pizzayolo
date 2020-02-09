import { TestBed } from '@angular/core/testing';

import { GarnituresService } from './garnitures.service';

describe('GarnituresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GarnituresService = TestBed.get(GarnituresService);
    expect(service).toBeTruthy();
  });
});
