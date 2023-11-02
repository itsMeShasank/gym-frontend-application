import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TrainerRegistrationComponent} from './trainer-registration.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from "@angular/material/dialog";
import {SigninNavBarComponent} from "../signin-nav-bar/signin-nav-bar.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('TrainerRegistrationComponent', () => {
  let component: TrainerRegistrationComponent;
  let fixture: ComponentFixture<TrainerRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainerRegistrationComponent,SigninNavBarComponent],
      imports:[HttpClientTestingModule,MatSnackBarModule,MatDialogModule,MatFormFieldModule,MatSelectModule,MatInputModule,FormsModule,BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(TrainerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
