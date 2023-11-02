import {Component} from '@angular/core';
import {AccountService} from "../../service/account.service";
import {TraineeSignup} from "../../model/TraineeSignup";
import {SnackbarService} from "../../service/snackbar.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogBoxComponent} from "../dialog-box/dialog-box.component";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-trainee-registration',
  templateUrl: './trainee-registration.component.html',
  styleUrls: ['./trainee-registration.component.css']
})
export class TraineeRegistrationComponent {

  trainee: TraineeSignup = new TraineeSignup();

  constructor(private accountService: AccountService, private snackBar: SnackbarService, public dialog: MatDialog) {
  }

  saveTraineeDetails() {
    console.log(this.trainee);
    const inputDate = this.trainee.dateOfBirth;
    const date = new Date(inputDate);
    date.setMonth(date.getMonth()+1);
    this.trainee.dateOfBirth = formatDate(date, 'yyyy-MM-dd', 'en');

    this.accountService.sendTraineeDetails(this.trainee).subscribe({
      next: (userCredential: any) => {
        this.snackBar.openSnackBar("Successfully Account Created.", 1000);
        this.dialog.open(DialogBoxComponent, {
          data: {username: userCredential.userName, password: userCredential.password}
        });
      },
      error: () => {
        this.snackBar.openSnackBar("Account Not yet Created.", 1000);
      }
    });

  }
}
