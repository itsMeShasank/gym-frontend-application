import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutusComponentComponent} from "./aboutus-component/aboutus-component.component";
import {JoinusComponentComponent} from "./joinus-component/joinus-component.component";
import {SigninComponent} from "./signin/signin.component";
import {TrainerRegistrationComponent} from "./trainer-registration/trainer-registration.component";
import {TraineeRegistrationComponent} from "./trainee-registration/trainee-registration.component";

const routes: Routes = [
  {
    path: "",
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }
