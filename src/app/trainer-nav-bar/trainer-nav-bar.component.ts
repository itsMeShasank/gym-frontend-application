import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {TrainerTrainingRequestComponent} from "../trainer-training-request/trainer-training-request.component";

@Component({
  selector: 'app-trainer-nav-bar',
  templateUrl: './trainer-nav-bar.component.html',
  styleUrls: ['./trainer-nav-bar.component.css']
})
export class TrainerNavBarComponent implements OnInit{

  @Input() trainer :any;

  constructor(private router:Router,public dialog: MatDialog) {
  }

  sendButtonEventToParent() {
    this.router.navigate(["/training-registration"],{state: {trainer:this.trainer}});
  }

  ngOnInit(): void {
    const state = window.history.state;
    this.trainer = state.trainer;
  }

  sendToMyProfile() {
    this.router.navigate(["/trainer-profile"],{state: {trainer:this.trainer}});
  }

  redirectToMyTrainings() {
    this.dialog.open(TrainerTrainingRequestComponent, {
      data: this.trainer
    });
  }

  logout() {
    localStorage.clear();
    window.history.state.clear;
    this.router.navigate([""]);
  }
}
