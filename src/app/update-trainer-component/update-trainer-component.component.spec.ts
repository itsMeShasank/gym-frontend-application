import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UpdateTrainerComponentComponent} from './update-trainer-component.component';

describe('UpdateTrainerComponentComponent', () => {
  let component: UpdateTrainerComponentComponent;
  let fixture: ComponentFixture<UpdateTrainerComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTrainerComponentComponent]
    });
    fixture = TestBed.createComponent(UpdateTrainerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
