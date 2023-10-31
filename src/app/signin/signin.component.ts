import {Component} from '@angular/core';
import {AccountService} from "../service/account.service";
import {Router} from "@angular/router";
import {SnackbarService} from "../service/snackbar.service";
import {TrainerService} from "../service/trainer.service";
import {TraineeService} from "../service/trainee.service";
import {Trainer} from "../model/Trainer";
import {UserCredentials} from "../model/UserCredentials";
import {GuardService} from "../service/guardService";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  userCredential: UserCredentials = new UserCredentials();
  userType: string = "";
  trainee: any;
  trainer: Trainer = new Trainer();

  constructor(private guardService: GuardService,private accountService: AccountService, private traineeService: TraineeService, private trainerService: TrainerService, private router: Router, private snackBar: SnackbarService) {
    localStorage.clear();
  }


  verifyLoginDetails() {
    this.accountService.verifyLoginCredential(this.userCredential).subscribe({
      next: (tokenDetails: any) => {
        localStorage.setItem('token', tokenDetails);
        if (this.userType === "Trainee") {
          this.traineeService.getTraineeDetails(this.userCredential.userName).subscribe({
            next: (trainee: any) => {
              this.guardService.setUserRole(2);
              this.trainee = trainee;
              this.router.navigate(['/trainee-profile'], {state: {trainee: this.trainee}});
            },
            error: () => {
              this.snackBar.openSnackBar("No Trainee Found With given Credentials", 1000);
            }
          });
        } else {
          this.trainerService.getTrainerDetails(this.userCredential.userName).subscribe({
            next: (trainer: any) => {
              this.guardService.setUserRole(1);
              this.trainer = trainer;
              this.router.navigate(['/trainer-profile'], {state: {trainer: this.trainer}});
            },
            error: () => {
              this.snackBar.openSnackBar("No Trainer Found With given Credentials", 1000);
            }
          });

        }
      },
      error: () => {
        this.snackBar.openSnackBar("Bad Credentials", 1000);
      }
    });
  }
}
