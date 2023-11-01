import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {TraineeTrainingRequestComponent} from "../trainee-training-request/trainee-training-request.component";

@Component({
  selector: 'app-trainee-nav-bar',
  templateUrl: './trainee-nav-bar.component.html',
  styleUrls: ['./trainee-nav-bar.component.css']
})
export class TraineeNavBarComponent implements OnInit{

  @Input() trainee: any;

  constructor(private router:Router,public dialog: MatDialog) {
  }
  ngOnInit(): void {
    const state = window.history.state;
    this.trainee = state.trainee;
  }


  backToMyProfile() {
    this.router.navigate(['/trainee-profile'],{state:{trainee:this.trainee}});
  }

  redirectToMyTrainings() {
    this.dialog.open(TraineeTrainingRequestComponent, {
      data: this.trainee
    });
  }

  logout() {
    localStorage.clear();
    window.history.state.clear;
    this.router.navigate([""]);
  }
}
