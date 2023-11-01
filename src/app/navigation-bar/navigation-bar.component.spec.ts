import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NavigationBarComponent} from './navigation-bar.component';
import {MatToolbarModule} from "@angular/material/toolbar";

describe('NavigationBarComponent', () => {
  let component: NavigationBarComponent;
  let fixture: ComponentFixture<NavigationBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationBarComponent],
      imports: [MatToolbarModule]
    });
    fixture = TestBed.createComponent(NavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
