import {Component, OnInit} from '@angular/core';
import {Trainer} from "../model/Trainer";
import {TrainingDetails} from "../model/TrainingDetails";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-trainer-trainings',
  templateUrl: './view-trainer-trainings.component.html',
  styleUrls: ['./view-trainer-trainings.component.css']
})
export class ViewTrainerTrainingsComponent implements OnInit {

  trainingData: TrainingDetails[] = [];
  displayedColumns: string[] = ['name', 'date', 'duration', 'trainerName', 'traineeName']
  trainer: Trainer = new Trainer();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    const state = window.history.state;
    this.trainer = state.trainer;
    this.trainingData = state.trainings;
  }

  goBack() {
    this.router.navigate(['/trainer-profile'], {state: {trainer: this.trainer}});
  }
}
