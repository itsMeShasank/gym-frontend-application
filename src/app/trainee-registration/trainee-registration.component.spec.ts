import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TraineeRegistrationComponent} from './trainee-registration.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {AccountService} from "../service/account.service";
import {SnackbarService} from "../service/snackbar.service";
import {of, throwError} from "rxjs";
import {SigninNavBarComponent} from "../signin-nav-bar/signin-nav-bar.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('TraineeRegistrationComponent', () => {
  let component: TraineeRegistrationComponent;
  let fixture: ComponentFixture<TraineeRegistrationComponent>;
  let accountService: jasmine.SpyObj<AccountService>;
  let snackBar: jasmine.SpyObj<SnackbarService>;
  let dialog: jasmine.SpyObj<MatDialog>;

  beforeEach(() => {
    const accountServiceSpy = jasmine.createSpyObj('AccountService', ['sendTraineeDetails']);
    const snackBarSpy = jasmine.createSpyObj('SnackbarService', ['openSnackBar']);
    const dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

    TestBed.configureTestingModule({
      declarations: [TraineeRegistrationComponent,SigninNavBarComponent],
      imports: [BrowserAnimationsModule,FormsModule,MatInputModule,MatDialogModule,MatFormFieldModule,MatNativeDateModule,MatDatepickerModule],
      providers: [
        { provide: AccountService, useValue: accountServiceSpy },
        { provide: SnackbarService, useValue: snackBarSpy },
        { provide: MatDialog, useValue: dialogSpy },
      ],
    });
    fixture = TestBed.createComponent(TraineeRegistrationComponent);
    component = fixture.componentInstance;
    accountService = TestBed.inject(AccountService) as jasmine.SpyObj<AccountService>;
    snackBar = TestBed.inject(SnackbarService) as jasmine.SpyObj<SnackbarService>;
    dialog = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save trainee details successfully', () => {
    const mockUserCredential = { userName: 'john.doe', password: 'password',oldPassword:'passwordd', newPassword: 'passworddd',conform_password: 'password' };
    accountService.sendTraineeDetails.and.returnValue(of(mockUserCredential));
    component.trainee.dateOfBirth='2002-03-29';

    component.saveTraineeDetails();

    expect(accountService.sendTraineeDetails).toHaveBeenCalledOnceWith(component.trainee);
    expect(snackBar.openSnackBar).toHaveBeenCalledWith('Successfully Account Created.', 1000);
    expect(dialog.open).toHaveBeenCalledWith(jasmine.any(Function), {
      data: { username: mockUserCredential.userName, password: mockUserCredential.password },
    });
  });

  it('should handle failure when saving trainee details', () => {
    // Arrange
    accountService.sendTraineeDetails.and.returnValue(throwError('error'));
    snackBar.openSnackBar.and.returnValue(undefined); // Simulate snackBar
    component.trainee.dateOfBirth='2002-03-29';
    // Act
    component.saveTraineeDetails();

    // Assert
    expect(accountService.sendTraineeDetails).toHaveBeenCalledWith(component.trainee);
    expect(snackBar.openSnackBar).toHaveBeenCalledWith('Account Not yet Created.', 1000);
  });
});
