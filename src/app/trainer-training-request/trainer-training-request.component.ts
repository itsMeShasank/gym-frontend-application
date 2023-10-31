import {Component, Inject} from '@angular/core';
import {Trainee} from "../model/Trainee";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {TrainerService} from "../service/trainer.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {Trainer} from "../model/Trainer";
import {TrainerTrainings} from "../model/TrainerTrainings";
import {formatDate} from "@angular/common";
import {TrainingDetails} from "../model/TrainingDetails";

@Component({
  selector: 'app-trainer-training-request',
  templateUrl: './trainer-training-request.component.html',
  styleUrls: ['./trainer-training-request.component.css']
})
export class TrainerTrainingRequestComponent {
  trainingForm: any;
  traineesList: Trainee[] = [];
  trainer: Trainer = new Trainer();

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private trainerService: TrainerService, private snackBar: MatSnackBar,
              private router: Router) {

    if (data) {
      this.trainer = data;
    }

    if (this.trainer.traineeDetailsList) {
      this.traineesList = this.trainer.traineeDetailsList;
    }


    this.trainingForm = this.fb.group({
      trainerName: [{value: '', disabled: true}, Validators.required],
      traineeName: [{value: '', disabled: true}, Validators.required],
      traineeToggle: [false],
      range: new FormGroup({
        start: new FormControl<Date | null>({value: null, disabled: true}),
        end: new FormControl<Date | null>({value: null, disabled: true}),
      }),
      dateToggle: [false]
    });

    this.trainingForm.get('traineeToggle')?.valueChanges.subscribe((value: any) => {
      if (value) {
        this.trainingForm.get('traineeName')?.enable();
      } else {
        this.trainingForm.get('traineeName')?.disable();
      }
    });

    this.trainingForm.get('dateToggle')?.valueChanges.subscribe((value: any) => {
      if (value) {
        this.trainingForm.get('range')?.enable();
      } else {
        this.trainingForm.get('range')?.disable();
      }
    });

    this.trainingForm.get('trainerName')?.setValue(this.trainer.userName);
  }

  onSubmit() {

    const formValues = this.trainingForm.value;

    let trainerTrainings: TrainerTrainings = new TrainerTrainings();
    trainerTrainings.trainerUserName = this.trainer.userName;

    if (this.trainingForm.value.traineeToggle) {
      trainerTrainings.traineeUserName = this.trainingForm.value.traineeName;
      console.log("Trainer Chosen " + trainerTrainings.traineeUserName);
    }

    console.log(JSON.stringify(this.trainer) + "from reqeust box trainer")

    if (this.trainingForm.value.dateToggle) {
      const startDate = this.trainingForm.get('range.start')?.value;
      const endDate = this.trainingForm.get('range.end')?.value;
      if (startDate && endDate) {
        const formattedStartDate = formatDate(startDate, 'yyyy-MM-dd', 'en');
        const formattedEndDate = formatDate(endDate, 'yyyy-MM-dd', 'en');
        trainerTrainings.startDate = formattedStartDate;
        trainerTrainings.endDate = formattedEndDate;
      }
      console.log("Dates Chosen " + trainerTrainings.startDate + "  " + trainerTrainings.endDate);
    }


    this.trainerService.getTrainings(trainerTrainings).subscribe({
      next: (value:any) => {
        let trainingsDetails: TrainingDetails[] = value;
        if (trainingsDetails.length > 0)
          this.router.navigate(['/trainer-trainings'], {state: {trainings: trainingsDetails, trainer: this.trainer}});
        else
          this.snackBar.open("No Training Records found", "Ok");
      },
      error: () => {
        this.snackBar.open("Please Check Inputs and try Again!", "Ok");
      }
    });

  }
}
