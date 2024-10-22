import { Component, OnInit } from '@angular/core';
import { ModalUniversalComponent } from '../../components/modal/modal-universal/modal-universal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  openDialog(): void {
      const dialogRef = this.dialog.open(ModalUniversalComponent, {
          //data: { name: 'User Name' }, // You can pass any data here to the modal
          height: '60%',
          width: '50%',
      });

      // Optionally handle the dialog close event and get the result
      dialogRef.afterClosed().subscribe((result) => {
          console.log('Dialog closed, result:', result);
      });
  }
}
