import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-universal',
  templateUrl: './modal-universal.component.html',
  styleUrls: ['./modal-universal.component.scss']
})
export class ModalUniversalComponent implements OnInit {

  animal: string = ''; // Declare animal property

  constructor(
    public dialogRef: MatDialogRef<ModalUniversalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string } // Inject MAT_DIALOG_DATA to access the passed data
  ) { }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close(); // Close dialog without returning any data
  }

  onOkClick(): void {
    this.dialogRef.close(this.animal); // Close dialog and return the entered animal
  }
}
