import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TrainerNavBarComponent} from './trainer-nav-bar.component';

describe('TrainerNavBarComponent', () => {
  let component: TrainerNavBarComponent;
  let fixture: ComponentFixture<TrainerNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainerNavBarComponent]
    });
    fixture = TestBed.createComponent(TrainerNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
