import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UpdateTraineePasswordComponent} from './update-trainee-password.component';
import {AccountService} from "../service/account.service";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {of, throwError} from "rxjs";
import {SnackbarService} from "../service/snackbar.service";
import {Router} from "@angular/router";
import {SigninComponent} from "../signin/signin.component";

describe('UpdateTraineePasswordComponent', () => {
  let component: UpdateTraineePasswordComponent;
  let fixture: ComponentFixture<UpdateTraineePasswordComponent>;
  let accountService: jasmine.SpyObj<AccountService>;
  let snackBar: jasmine.SpyObj<SnackbarService>;
  let mockRouter: Router;

  beforeEach(() => {
    accountService = jasmine.createSpyObj('AccountService', ['updatePassword']);
    snackBar = jasmine.createSpyObj('SnackBarService', ['openSnackBar']);
    window.history.pushState({traineeDetails: 'trainee'},'','');

    TestBed.configureTestingModule({
      declarations: [UpdateTraineePasswordComponent,SigninComponent],
      providers: [
        {provide: AccountService, useValue: accountService},
        {provide: SnackbarService, useValue: snackBar},
      ],
      imports: [BrowserAnimationsModule, FormsModule,MatFormFieldModule,MatInputModule],
    });
    fixture = TestBed.createComponent(UpdateTraineePasswordComponent);
    component = fixture.componentInstance;
    mockRouter = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call updatePassword on form submission', () => {
    const successResponse = of(null);
    accountService.updatePassword.and.returnValue(successResponse);
    spyOn(mockRouter,'navigate');

    component.onSubmit();

    expect(accountService.updatePassword).toHaveBeenCalled();
    expect(snackBar.openSnackBar).toHaveBeenCalledWith('Successfully Password updated.', 1000);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should show a specific message when 400 status is received', () => {
    const errorResponse = throwError({ status: 400 });
    accountService.updatePassword.and.returnValue(errorResponse);

    component.onSubmit();

    expect(accountService.updatePassword).toHaveBeenCalled();
    expect(snackBar.openSnackBar).toHaveBeenCalledWith(
      'please make sure old password and new password should be different.',
      3000
    );
  });

});
