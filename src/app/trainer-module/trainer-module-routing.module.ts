import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TrainerProfileComponent} from "./trainer-profile/trainer-profile.component";
import {TrainerNavBarComponent} from "./trainer-nav-bar/trainer-nav-bar.component";
import {UpdateTrainerComponentComponent} from "./update-trainer-component/update-trainer-component.component";
import {UpdateTrainerPasswordComponent} from "./update-trainer-password/update-trainer-password.component";
import {TrainingRegistrationComponent} from "./training-registration/training-registration.component";
import {ViewTrainerTrainingsComponent} from "./view-trainer-trainings/view-trainer-trainings.component";
import {TrainerTrainingRequestComponent} from "./trainer-training-request/trainer-training-request.component";

const routes: Routes = [
  {
    path: "",
    component: TrainerProfileComponent
  },
  {
    path: "trainer-home",
    component: TrainerNavBarComponent
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
    path: "training-registration",
    component: TrainingRegistrationComponent
  },
  {
    path: "trainer-trainings",
    component: ViewTrainerTrainingsComponent
  },
  {
    path: "trainer-trainings-request",
    component: TrainerTrainingRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerModuleRoutingModule { }
