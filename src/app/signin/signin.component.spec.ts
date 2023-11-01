import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {SigninComponent} from './signin.component';
import {GuardService} from "../service/guardService";
import {AccountService} from "../service/account.service";
import {TraineeService} from "../service/trainee.service";
import {TrainerService} from "../service/trainer.service";
import {Router} from "@angular/router";
import {SnackbarService} from "../service/snackbar.service";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SigninNavBarComponent} from "../signin-nav-bar/signin-nav-bar.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {of, throwError} from "rxjs";
import {Trainer} from "../model/Trainer";
import {Trainee} from "../model/Trainee";

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let guardService: GuardService;
  let accountService: AccountService;
  let traineeService: TraineeService;
  let trainerService: TrainerService;
  let router: Router;
  let snackBar: SnackbarService;
  let trainee: Trainee = {
    userName:"",
    trainersList:[],
    dateOfBirth:"",
    lastName:"",
    address:"",
    mail:"",
    firstName:"",
    active:false,
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SigninComponent,SigninNavBarComponent],
      providers: [GuardService, AccountService, TraineeService, TrainerService, SnackbarService,MatSnackBar],
      imports: [BrowserAnimationsModule,FormsModule,HttpClientModule,MatFormFieldModule,MatInputModule,MatRadioModule],
    }).compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    guardService = TestBed.inject(GuardService);
    accountService = TestBed.inject(AccountService);
    traineeService = TestBed.inject(TraineeService);
    trainerService = TestBed.inject(TrainerService);
    router = TestBed.inject(Router);
    snackBar = TestBed.inject(SnackbarService);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle successful Trainee login', () => {
    component.userType = 'Trainee';
    spyOn(accountService, 'verifyLoginCredential').and.returnValue(of('token'));
    spyOn(guardService, 'setUserRole');
    spyOn(traineeService, 'getTraineeDetails').and.returnValue(of(trainee));
    spyOn(router, 'navigate');
    spyOn(localStorage, 'setItem');
    spyOn(snackBar, 'openSnackBar');

    // Act
    component.verifyLoginDetails();

    // Assert
    expect(localStorage.setItem).toHaveBeenCalledWith('token', 'token');
    expect(guardService.setUserRole).toHaveBeenCalledWith(2);
    expect(traineeService.getTraineeDetails).toHaveBeenCalledWith(component.userCredential.userName);
    expect(router.navigate).toHaveBeenCalledWith(['/trainee-profile'], { state: { trainee: trainee } });
  });

  it('should show error message for bad credentials', () => {
    // Arrange
    spyOn(accountService, 'verifyLoginCredential').and.returnValue(throwError('error'));
    spyOn(snackBar, 'openSnackBar');

    // Act
    component.verifyLoginDetails();

    // Assert
    expect(snackBar.openSnackBar).toHaveBeenCalledWith('Bad Credentials', 1000);
  });

  it('should show error message for no Trainer found with given credentials', () => {
    // Arrange
    component.userType = 'Trainer';
    spyOn(accountService, 'verifyLoginCredential').and.returnValue(of('token'));
    spyOn(trainerService, 'getTrainerDetails').and.returnValue(throwError('error'));
    spyOn(snackBar, 'openSnackBar');

    // Act
    component.verifyLoginDetails();

    // Assert
    expect(snackBar.openSnackBar).toHaveBeenCalledWith('No Trainer Found With given Credentials', 1000);
  });

  it('should show error message for no Trainee found with given credentials', () => {
    // Arrange
    component.userType = 'Trainee';
    spyOn(accountService, 'verifyLoginCredential').and.returnValue(of('token'));
    spyOn(traineeService, 'getTraineeDetails').and.returnValue(throwError('error'));
    spyOn(snackBar, 'openSnackBar');

    // Act
    component.verifyLoginDetails();

    // Assert
    expect(snackBar.openSnackBar).toHaveBeenCalledWith('No Trainee Found With given Credentials', 1000);
  });

  it('should handle successful Trainer login', () => {
    component.userType = 'Trainer'; // Set the user type to 'Trainer'.
    spyOn(accountService, 'verifyLoginCredential').and.returnValue(of('token')); // Mock the verifyLoginCredential response.
    spyOn(guardService, 'setUserRole'); // Mock setUserRole method.

    // Create a mock trainer object to be returned by the getTrainerDetails service.
    const trainer: any = { /* Mock trainer data */ };
    spyOn(trainerService, 'getTrainerDetails').and.returnValue(of(trainer));

    // Mock the router and localStorage methods.
    spyOn(router, 'navigate');
    spyOn(localStorage, 'setItem');

    // Mock the snackBar service.
    spyOn(snackBar, 'openSnackBar');

    // Act
    component.verifyLoginDetails();

    // Assert
    expect(localStorage.setItem).toHaveBeenCalledWith('token', 'token');
    expect(guardService.setUserRole).toHaveBeenCalledWith(1);
    expect(trainerService.getTrainerDetails).toHaveBeenCalledWith(component.userCredential.userName);
    expect(router.navigate).toHaveBeenCalledWith(['/trainer-profile'], { state: { trainer } });
  });

});
