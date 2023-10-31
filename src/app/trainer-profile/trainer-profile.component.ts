import {Component, OnInit} from '@angular/core';
import {Trainer} from "../model/Trainer";
import {Router} from "@angular/router";


@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.component.html',
  styleUrls: ['./trainer-profile.component.css']
})
export class TrainerProfileComponent implements OnInit {

  userName: string = "";
  trainer: Trainer = new Trainer();
  displayedColumns: string[] = ['name', 'mail'];

  ngOnInit(): void {
    const state = window.history.state;
    this.trainer = state.trainer;
  }

  constructor(private router: Router) {
  }

  navigatingToUpdatePage() {
    this.router.navigate(['/update-trainer-profile'], {state: {trainer: this.trainer}});
  }

  navigatingToUpdatePassword() {
    this.router.navigate(['/update-trainer-password'], {state: {trainer: this.trainer}});
  }

}
