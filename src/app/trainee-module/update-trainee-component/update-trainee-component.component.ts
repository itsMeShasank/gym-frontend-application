import {Component, OnInit} from '@angular/core';
import {TraineeSignup} from "../../model/TraineeSignup";
import {formatDate} from "@angular/common";
import {TraineeService} from "../../service/trainee.service";
import {Router} from "@angular/router";
import {SnackbarService} from "../../service/snackbar.service";

@Component({
  selector: 'app-update-trainee-component',
  templateUrl: './update-trainee-component.component.html',
  styleUrls: ['./update-trainee-component.component.css']
})
export class UpdateTraineeComponentComponent implements OnInit {

  trainee: TraineeSignup = new TraineeSignup();
  date: Date = new Date();

  constructor(private router: Router, private traineeService: TraineeService, private snackBar: SnackbarService) {
  }

  onSubmit() {
    this.traineeService.updateTraineeDetails(this.trainee).subscribe({
      next: () => {
        this.snackBar.openSnackBar("Successfully Profile updated.", 1000);
        this.router.navigate(['/trainee'], {state: {trainee: this.trainee}});
      },
      error: () => {
        this.snackBar.openSnackBar("Profile Not Updated Properly", 1000);
      }
    });
  }

  ngOnInit(): void {
    const state = window.history.state;
    this.trainee = state.trainee;
    const dateOfBirth = new Date(parseInt(this.trainee.dateOfBirth[0]), parseInt(this.trainee.dateOfBirth[1]) - 1, parseInt(this.trainee.dateOfBirth[2]));
    this.trainee.dateOfBirth = formatDate(dateOfBirth, 'yyyy-MM-dd', 'en');
  }
}
