import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SigninNavBarComponent} from './signin-nav-bar.component';

describe('SigninNavBarComponent', () => {
  let component: SigninNavBarComponent;
  let fixture: ComponentFixture<SigninNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninNavBarComponent]
    });
    fixture = TestBed.createComponent(SigninNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
