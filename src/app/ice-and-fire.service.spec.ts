import { TestBed } from '@angular/core/testing';

import { IceAndFireService } from './ice-and-fire.service';

describe('IceAndFireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IceAndFireService = TestBed.get(IceAndFireService);
    expect(service).toBeTruthy();
  });
});
