import { TestBed } from '@angular/core/testing';

import { UpdateBarService } from './update-bar.service';

describe('UpdateBarService', () => {
  let service: UpdateBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
