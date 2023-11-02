import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UpdateTraineeComponentComponent} from './update-trainee-component.component';
import {SnackbarService} from "../../service/snackbar.service";
import {TraineeService} from "../../service/trainee.service";
import {Router} from "@angular/router";
import {TraineeSignup} from "../../model/TraineeSignup";
import {of, throwError} from "rxjs";
import {TraineeNavBarComponent} from "../trainee-nav-bar/trainee-nav-bar.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {Trainee} from "../../model/Trainee";
import {MatNativeDateModule} from "@angular/material/core";

describe('UpdateTraineeComponentComponent', () => {
  let component: UpdateTraineeComponentComponent;
  let fixture: ComponentFixture<UpdateTraineeComponentComponent>;
  let router: jasmine.SpyObj<Router>;
  let traineeService: jasmine.SpyObj<TraineeService>;
  let snackBar: jasmine.SpyObj<SnackbarService>;
  let trainee: TraineeSignup = new TraineeSignup();

  beforeEach(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const traineeServiceSpy = jasmine.createSpyObj('TraineeService', ['updateTraineeDetails']);
    const snackBarSpy = jasmine.createSpyObj('SnackbarService', ['openSnackBar']);

    TestBed.configureTestingModule({
      declarations: [UpdateTraineeComponentComponent,TraineeNavBarComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: TraineeService, useValue: traineeServiceSpy },
        { provide: SnackbarService, useValue: snackBarSpy },
      ],
      imports: [MatDialogModule,MatFormFieldModule,FormsModule,MatInputModule,BrowserAnimationsModule,MatDatepickerModule,MatNativeDateModule]
    });
    fixture = TestBed.createComponent(UpdateTraineeComponentComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    traineeService = TestBed.inject(TraineeService) as jasmine.SpyObj<TraineeService>;
    snackBar = TestBed.inject(SnackbarService) as jasmine.SpyObj<SnackbarService>;

    // Initialize your component's properties if needed
    component.trainee = new TraineeSignup();
    component.trainee.dateOfBirth = '2000-01-01';
    trainee = component.trainee;
    window.history.pushState({trainee},'');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update trainee details successfully', () => {
    // Arrange
    traineeService.updateTraineeDetails.and.returnValue(of(null));

    // Act
    component.onSubmit();

    // Assert
    expect(traineeService.updateTraineeDetails).toHaveBeenCalledWith(component.trainee);
    expect(snackBar.openSnackBar).toHaveBeenCalledWith('Successfully Profile updated.', 1000);
    expect(router.navigate).toHaveBeenCalledWith(['/trainee-profile'], {
      state: { trainee: component.trainee },
    });
  });

  it('should handle error when updating trainee details', () => {
    // Arrange
    traineeService.updateTraineeDetails.and.returnValue(throwError('Error'));

    // Act
    component.onSubmit();

    // Assert
    expect(traineeService.updateTraineeDetails).toHaveBeenCalledWith(component.trainee);
    expect(snackBar.openSnackBar).toHaveBeenCalledWith('Profile Not Updated Properly', 1000);
  });
});
