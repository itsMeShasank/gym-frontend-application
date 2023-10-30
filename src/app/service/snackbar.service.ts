import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) { }
  openSnackBar(message: string, duration: number = 3000) {
    this.snackBar.open(message, 'Close', {
      duration: duration
    });
  }
}
