import {Trainee} from "./Trainee";

export class Trainer {
  constructor(username?:string, firstName?:string, secondName?: string, specialization?:string) {
    this.userName = username;
    this.firstName = firstName;
    this.lastName = secondName;
    this.specialization = specialization;
  }

  userName:string | undefined="";
  firstName:string | undefined="";
  lastName:string | undefined="";
  mail:string="";
  specialization:string | undefined="";
  active = false;
  traineeDetailsList : Array<Trainee>=[];

}
