import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UpdateTraineeTrainersComponent} from './update-trainee-trainers.component';

describe('UpdateTraineeTrainersComponent', () => {
  let component: UpdateTraineeTrainersComponent;
  let fixture: ComponentFixture<UpdateTraineeTrainersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTraineeTrainersComponent]
    });
    fixture = TestBed.createComponent(UpdateTraineeTrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
