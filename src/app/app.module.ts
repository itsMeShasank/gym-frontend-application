import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {SigninComponent} from './signin/signin.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";
import {TraineeRegistrationComponent} from './trainee-registration/trainee-registration.component';
import {TrainerRegistrationComponent} from './trainer-registration/trainer-registration.component';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {TraineeProfileComponent} from './trainee-profile/trainee-profile.component';
import {MatTableModule} from "@angular/material/table";
import {SigninNavBarComponent} from './signin-nav-bar/signin-nav-bar.component';
import {FooterComponentComponent} from './footer-component/footer-component.component';
import {JoinusComponentComponent} from './joinus-component/joinus-component.component';
import {AboutusComponentComponent} from './aboutus-component/aboutus-component.component';
import {MatCardModule} from "@angular/material/card";
import {MatNativeDateModule} from "@angular/material/core";
import {TraineeNavBarComponent} from './trainee-nav-bar/trainee-nav-bar.component';
import {TrainerNavBarComponent} from './trainer-nav-bar/trainer-nav-bar.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatRadioModule} from "@angular/material/radio";
import {TrainerProfileComponent} from './trainer-profile/trainer-profile.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {UpdateTraineeComponentComponent} from './update-trainee-component/update-trainee-component.component';
import {UpdateTrainerComponentComponent} from './update-trainer-component/update-trainer-component.component';
import {UpdateTraineePasswordComponent} from './update-trainee-password/update-trainee-password.component';
import {UpdateTrainerPasswordComponent} from './update-trainer-password/update-trainer-password.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {UpdateTraineeTrainersComponent} from './update-trainee-trainers/update-trainee-trainers.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {TrainingRegistrationComponent} from './training-registration/training-registration.component';
import {ViewTrainerTrainingsComponent} from './view-trainer-trainings/view-trainer-trainings.component';
import {ViewTraineeTrainingsComponent} from './view-trainee-trainings/view-trainee-trainings.component';
import {TraineeTrainingRequestComponent} from './trainee-training-request/trainee-training-request.component';
import {MatDialogModule} from "@angular/material/dialog";
import {TrainerTrainingRequestComponent} from './trainer-training-request/trainer-training-request.component';
import {NgOptimizedImage} from "@angular/common";
import {CustomInterceptor} from "./custom.interceptor";
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    TraineeRegistrationComponent,
    TrainerRegistrationComponent,
    NavigationBarComponent,
    TraineeProfileComponent,
    SigninNavBarComponent,
    FooterComponentComponent,
    JoinusComponentComponent,
    AboutusComponentComponent,
    TraineeNavBarComponent,
    TrainerNavBarComponent,
    TrainerProfileComponent,
    UpdateTraineeComponentComponent,
    UpdateTrainerComponentComponent,
    UpdateTraineePasswordComponent,
    UpdateTrainerPasswordComponent,
    UpdateTraineeTrainersComponent,
    TrainingRegistrationComponent,
    ViewTrainerTrainingsComponent,
    ViewTraineeTrainingsComponent,
    TraineeTrainingRequestComponent,
    TrainerTrainingRequestComponent,
    DialogBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatNativeDateModule,
    FormsModule,
    HttpClientModule,
    MatRadioModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatDialogModule,
    NgOptimizedImage,
    MatInputModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
