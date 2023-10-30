import {ComponentFixture, TestBed} from '@angular/core/testing';

import {JoinusComponentComponent} from './joinus-component.component';

describe('JoinusComponentComponent', () => {
  let component: JoinusComponentComponent;
  let fixture: ComponentFixture<JoinusComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoinusComponentComponent]
    });
    fixture = TestBed.createComponent(JoinusComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
