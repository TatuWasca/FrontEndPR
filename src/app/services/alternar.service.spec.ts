import { TestBed } from '@angular/core/testing';

import { AlternarService } from './alternar.service';

describe('AlternarService', () => {
  let service: AlternarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlternarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
