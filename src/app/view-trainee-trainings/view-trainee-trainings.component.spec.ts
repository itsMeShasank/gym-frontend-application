import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewTraineeTrainingsComponent} from './view-trainee-trainings.component';

describe('ViewTraineeTrainingsComponent', () => {
  let component: ViewTraineeTrainingsComponent;
  let fixture: ComponentFixture<ViewTraineeTrainingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTraineeTrainingsComponent]
    });
    fixture = TestBed.createComponent(ViewTraineeTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
