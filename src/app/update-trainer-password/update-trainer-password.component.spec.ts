import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UpdateTrainerPasswordComponent} from './update-trainer-password.component';

describe('UpdateTrainerPasswordComponent', () => {
  let component: UpdateTrainerPasswordComponent;
  let fixture: ComponentFixture<UpdateTrainerPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTrainerPasswordComponent]
    });
    fixture = TestBed.createComponent(UpdateTrainerPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
