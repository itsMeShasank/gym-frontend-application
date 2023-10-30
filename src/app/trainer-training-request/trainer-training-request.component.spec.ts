import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TrainerTrainingRequestComponent} from './trainer-training-request.component';

describe('TrainerTrainingRequestComponent', () => {
  let component: TrainerTrainingRequestComponent;
  let fixture: ComponentFixture<TrainerTrainingRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainerTrainingRequestComponent]
    });
    fixture = TestBed.createComponent(TrainerTrainingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
