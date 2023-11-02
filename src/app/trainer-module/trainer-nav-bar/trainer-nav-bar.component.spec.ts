import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TrainerNavBarComponent} from './trainer-nav-bar.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {TrainerTrainingRequestComponent} from "../trainer-training-request/trainer-training-request.component";
import {Trainer} from "../../model/Trainer";

describe('TrainerNavBarComponent', () => {
  let component: TrainerNavBarComponent;
  let fixture: ComponentFixture<TrainerNavBarComponent>;
  let router: jasmine.SpyObj<Router>;
  let dialog: jasmine.SpyObj<MatDialog>;

  beforeEach(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

    TestBed.configureTestingModule({
      declarations: [TrainerNavBarComponent],
      providers: [
        {provide: Router, useValue: routerSpy},
        {provide: MatDialog, useValue: dialogSpy},
      ],
      imports: [MatDialogModule,RouterTestingModule],
    });
    fixture = TestBed.createComponent(TrainerNavBarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    dialog = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });
  it('should navigate to training registration', () => {
    // Arrange
    const trainer = { id: 1, name: 'John' };

    // Act
    component.sendButtonEventToParent();

    // Assert
    expect(router.navigate).toHaveBeenCalledWith(['/training-registration'], {
      state: { trainer: component.trainer },
    });
  });

  it('should navigate to trainer profile', () => {
    // Arrange
    const trainer = { id: 1, name: 'John' };

    // Act
    component.sendToMyProfile();

    // Assert
    expect(router.navigate).toHaveBeenCalledWith(['/trainer-profile'], {
      state: { trainer: component.trainer },
    });
  });

  it('should open TrainerTrainingRequestComponent when redirectToMyTrainings is called', () => {
    const trainerData:Trainer = new Trainer();
    component.trainer = trainerData;
    component.redirectToMyTrainings();
    expect(dialog.open).toHaveBeenCalledWith(TrainerTrainingRequestComponent, {
      data: trainerData,
    });
  });


  it('should open TrainerTrainingRequestComponent dialog', () => {
    // Arrange
    const trainer = { id: 1, name: 'John' };

    // Act
    component.redirectToMyTrainings();

    // Assert
    expect(dialog.open).toHaveBeenCalledWith(jasmine.any(Function), {
      data: component.trainer,
    });
  });

  it('should clear localStorage and navigate to /home when logout is called', () => {
    spyOn(localStorage, 'clear');
    component.logout();
    window.history.state.clear;
    expect(localStorage.clear).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['']);
  });

});
