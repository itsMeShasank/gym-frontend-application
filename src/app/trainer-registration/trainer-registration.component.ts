import {Component} from '@angular/core';
import {TrainerSignup} from "../model/TrainerSignup";
import {AccountService} from "../service/account.service";

interface Specialization {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-trainer-registration',
  templateUrl: './trainer-registration.component.html',
  styleUrls: ['./trainer-registration.component.css']
})
export class TrainerRegistrationComponent {
  specializations: Specialization[] = [
    {value: 'fitness', viewValue: 'fitness'},
    {value: 'yoga', viewValue: 'yoga'},
    {value: 'Zumba', viewValue: 'Zumba'},
    {value: 'stretching', viewValue: 'stretching'},
    {value: 'resistance', viewValue: 'resistance'},
  ];
  trainer: TrainerSignup = new TrainerSignup();

  constructor(private accountService: AccountService) {
  }
  saveTrainer() {
    console.log(this.trainer);
    this.accountService.sendTrainerDetails(this.trainer).subscribe(data => {
      console.log(data);
    },error => console.log(error));
  }
}
