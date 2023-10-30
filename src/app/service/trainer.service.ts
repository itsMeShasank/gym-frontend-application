import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Trainer} from "../model/Trainer";
import {TrainingDetails} from "../model/TrainingDetails";
import {TrainerTrainings} from "../model/TrainerTrainings";

@Injectable({
  providedIn: 'root'
})
export class TrainerService {


  constructor(private httpClient: HttpClient) { }

  fetchTrainer:string = "http://localhost:8000/gym-service"
  getTrainerDetails(username:string):Observable<Trainer>{
    return this.httpClient.get<Trainer>(`${this.fetchTrainer}/trainer/fetch-details/${username}`);
  }
  updateTrainerDetails(trainer: Trainer):Observable<any> {
    return this.httpClient.put(`${this.fetchTrainer}/trainer/update-trainer`,trainer);
  }

  registerTrainingDetails(training:TrainingDetails):Observable<any> {
    return this.httpClient.put(`${this.fetchTrainer}/add-training`,training);
  }

  getTrainings(trainerTrainings: TrainerTrainings):Observable<any> {
    return this.httpClient.post(`${this.fetchTrainer}/trainer-trainings-list`,trainerTrainings);
  }
}
