import {TestBed} from '@angular/core/testing';

import {SnackbarService} from './snackbar.service';
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";

describe('SnackbarServiceService', () => {
  let service: SnackbarService;
  let snackBar: MatSnackBar;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule],
      providers: [SnackbarService],
    });
    service = TestBed.inject(SnackbarService);
    snackBar = TestBed.inject(MatSnackBar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
