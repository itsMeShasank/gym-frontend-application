import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TrainingRegistrationComponent} from './training-registration.component';

describe('TrainingRegistrationComponent', () => {
  let component: TrainingRegistrationComponent;
  let fixture: ComponentFixture<TrainingRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingRegistrationComponent]
    });
    fixture = TestBed.createComponent(TrainingRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
