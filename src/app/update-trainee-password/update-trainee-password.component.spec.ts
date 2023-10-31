import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UpdateTraineePasswordComponent} from './update-trainee-password.component';

describe('UpdateTraineePasswordComponent', () => {
  let component: UpdateTraineePasswordComponent;
  let fixture: ComponentFixture<UpdateTraineePasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTraineePasswordComponent]
    });
    fixture = TestBed.createComponent(UpdateTraineePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
