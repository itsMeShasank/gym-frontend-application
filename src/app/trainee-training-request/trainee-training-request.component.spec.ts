import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TraineeTrainingRequestComponent} from './trainee-training-request.component';

describe('TraineeTrainingRequestComponent', () => {
  let component: TraineeTrainingRequestComponent;
  let fixture: ComponentFixture<TraineeTrainingRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraineeTrainingRequestComponent]
    });
    fixture = TestBed.createComponent(TraineeTrainingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
