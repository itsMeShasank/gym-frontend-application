import {Component, OnInit} from '@angular/core';
import {UserCredentials} from "../service/UserCredentials";
import {AccountService} from "../service/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-trainer-password',
  templateUrl: './update-trainer-password.component.html',
  styleUrls: ['./update-trainer-password.component.css']
})
export class UpdateTrainerPasswordComponent implements  OnInit{
  userData: UserCredentials = {
    userName:"",
    conform_password:"",
    newPassword:"",
    oldPassword:"",
  }
  constructor(private router:Router,private accountService: AccountService) {
  }

  ngOnInit(): void {
    const state = history.state;
    if(state && state.trainer) {
      this.userData.userName = state.trainer.userName;
    }
  }

  onSubmit() {
    this.accountService.updatePassword(this.userData).subscribe(data => {
      this.router.navigate(['/login']);
    })
  }
}
