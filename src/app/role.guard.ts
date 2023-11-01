import { CanActivateFn } from '@angular/router';
import {GuardService} from "./service/guardService";
import {inject} from "@angular/core";

export const roleGuard: CanActivateFn = (route, state) => {
  return true;
};
