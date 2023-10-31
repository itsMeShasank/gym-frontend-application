import {Component, OnInit} from '@angular/core';
import {UserCredentialsUpdate} from "../model/UserCredentialsUpdate";
import {AccountService} from "../service/account.service";
import {Router} from "@angular/router";
import {SnackbarService} from "../service/snackbar.service";

@Component({
  selector: 'app-update-trainer-password',
  templateUrl: './update-trainer-password.component.html',
  styleUrls: ['./update-trainer-password.component.css']
})
export class UpdateTrainerPasswordComponent implements OnInit {
  userData: UserCredentialsUpdate = {
    userName: "",
    conform_password: "",
    newPassword: "",
    oldPassword: "",
  }

  constructor(private router: Router, private accountService: AccountService, private snackBar: SnackbarService) {
  }

  ngOnInit(): void {
    const state = history.state;
    if (state && state.trainer) {
      this.userData.userName = state.trainer.userName;
    }
  }

  onSubmit() {
    this.accountService.updatePassword(this.userData).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (error:any) => {
        if(error.status === 400 )
          this.snackBar.openSnackBar("please make sure old password and new password should be different.", 3000);
      }
    });
  }
}
