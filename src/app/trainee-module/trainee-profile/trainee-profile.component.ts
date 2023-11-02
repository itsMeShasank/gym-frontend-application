import {Component, OnInit} from '@angular/core';
import {Trainee} from "../../model/Trainee";
import {Router} from "@angular/router";

@Component({
  selector: 'app-trainee-profile',
  templateUrl: './trainee-profile.component.html',
  styleUrls: ['./trainee-profile.component.css']
})
export class TraineeProfileComponent implements OnInit {

  userName: string = "";
  trainee: Trainee = {
    userName: "",
    firstName: "",
    lastName: "",
    mail: "",
    dateOfBirth: "",
    address: "",
    active: false,
    trainersList: []
  }
  displayedColumns: string[] = ['name', 'specialization'];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    const state = window.history.state;
    this.trainee = state.trainee;
  }

  navigatingToUpdatePage() {
    this.router.navigate(['/trainee/update-trainee-profile'], {state: {trainee: this.trainee}});
  }

  navigatingToUpdatePassword() {
    this.router.navigate(['/trainee/update-trainee-password'], {state: {traineeDetails: this.trainee}});
  }

  addTrainersToTrainee() {
    this.router.navigate(['/trainee/update-trainee-trainers'], {state: {trainee: this.trainee}});
  }
}
