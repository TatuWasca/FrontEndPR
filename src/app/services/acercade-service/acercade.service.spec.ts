import { TestBed } from '@angular/core/testing';

import { AcercadeService } from './acercade.service';

describe('AcercadeService', () => {
  let service: AcercadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcercadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
