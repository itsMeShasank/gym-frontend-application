import {ComponentFixture, TestBed} from '@angular/core/testing';

import {JoinusComponentComponent} from './joinus-component.component';
import {SigninNavBarComponent} from "../signin-nav-bar/signin-nav-bar.component";
import { MatCardModule} from "@angular/material/card";

describe('JoinusComponentComponent', () => {
  let component: JoinusComponentComponent;
  let fixture: ComponentFixture<JoinusComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoinusComponentComponent,SigninNavBarComponent],
      imports: [MatCardModule]
    });
    fixture = TestBed.createComponent(JoinusComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
