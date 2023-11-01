import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AboutusComponentComponent} from './aboutus-component.component';
import {SigninNavBarComponent} from "../signin-nav-bar/signin-nav-bar.component";

describe('AboutusComponentComponent', () => {
  let component: AboutusComponentComponent;
  let fixture: ComponentFixture<AboutusComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutusComponentComponent,SigninNavBarComponent]
    });
    fixture = TestBed.createComponent(AboutusComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
