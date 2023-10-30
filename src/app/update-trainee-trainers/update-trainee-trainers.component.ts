import {Component, OnInit} from '@angular/core';
import {Trainee} from "../model/Trainee";
import {SelectionModel} from "@angular/cdk/collections";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {TraineeService} from "../service/trainee.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Trainer} from "../model/Trainer";
import {TraineeTrainersList} from "../model/TraineeTrainersList";

@Component({
  selector: 'app-update-trainee-trainers',
  templateUrl: './update-trainee-trainers.component.html',
  styleUrls: ['./update-trainee-trainers.component.css']
})
export class UpdateTraineeTrainersComponent implements OnInit{

  displayedColumns: string[] = ['select', 'username', 'firstName', 'specialization'];


  trainee: Trainee = {
    userName:"",
    mail:"",
    dateOfBirth: "",
    active:true,
    trainersList:[],
    firstName:"",
    address:"",
    lastName:""
  }
  existingTrainerProfiles: Trainer[] = [];


  dataSource = new MatTableDataSource<Trainer>();
  selection = new SelectionModel<Trainer>(true, []);

  loading = true;
  traineeFirstName: any;

  constructor(private router: Router, private traineeService:TraineeService, private _snackBar: MatSnackBar) {
  }
  ngOnInit(): void {

    const state = history.state;
    if (state && state.trainee) {
      this.trainee = state.trainee;
      this.traineeFirstName = this.trainee.firstName;
      if (this.trainee.trainersList) {
        for (const trainer of this.trainee.trainersList) {
          this.existingTrainerProfiles.push(new Trainer(trainer.userName, trainer.firstName, trainer.lastName, trainer.specialization));
        }
      }


      this.fetchFreeTrainers(this.trainee.userName);
      //this.trainerProfiles = this.traineeProfile.trainersList;
      console.log('Received traineeProfile data:', this.trainee);
      // You can now use this.traineeProfile in your component
    } else {
      console.log('No traineeProfile data received.');
    }

  }

  fetchFreeTrainers(username: string){
    this.traineeService.getFreeTrainers(username).subscribe(value => {
      console.log(value+" vachae")
      for (const trainer of this.existingTrainerProfiles) {
        this.dataSource.data.push(trainer);
        this.selection.select(trainer);
      }

      // Loop through received trainers and add them to dataSource
      for (const trainer of value) {
        this.dataSource.data.push(trainer);
      }


      this.loading = false;
    })
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }


  checkboxLabel(row?: Trainer): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.userName}`;
  }

  saveSelectedItems() {
    const selectedElements = this.selection.selected;


    console.log('Selected Elements:');
    let trainers: string[] = [];
    if (selectedElements.length > 0) {
      for (const element of selectedElements) {
        console.log(`Position: ${element.userName}, Name: ${element.firstName}, Weight: ${element.specialization}`);
        if (element.userName != null) {
          trainers.push(element.userName);
        }
      }
      let traineeTrainerList = new TraineeTrainersList(this.trainee.userName, trainers);

      this.traineeService.updateTrainersList(traineeTrainerList).subscribe(() => {
        this.openSnackBar();
        this.router.navigate(['']);
      })

    } else {
      console.log("Please select at least one element");
    }
  }
  openSnackBar() {
    this._snackBar.open("Successfully Updated Trainers, Please Login Again", "OK");
  }

}
