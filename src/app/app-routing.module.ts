import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TraineeRegistrationComponent} from "./trainee-registration/trainee-registration.component";
import {SigninComponent} from "./signin/signin.component";
import {AboutusComponentComponent} from "./aboutus-component/aboutus-component.component";
import {JoinusComponentComponent} from "./joinus-component/joinus-component.component";
import {TrainerRegistrationComponent} from "./trainer-registration/trainer-registration.component";
import {TraineeNavBarComponent} from "./trainee-nav-bar/trainee-nav-bar.component";
import {TrainerNavBarComponent} from "./trainer-nav-bar/trainer-nav-bar.component";
import {TraineeProfileComponent} from "./trainee-profile/trainee-profile.component";
import {UpdateTraineeComponentComponent} from "./update-trainee-component/update-trainee-component.component";
import {UpdateTrainerComponentComponent} from "./update-trainer-component/update-trainer-component.component";
import {TrainerProfileComponent} from "./trainer-profile/trainer-profile.component";
import {UpdateTraineePasswordComponent} from "./update-trainee-password/update-trainee-password.component";
import {UpdateTrainerPasswordComponent} from "./update-trainer-password/update-trainer-password.component";
import {UpdateTraineeTrainersComponent} from "./update-trainee-trainers/update-trainee-trainers.component";
import {TrainingRegistrationComponent} from "./training-registration/training-registration.component";
import {ViewTrainerTrainingsComponent} from "./view-trainer-trainings/view-trainer-trainings.component";
import {ViewTraineeTrainingsComponent} from "./view-trainee-trainings/view-trainee-trainings.component";
import {TraineeTrainingRequestComponent} from "./trainee-training-request/trainee-training-request.component";
import {TrainerTrainingRequestComponent} from "./trainer-training-request/trainer-training-request.component";

const routes: Routes = [

  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: AboutusComponentComponent
  },
  {
    path: "joinUs",
    component: JoinusComponentComponent
  },
  {
    path: "login",
    component: SigninComponent
  },
  {
    path: "trainer-registration",
    component: TrainerRegistrationComponent
  },
  {
    path: "trainee-registration",
    component: TraineeRegistrationComponent
  },
  {
    path: "trainee-home",
    component: TraineeNavBarComponent
  },
  {
    path: "trainer-home",
    component: TrainerNavBarComponent
  },
  {
    path: "trainee-profile",
    component: TraineeProfileComponent
  },
  {
    path: "trainer-profile",
    component: TrainerProfileComponent
  },
  {
    path: "update-trainee-profile",
    component: UpdateTraineeComponentComponent
  },
  {
    path: "update-trainer-profile",
    component: UpdateTrainerComponentComponent
  },
  {
    path: "update-trainer-password",
    component: UpdateTrainerPasswordComponent
  },
  {
    path: "update-trainee-password",
    component: UpdateTraineePasswordComponent
  },
  {
    path: "update-trainee-trainers",
    component: UpdateTraineeTrainersComponent
  },
  {
    path: "training-registration",
    component: TrainingRegistrationComponent
  },
  {
    path: "trainer-trainings",
    component: ViewTrainerTrainingsComponent
  },
  {
    path: "trainee-trainings",
    component: ViewTraineeTrainingsComponent
  },
  {
    path: "trainee-trainings-request",
    component: TraineeTrainingRequestComponent
  },
  {
    path: "trainer-trainings-request",
    component: TrainerTrainingRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
