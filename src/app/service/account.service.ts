import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserCredentails} from "../model/UserCredentails";
import {TrainerSignup} from "../model/TrainerSignup";
import {TraineeSignup} from "../model/TraineeSignup";
import {UserCredentials} from "./UserCredentials";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl="http://localhost:8000/gym-service"
  private loginUrl = "http://localhost:8099/gym-service/authenticate"
  constructor(private httpClient: HttpClient) { }

  sendTraineeDetails(trainee:TraineeSignup): Observable<UserCredentails> {
    return this.httpClient.post<UserCredentails>(`${this.baseUrl}/trainee/trainee-signup`,trainee);
  }
  sendTrainerDetails(trainer:TrainerSignup): Observable<UserCredentails> {
    return this.httpClient.post<UserCredentails>(`${this.baseUrl}/trainer/trainer-signup`,trainer);
  }
  verifyLoginCredential(userCredential: UserCredentails):Observable<any> {
    return this.httpClient.post(`${this.loginUrl}/login`,userCredential,{responseType: 'text'});
  }

  updatePassword(userData: UserCredentials):Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/update-password`,userData);
  }

}
