import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewTrainerTrainingsComponent} from './view-trainer-trainings.component';
import {Router} from "@angular/router";
import {TrainingDetails} from "../model/TrainingDetails";
import {Trainer} from "../model/Trainer";
import {TrainerNavBarComponent} from "../trainer-nav-bar/trainer-nav-bar.component";
import {MatDialogModule} from "@angular/material/dialog";
import {RouterTestingModule} from "@angular/router/testing";
import {MatTableModule} from "@angular/material/table";

describe('ViewTrainerTrainingsComponent', () => {
  let component: ViewTrainerTrainingsComponent;
  let fixture: ComponentFixture<ViewTrainerTrainingsComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTrainerTrainingsComponent,TrainerNavBarComponent],
      imports: [MatDialogModule,RouterTestingModule,MatTableModule]
    });
    fixture = TestBed.createComponent(ViewTrainerTrainingsComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize trainer and trainingData from history state on ngOnInit', () => {
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

  it('should navigate to trainer-profile when goBack is called', () => {
    spyOn(router, 'navigate');
    const trainerData:Trainer = { userName: 'TestTrainer',firstName:"",lastName:"",mail:"",specialization:"",active:false,traineeDetailsList:[]};
    component.trainer = trainerData;
    component.goBack();

    expect(router.navigate).toHaveBeenCalledWith(['/trainer-profile'], { state: { trainer: trainerData } });
  });

});
