import {TestBed} from '@angular/core/testing';

import {TraineeService} from './trainee.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('TraineeService', () => {
  let service: TraineeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(TraineeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
