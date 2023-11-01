import {TestBed} from '@angular/core/testing';

import {TrainerService} from './trainer.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('TrainerService', () => {
  let service: TrainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TrainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
