import {Component, OnInit} from '@angular/core';
import {TraineeSignup} from "../model/TraineeSignup";
import {formatDate} from "@angular/common";
import {TraineeService} from "../service/trainee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-trainee-component',
  templateUrl: './update-trainee-component.component.html',
  styleUrls: ['./update-trainee-component.component.css']
})
export class UpdateTraineeComponentComponent implements OnInit{

  trainee:TraineeSignup = new TraineeSignup();
  date:Date = new Date();
  constructor(private router:Router,private traineeService: TraineeService) {}
  onSubmit() {
    this.traineeService.updateTraineeDetails(this.trainee).subscribe(data => {
      this.router.navigate(['/trainee-profile'],{state:{trainee:this.trainee}});
    });
  }

  ngOnInit(): void {
    const state = history.state;
    if(state && state.trainee) {
      this.trainee = state.trainee;
    }
     const dateOfBirth = new Date(parseInt(this.trainee.dateOfBirth[0]),parseInt(this.trainee.dateOfBirth[1])-1,parseInt(this.trainee.dateOfBirth[2]));
    this.trainee.dateOfBirth = formatDate(dateOfBirth,'yyyy-MM-dd','en');
  }
}
