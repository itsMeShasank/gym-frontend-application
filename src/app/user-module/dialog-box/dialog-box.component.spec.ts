import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBoxComponent } from './dialog-box.component';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

describe('DialogBoxComponent', () => {
  let component: DialogBoxComponent;
  let fixture: ComponentFixture<DialogBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogBoxComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { username: 'test-user', password: 'test-password' } },
        { provide: MatDialogRef, useValue: {} }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(DialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize username and password from MAT_DIALOG_DATA', () => {
    expect(component.username).toEqual('test-user');
    expect(component.password).toEqual('test-password');
  });
});
