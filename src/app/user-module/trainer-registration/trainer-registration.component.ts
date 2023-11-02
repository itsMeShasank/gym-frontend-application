import {Component} from '@angular/core';
import {TrainerSignup} from "../../model/TrainerSignup";
import {AccountService} from "../../service/account.service";
import {SnackbarService} from "../../service/snackbar.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogBoxComponent} from "../dialog-box/dialog-box.component";

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

  constructor(private accountService: AccountService, private snackBar: SnackbarService, public dialog: MatDialog) {
  }
  saveTrainer() {
    console.log(this.trainer);
    this.accountService.sendTrainerDetails(this.trainer).subscribe({
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
