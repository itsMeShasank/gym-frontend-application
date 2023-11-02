import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TraineeNavBarComponent} from "./trainee-nav-bar/trainee-nav-bar.component";
import {UpdateTraineeComponentComponent} from "./update-trainee-component/update-trainee-component.component";
import {UpdateTraineePasswordComponent} from "./update-trainee-password/update-trainee-password.component";
import {UpdateTraineeTrainersComponent} from "./update-trainee-trainers/update-trainee-trainers.component";
import {ViewTraineeTrainingsComponent} from "./view-trainee-trainings/view-trainee-trainings.component";
import {TraineeTrainingRequestComponent} from "./trainee-training-request/trainee-training-request.component";
import {TraineeProfileComponent} from "./trainee-profile/trainee-profile.component";

const routes: Routes = [
  {
    path: "",
    component: TraineeProfileComponent
  },
  {
    path: "trainee-home",
    component: TraineeNavBarComponent
  },
  {
    path: "update-trainee-profile",
    component: UpdateTraineeComponentComponent
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
    path: "trainee-trainings",
    component: ViewTraineeTrainingsComponent
  },
  {
    path: "trainee-trainings-request",
    component: TraineeTrainingRequestComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraineeModuleRoutingModule { }
