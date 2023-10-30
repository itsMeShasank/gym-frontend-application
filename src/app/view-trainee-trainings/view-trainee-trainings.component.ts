import {Component, OnInit} from '@angular/core';
import {Trainee} from "../model/Trainee";
import {TrainingDetails} from "../model/TrainingDetails";
import {Router} from "@angular/router";
import {Trainer} from "../model/Trainer";


interface Specialization {
  value:string,
  viewValue:string
}

@Component({
  selector: 'app-view-trainee-trainings',
  templateUrl: './view-trainee-trainings.component.html',
  styleUrls: ['./view-trainee-trainings.component.css']
})
export class ViewTraineeTrainingsComponent implements OnInit{

  specializations: Specialization[] = [
    {value: 'fitness', viewValue: 'fitness'},
    {value: 'yoga', viewValue: 'yoga'},
    {value: 'zumba', viewValue: 'Zumba'},
    {value: 'stretching', viewValue: 'stretching'},
    {value: 'resistance', viewValue: 'resistance'},
  ];

  trainee:Trainee = {
    userName:"",
    mail:"",
    dateOfBirth: "",
    active:true,
    trainersList:[],
    firstName:"",
    address:"",
    lastName:""
  };
  trainerList:Trainer[] = [];
  trainingData: TrainingDetails[] = [];

  displayedColumns: string[] = ['name','date','duration','trainerName','traineeName'];
  ngOnInit(): void {
    const state = window.history.state;
    this.trainee = state.trainee;
    this.trainingData = state.trainings;
  }

  constructor(private router:Router) {}

  goBack() {
    this.router.navigate(['/trainee-profile'],{state:{trainee:this.trainee}});
  }

  onSubmit() {

  }
}
