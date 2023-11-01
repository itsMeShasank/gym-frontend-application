import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TraineeProfileComponent} from './trainee-profile.component';
import {Router} from "@angular/router";
import {TraineeNavBarComponent} from "../trainee-nav-bar/trainee-nav-bar.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
import {TrainerNavBarComponent} from "../trainer-nav-bar/trainer-nav-bar.component";

describe('TraineeProfileComponent', () => {
  let component: TraineeProfileComponent;
  let fixture: ComponentFixture<TraineeProfileComponent>;
  let router: jasmine.SpyObj<Router>;


  beforeEach(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [TraineeProfileComponent,TraineeNavBarComponent],
      providers: [{ provide: Router, useValue: routerSpy }],
      imports: [MatDialogModule,MatTableModule]
    });
    fixture = TestBed.createComponent(TraineeProfileComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;

    const trainee = {
      userName: 'john.doe',
      firstName: 'John',
      lastName: 'Doe',
      mail: 'john@example.com',
      dateOfBirth: '1990-01-01',
      address: '123 Main St',
      active: true,
      trainersList: [],
    };

    // Set the state after creating the component instance
    window.history.pushState({trainee}, '');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to update page', () => {
    component.navigatingToUpdatePage();

    expect(router.navigate).toHaveBeenCalledWith(['/update-trainee-profile'], {
      state: { trainee: component.trainee },
    });
  });
  it('should navigate to update password page', () => {
    component.navigatingToUpdatePassword();

    expect(router.navigate).toHaveBeenCalledWith(['/update-trainee-password'], {
      state: { traineeDetails: component.trainee },
    });
  });

  it('should navigate to update trainers page', () => {
    component.addTrainersToTrainee();

    expect(router.navigate).toHaveBeenCalledWith(['/update-trainee-trainers'], {
      state: { trainee: component.trainee },
    });
  });


});
