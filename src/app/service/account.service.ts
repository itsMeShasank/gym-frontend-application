import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TrainerSignup} from "../model/TrainerSignup";
import {TraineeSignup} from "../model/TraineeSignup";
import {UserCredentialsUpdate} from "../model/UserCredentialsUpdate";
import {UserCredentials} from "../model/UserCredentials";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl="/gym-service/gym"
  constructor(private httpClient: HttpClient) { }

  sendTraineeDetails(trainee:TraineeSignup): Observable<UserCredentialsUpdate> {
    return this.httpClient.post<UserCredentialsUpdate>(`${this.baseUrl}/trainee/trainee-signup`,trainee);
  }
  sendTrainerDetails(trainer:TrainerSignup): Observable<UserCredentialsUpdate> {
    return this.httpClient.post<UserCredentialsUpdate>(`${this.baseUrl}/trainer/trainer-signup`,trainer);
  }
  verifyLoginCredential(userCredential: UserCredentials):Observable<any> {
    return this.httpClient.post(`/gym-service/authenticate/login`,userCredential,{responseType: 'text'});
  }

  updatePassword(userData: UserCredentialsUpdate):Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/update-password`,userData);
  }

}
