import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UpdateTraineeTrainersComponent} from './update-trainee-trainers.component';
import {TraineeService} from "../../service/trainee.service";
import {Router} from "@angular/router";
import {SelectionModel} from "@angular/cdk/collections";
import {Trainer} from "../../model/Trainer";
import {MatTableDataSource} from "@angular/material/table";
import {of} from "rxjs";
import {TraineeTrainersList} from "../../model/TraineeTrainersList";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TraineeNavBarComponent} from "../trainee-nav-bar/trainee-nav-bar.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {Trainee} from "../../model/Trainee";

describe('UpdateTraineeTrainersComponent', () => {
  let component: UpdateTraineeTrainersComponent;
  let fixture: ComponentFixture<UpdateTraineeTrainersComponent>;
  let router: jasmine.SpyObj<Router>;
  let traineeService: jasmine.SpyObj<TraineeService>;
  let snackBar: jasmine.SpyObj<MatSnackBar>;


  beforeEach(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const traineeServiceSpy = jasmine.createSpyObj('TraineeService', [
      'getFreeTrainers',
      'updateTrainersList',
    ]);
    const snackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);
    TestBed.configureTestingModule({
      declarations: [UpdateTraineeTrainersComponent,TraineeNavBarComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: TraineeService, useValue: traineeServiceSpy },
        { provide: MatSnackBar, useValue: snackBarSpy },
      ],
      imports: [MatDialogModule,MatProgressSpinnerModule]
    });
    fixture = TestBed.createComponent(UpdateTraineeTrainersComponent);
    component = fixture.componentInstance;


    // Initialize your component's properties if needed
    component.trainee = {
      userName: "",
      mail: "",
      dateOfBirth: "",
      active: true,
      trainersList: [],
      firstName: "",
      address: "",
      lastName: ""
    }
    component.trainee.userName = 'testuser';
    component.trainee.firstName = 'Test';
    component.existingTrainerProfiles = [new Trainer()];
    component.dataSource = new MatTableDataSource<Trainer>();
    component.selection = new SelectionModel<Trainer>(true, []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should check if all rows are selected', () => {
    // Arrange
    component.selection.select(...component.dataSource.data);

    // Act and Assert
    expect(component.isAllSelected()).toBeTrue();
  });

  it('should toggle all rows selection', () => {
    // Arrange
    component.toggleAllRows();

    // Act and Assert
    expect(component.isAllSelected()).toBeTrue();

    // Toggle again
    component.toggleAllRows();

    // Assert
    expect(component.isAllSelected()).toBeTrue();
  });


});
