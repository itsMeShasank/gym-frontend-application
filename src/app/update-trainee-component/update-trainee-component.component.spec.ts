import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UpdateTraineeComponentComponent} from './update-trainee-component.component';

describe('UpdateTraineeComponentComponent', () => {
  let component: UpdateTraineeComponentComponent;
  let fixture: ComponentFixture<UpdateTraineeComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTraineeComponentComponent]
    });
    fixture = TestBed.createComponent(UpdateTraineeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
