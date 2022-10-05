import { TestBed } from '@angular/core/testing';

import { TeamcolorsService } from './teamcolors.service';

describe('TeamcolorsService', () => {
  let service: TeamcolorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamcolorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
