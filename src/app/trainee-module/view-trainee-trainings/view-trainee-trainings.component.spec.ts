import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewTraineeTrainingsComponent} from './view-trainee-trainings.component';
import {Router} from "@angular/router";
import {TrainingDetails} from "../../model/TrainingDetails";
import {TraineeNavBarComponent} from "../trainee-nav-bar/trainee-nav-bar.component";
import {MatDialogModule} from "@angular/material/dialog";
import {RouterTestingModule} from "@angular/router/testing";
import {MatTableModule} from "@angular/material/table";

describe('ViewTraineeTrainingsComponent', () => {
  let component: ViewTraineeTrainingsComponent;
  let fixture: ComponentFixture<ViewTraineeTrainingsComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTraineeTrainingsComponent,TraineeNavBarComponent],
      imports: [MatDialogModule,MatTableModule,RouterTestingModule]
    });
    fixture = TestBed.createComponent(ViewTraineeTrainingsComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize trainee and trainingData from history state on ngOnInit', () => {
    const traineeData = {
      userName: "",
      mail: "",
      dateOfBirth: "",
      active: true,
      trainersList: [],
      firstName: "",
      address: "",
      lastName: ""
    }
    const trainingData = [new TrainingDetails()];
    const mockHistoryState = { trainee: traineeData, trainings: trainingData };


    component.ngOnInit();

  });

  it('should navigate to trainee-profile when goBack is called', () => {
    spyOn(router, 'navigate');
    const traineeData = {
      userName: "",
      mail: "",
      dateOfBirth: "",
      active: true,
      trainersList: [],
      firstName: "",
      address: "",
      lastName: ""
    }
    component.trainee = traineeData;
    component.goBack();

    expect(router.navigate).toHaveBeenCalledWith(['/trainee-profile'], { state: { trainee: traineeData } });
  });
});
