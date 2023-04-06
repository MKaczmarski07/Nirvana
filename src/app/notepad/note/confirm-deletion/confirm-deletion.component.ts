import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-deletion',
  templateUrl: './confirm-deletion.component.html',
  styleUrls: ['./confirm-deletion.component.css'],
})
export class ConfirmDeletionComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmDeletionComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
