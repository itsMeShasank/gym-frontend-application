import {Component, OnInit} from '@angular/core';
import {TrainerService} from "../service/trainer.service";
import {Router} from "@angular/router";
import {Trainer} from "../model/Trainer";


interface Specialization {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-update-trainer-component',
  templateUrl: './update-trainer-component.component.html',
  styleUrls: ['./update-trainer-component.component.css']
})
export class UpdateTrainerComponentComponent implements OnInit{

  trainerProfile:Trainer = new Trainer();

  constructor(private router:Router,private trainerService: TrainerService) {
  }


  onSubmit() {
    console.log(this.trainerProfile);
    this.trainerService.updateTrainerDetails(this.trainerProfile).subscribe(data => {
      this.router.navigate(['/trainer-profile'],{state:{trainer:this.trainerProfile}})
    });
  }

  ngOnInit(): void {
    const state = history.state;
    if(state && state.trainer) {
      this.trainerProfile = state.trainer;
    }
  }
}
