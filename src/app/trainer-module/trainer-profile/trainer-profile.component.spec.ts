import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TrainerProfileComponent} from './trainer-profile.component';
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {TrainerNavBarComponent} from "../trainer-nav-bar/trainer-nav-bar.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";

describe('TrainerProfileComponent', () => {
  let component: TrainerProfileComponent;
  let fixture: ComponentFixture<TrainerProfileComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainerProfileComponent,TrainerNavBarComponent],
      imports: [RouterTestingModule,MatDialogModule,MatTableModule],
    });
    fixture = TestBed.createComponent(TrainerProfileComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    const trainer = {
      userName: 'john.doe',
      firstName: 'John',
      lastName: 'Doe',
      mail: 'john@example.com',
      specialization: 'Fitness',
      active: true,
      traineeDetailsList:[],
    };
    window.history.pushState({trainer}, '');
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to update page', () => {
    const navigateSpy = spyOn(router, 'navigate');

    component.navigatingToUpdatePage();

    expect(navigateSpy).toHaveBeenCalledWith(['/update-trainer-profile'], {
      state: { trainer: component.trainer },
    });
  });

  it('should navigate to update password page', () => {
    const navigateSpy = spyOn(router, 'navigate');

    component.navigatingToUpdatePassword();

    expect(navigateSpy).toHaveBeenCalledWith(['/update-trainer-password'], {
      state: { trainer: component.trainer },
    });
  });

});
