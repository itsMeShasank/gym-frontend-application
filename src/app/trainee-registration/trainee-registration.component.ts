import {Component} from '@angular/core';
import {AccountService} from "../service/account.service";
import {TraineeSignup} from "../model/TraineeSignup";

@Component({
  selector: 'app-trainee-registration',
  templateUrl: './trainee-registration.component.html',
  styleUrls: ['./trainee-registration.component.css']
})
export class TraineeRegistrationComponent {

  trainee:TraineeSignup = new TraineeSignup();

  constructor(private accountService: AccountService) {
  }
  saveTraineeDetails() {
    console.log(this.trainee);
    const inputDate = this.trainee.dateOfBirth;
    const date = new Date(inputDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    this.accountService.sendTraineeDetails(this.trainee).subscribe(data => {
      console.log(data);
    });

  }
}
