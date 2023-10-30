export class TraineeTrainersList {
  traineeUserName:string="";
  trainersUserName:string[] = [];

  constructor(userName:string,trainers:string[]) {
    this.traineeUserName = userName;
    this.trainersUserName = trainers;
  }
}
