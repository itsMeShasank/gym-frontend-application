import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewTrainerTrainingsComponent} from './view-trainer-trainings.component';

describe('ViewTrainerTrainingsComponent', () => {
  let component: ViewTrainerTrainingsComponent;
  let fixture: ComponentFixture<ViewTrainerTrainingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTrainerTrainingsComponent]
    });
    fixture = TestBed.createComponent(ViewTrainerTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
