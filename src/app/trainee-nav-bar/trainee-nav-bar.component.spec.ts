import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TraineeNavBarComponent} from './trainee-nav-bar.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {RouterTestingModule} from "@angular/router/testing";
import {TraineeTrainingRequestComponent} from "../trainee-training-request/trainee-training-request.component";
import {Trainee} from "../model/Trainee";
import {of} from "rxjs";
import {Router} from "@angular/router";

describe('TraineeNavBarComponent', () => {
  let component: TraineeNavBarComponent;
  let fixture: ComponentFixture<TraineeNavBarComponent>;
  window.history.pushState('trainee','','');
  let dialog: MatDialog;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraineeNavBarComponent],
      imports: [RouterTestingModule, MatDialogModule],
    });
    fixture = TestBed.createComponent(TraineeNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    dialog = TestBed.inject(MatDialog);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate back to trainee profile', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.trainee = { id: 1, name: 'John' };

    component.backToMyProfile();

    expect(navigateSpy).toHaveBeenCalledWith(['/trainee-profile'], { state: { trainee: component.trainee } });
  });

  it('should open TraineeTrainingRequestComponent dialog', () => {
    const openSpy = spyOn(dialog, 'open');
    component.trainee = { id: 1, name: 'John' };

    component.redirectToMyTrainings();

    expect(openSpy).toHaveBeenCalledWith(jasmine.any(Function), {
      data: component.trainee,
    });
  });

  it('should navigate to trainee-profile when backToMyProfile is called', () => {
    spyOn(router, 'navigate');
    const traineeData = { /* your trainee data here */ };
    component.trainee = traineeData;
    component.backToMyProfile();
    expect(router.navigate).toHaveBeenCalledWith(['/trainee-profile'], { state: { trainee: traineeData } });
  });

  it('should open TraineeTrainingRequestComponent when redirectToMyTrainings is called', () => {
    spyOn(dialog, 'open');
    const traineeData = { /* your trainee data here */ };
    component.trainee = traineeData;
    component.redirectToMyTrainings();
    expect(dialog.open).toHaveBeenCalledWith(TraineeTrainingRequestComponent, {
      data: traineeData,
    });
  });

  it('should clear localStorage on logout', () => {
    spyOn(localStorage, 'clear');
    component.logout();
    expect(localStorage.clear).toHaveBeenCalled();
  });
});
