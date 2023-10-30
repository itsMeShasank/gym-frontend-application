import {TrainerSignup} from "./TrainerSignup";

export interface Trainee {
    userName:string;
    firstName:string;
    lastName:string;
    mail:string;
    dateOfBirth:string;
    address: string;
    active: boolean;
    trainersList: Array<TrainerSignup>;
}
