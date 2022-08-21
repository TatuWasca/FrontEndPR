import { TestBed } from '@angular/core/testing';

import { HysSkillsService } from './hysskills.service';

describe('HysSkillsService', () => {
  let service: HysSkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HysSkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
