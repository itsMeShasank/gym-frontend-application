import {Component, OnInit} from '@angular/core';
import {TrainingDetails} from "../model/TrainingDetails";
import {Trainer} from "../model/Trainer";
import {Router} from "@angular/router";
import {TrainerService} from "../service/trainer.service";

@Component({
  selector: 'app-training-registration',
  templateUrl: './training-registration.component.html',
  styleUrls: ['./training-registration.component.css']
})
export class TrainingRegistrationComponent implements OnInit{

  trainingDetails: TrainingDetails = new TrainingDetails();
  trainer = new Trainer();
  traineeUserName: any;
  constructor(private router:Router,private trainerService:TrainerService) {
  }
  saveTraining() {
    this.trainingDetails.trainerUserName = this.trainer.userName;
    this.trainingDetails.trainingType = this.trainer.specialization;
    this.trainingDetails.traineeUserName = this.traineeUserName;
    console.log(this.trainingDetails);
    this.trainerService.registerTrainingDetails(this.trainingDetails).subscribe({
      next:() =>{
        this.router.navigate(['/trainer-profile'],{state:{trainer:this.trainer}});
      },
      error: ()=> {
      console.log("please provide proper information");
    }
    });
  }

  ngOnInit(): void {
    const state = window.history.state;
    this.trainer = state.trainer;

  }
}
