import {Component, OnInit} from '@angular/core';
import {UserCredentialsUpdate} from "../../model/UserCredentialsUpdate";
import {AccountService} from "../../service/account.service";
import {SnackbarService} from "../../service/snackbar.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-update-trainee-password',
  templateUrl: './update-trainee-password.component.html',
  styleUrls: ['./update-trainee-password.component.css']
})
export class UpdateTraineePasswordComponent implements OnInit {

  userData: UserCredentialsUpdate = {
    userName: "",
    conform_password: "",
    newPassword: "",
    oldPassword: "",
  };

  constructor(private router: Router,private accountService: AccountService, private snackBar: SnackbarService) {
  }

  ngOnInit(): void {
    const state = window.history.state;
    this.userData.userName = state.traineeDetails.userName;
  }

  onSubmit() {
    console.log(this.userData);
    this.accountService.updatePassword(this.userData).subscribe({
      next: () => {
        this.router.navigate(['/home/login']);
        this.snackBar.openSnackBar("Successfully Password updated.", 1000);
      },
      error: (error:any) => {
        if(error.status === 400 )
        this.snackBar.openSnackBar("please make sure old password and new password should be different.", 3000);
      }
    });
  }
}
