import {TrainerSignup} from "./TrainerSignup";

export class TraineeSignup {
  userName?:string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  mail: string | undefined;
  address:string | undefined;
  dateOfBirth: string="";
  active: boolean | undefined;
  trainersList:Array<TrainerSignup>=[];
}
