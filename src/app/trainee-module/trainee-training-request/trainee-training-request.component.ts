import {Component, Inject, OnInit} from '@angular/core';
import {Trainee} from "../../model/Trainee";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {TraineeService} from "../../service/trainee.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {TrainerSignup} from "../../model/TrainerSignup";
import {TraineeTrainings} from "../../model/traineeTrainings";
import {formatDate} from "@angular/common";
import {TrainingDetails} from "../../model/TrainingDetails";


@Component({
  selector: 'app-trainee-training-request',
  templateUrl: './trainee-training-request.component.html',
  styleUrls: ['./trainee-training-request.component.css']
})
export class TraineeTrainingRequestComponent implements OnInit {
  trainingForm: any;
  trainingList: string[] = [];
  trainersList: TrainerSignup[] = [];

  trainee: Trainee = {
    userName: "",
    firstName: "",
    lastName: "",
    mail: "",
    dateOfBirth: "",
    address: "",
    active: false,
    trainersList: []
  };

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private traineeService: TraineeService, private snackBar: MatSnackBar,
              private router: Router) {

    if (data) {
      this.trainee = data;
    }

    if (this.trainee.trainersList) {
      this.trainersList = this.trainee.trainersList;
    }

    if (this.trainee.trainersList) {
      for (const trainer of this.trainee.trainersList) {
        const training = trainer.specialization;
        if (!this.trainingList.includes(<string>training)) {
          if (training != null) {
            this.trainingList.push(training);
          }
        }
      }
    }

    this.trainingForm = this.fb.group({
      traineeName: [{value: '', disabled: true}, Validators.required],
      trainerToggle: [false],
      trainerName: [{value: '', disabled: true}, Validators.required],
      range: new FormGroup({
        start: new FormControl<Date | null>({value: null, disabled: true}),
        end: new FormControl<Date | null>({value: null, disabled: true}),
      }), // Set the initial disabled state
      dateToggle: [false],
      trainingType: [{value: null, disabled: true}, Validators.required],
      trainingToggle: [false],
    });

    this.trainingForm.get('trainerToggle')?.valueChanges.subscribe((value: any) => {
      if (value) {
        this.trainingForm.get('trainerName')?.enable();
        this.trainingForm.get('trainingType')?.disable();
        this.trainingForm.get('trainingToggle')?.setValue(false);
      } else {
        this.trainingForm.get('trainerName')?.disable();
        this.trainingForm.get('trainerName')?.setValue(''); // Reset the trainerName value
      }
    });

    this.trainingForm.get('dateToggle')?.valueChanges.subscribe((value: any) => {
      if (value) {
        this.trainingForm.get('range')?.enable();
      } else {
        this.trainingForm.get('range')?.disable();
      }
    });

    this.trainingForm.get('trainingToggle')?.valueChanges.subscribe((value: any) => {
      if (value) {
        this.trainingForm.get('trainingType')?.enable();
        this.trainingForm.get('trainerName')?.disable();
        this.trainingForm.get('trainerToggle')?.setValue(false);
      } else {
        this.trainingForm.get('trainingType')?.disable();
      }
    });

    this.trainingForm.get('traineeName')?.setValue(this.trainee.userName);
  }

  onSubmit() {
    const formValues = this.trainingForm.value;

    let traineeTrainings: TraineeTrainings = new TraineeTrainings();
    traineeTrainings.traineeUserName = this.trainee.userName;

    if (this.trainingForm.value.trainerToggle) {
      traineeTrainings.trainerName = this.trainingForm.value.trainerName;
      console.log("Trainer Chosen " + traineeTrainings.trainerName);
    }

    if (this.trainingForm.value.dateToggle) {
      const startDate = this.trainingForm.get('range.start')?.value;
      const endDate = this.trainingForm.get('range.end')?.value;
      if (startDate && endDate) {
        const formattedStartDate = formatDate(startDate, 'yyyy-MM-dd', 'en');
        const formattedEndDate = formatDate(endDate, 'yyyy-MM-dd', 'en');
        traineeTrainings.startDate = formattedStartDate;
        traineeTrainings.endDate = formattedEndDate;
      }
      console.log("Dates Chosen " + traineeTrainings.startDate + "  " + traineeTrainings.endDate);
    }

    if (this.trainingForm.value.trainingToggle) {
      traineeTrainings.trainingType = this.trainingForm.value.trainingType;
    }

    console.log(traineeTrainings);

    this.traineeService.getTrainings(traineeTrainings).subscribe(value => {
      console.log(value);
      if (value.errorMessage) {
        this.snackBar.open("Please Check Inputs and try Again!", "Ok");
      } else {
        let trainingsDetails: TrainingDetails[] = value;
        if (trainingsDetails.length > 0)
          this.router.navigate(['/trainee/trainee-trainings'], {state: {trainings: trainingsDetails, trainee: this.trainee}});
        else
          this.snackBar.open("No Training Records found", "Ok");
      }
    });
  }

  ngOnInit(): void {
    const state = window.history.state;
    this.trainee = state.trainee;
  }
}
