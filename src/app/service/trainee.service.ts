import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Trainee} from "../model/Trainee";
import {TraineeSignup} from "../model/TraineeSignup";
import {TraineeTrainersList} from "../model/TraineeTrainersList";
import {Trainer} from "../model/Trainer";
import {TraineeTrainings} from "../model/traineeTrainings";

@Injectable({
  providedIn: 'root'
})
export class TraineeService {
  constructor(private httpClient: HttpClient) { }
  fetchTrainee:string = "http://localhost:8000/gym-service"
  getTraineeDetails(username:string):Observable<Trainee>{
    return this.httpClient.get<Trainee>(`${this.fetchTrainee}/trainee/fetch-details/${username}`);
  }

  updateTraineeDetails(trainee: TraineeSignup):Observable<any> {
    return this.httpClient.put(`${this.fetchTrainee}/trainee/update-trainee`,trainee);
  }

  getFreeTrainers(username: string):Observable<any> {
    return this.httpClient.get<Trainer>(`${this.fetchTrainee}/trainee/active-trainers/${username}`);
  }

  updateTrainersList(traineeTrainerList: TraineeTrainersList):Observable<any> {
    return this.httpClient.put(`${this.fetchTrainee}/trainee/update-trainees-trainers-list`,traineeTrainerList);
  }

  getTrainings(traineeTrainings: TraineeTrainings):Observable<any> {
    return this.httpClient.post(`${this.fetchTrainee}/trainee-trainings-list`,traineeTrainings);

  }
}
