import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {traineeGuard} from "./trainee.guard";
import {trainerGuard} from "./trainer.guard";

const routes: Routes = [

  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: () => import("src/app/user-module/user-module.module").then((m) => m.UserModuleModule)
  },
  {
    path: "trainee",
    loadChildren: () => import("src/app/trainee-module/trainee-module.module").then((m) => m.TraineeModuleModule),
    canActivate: [traineeGuard],
  },
  {
    path: "trainer",
    loadChildren: () => import("src/app/trainer-module/trainer-module.module").then((m) => m.TrainerModuleModule),
    canActivate: [trainerGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
