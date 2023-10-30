import {Component, OnInit} from '@angular/core';
import {UserCredentials} from "../service/UserCredentials";
import {AccountService} from "../service/account.service";


@Component({
  selector: 'app-update-trainee-password',
  templateUrl: './update-trainee-password.component.html',
  styleUrls: ['./update-trainee-password.component.css']
})
export class UpdateTraineePasswordComponent implements OnInit{

  userData: UserCredentials = {
    userName:"",
    conform_password:"",
    newPassword:"",
    oldPassword:"",
  }
  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    const state = history.state;
    if(state && state.traineeDetails) {
      this.userData.userName = state.traineeDetails.userName;
    }
  }

  onSubmit() {
  console.log(this.userData);
  this.accountService.updatePassword(this.userData).subscribe(data => {
    console.log(data);
  })
  }
}
