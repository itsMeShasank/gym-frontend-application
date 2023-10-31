import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TraineeNavBarComponent} from './trainee-nav-bar.component';

describe('TraineeNavBarComponent', () => {
  let component: TraineeNavBarComponent;
  let fixture: ComponentFixture<TraineeNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraineeNavBarComponent]
    });
    fixture = TestBed.createComponent(TraineeNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
