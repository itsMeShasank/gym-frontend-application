import {Component, OnInit} from '@angular/core';
import {TrainerService} from "../../service/trainer.service";
import {Router} from "@angular/router";
import {Trainer} from "../../model/Trainer";
import {SnackbarService} from "../../service/snackbar.service";


@Component({
  selector: 'app-update-trainer-component',
  templateUrl: './update-trainer-component.component.html',
  styleUrls: ['./update-trainer-component.component.css']
})
export class UpdateTrainerComponentComponent implements OnInit {

  trainerProfile: Trainer = new Trainer();

  constructor(private router: Router, private trainerService: TrainerService, private snackBar: SnackbarService) {
  }

  onSubmit() {
    this.trainerService.updateTrainerDetails(this.trainerProfile).subscribe({
      next: () => {
        this.router.navigate(['/trainer'], {state: {trainer: this.trainerProfile}});
      },
      error: () => {
        this.snackBar.openSnackBar("No Profile found with given details", 1000);
      }
    });
  }

  ngOnInit(): void {
    const state = window.history.state;
    this.trainerProfile = state.trainer;
  }
}
