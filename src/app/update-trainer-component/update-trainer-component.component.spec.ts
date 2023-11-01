import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UpdateTrainerComponentComponent} from './update-trainer-component.component';
import {TrainerService} from "../service/trainer.service";
import {Router} from "@angular/router";
import {Trainer} from "../model/Trainer";
import {of, throwError} from "rxjs";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {TrainerNavBarComponent} from "../trainer-nav-bar/trainer-nav-bar.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterTestingModule} from "@angular/router/testing";
import {SnackbarService} from "../service/snackbar.service";
import {By} from "@angular/platform-browser";

describe('UpdateTrainerComponentComponent', () => {
  let component: UpdateTrainerComponentComponent;
  let fixture: ComponentFixture<UpdateTrainerComponentComponent>;
  let router: jasmine.SpyObj<Router>;
  let trainerService: jasmine.SpyObj<TrainerService>;
  let snackBar: jasmine.SpyObj<SnackbarService>;

  beforeEach(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const trainerServiceSpy = jasmine.createSpyObj('TrainerService', [
      'updateTrainerDetails',
    ]);
    const snackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);
    TestBed.configureTestingModule({
      declarations: [UpdateTrainerComponentComponent,TrainerNavBarComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: TrainerService, useValue: trainerServiceSpy },
        { provide: MatSnackBar, useValue: snackBarSpy },
      ],
      imports:[MatSnackBarModule,MatDialogModule,MatFormFieldModule,FormsModule,MatInputModule,BrowserAnimationsModule,RouterTestingModule]
    });
    fixture = TestBed.createComponent(UpdateTrainerComponentComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    trainerService = TestBed.inject(TrainerService) as jasmine.SpyObj<TrainerService>;

    // Initialize your component's properties if needed
    const trainer = new Trainer();
    trainer.userName = 'testuser';
    window.history.pushState({trainer},'');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize trainerProfile with a new Trainer', () => {
    expect(component.trainerProfile).toBeDefined();
  });

  it('should submit and navigate on success', () => {
    // Arrange
    trainerService.updateTrainerDetails.and.returnValue(of(null));

    // Act
    component.onSubmit();

    // Assert
    expect(trainerService.updateTrainerDetails).toHaveBeenCalledWith(component.trainerProfile);
    expect(router.navigate).toHaveBeenCalledWith(['/trainer-profile'], {
      state: { trainer: component.trainerProfile },
    });
  });

  it('should call onSubmit() method when the form is submitted', () => {
    spyOn(component, 'onSubmit');
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);
    expect(component.onSubmit).toHaveBeenCalled();
  });

});
