import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalUniversalComponent } from '../../components/modal/modal-universal/modal-universal.component';
import { ModalCreateUserAddComponent } from '../../components/modal/modal-create-user-add/modal-create-user-add.component';

@Component({
    selector: 'app-pc-card',
    templateUrl: './pc-card.component.html',
    styleUrls: ['./pc-card.component.scss'],
})
export class PcCardComponent implements OnInit {
    constructor(public dialog: MatDialog) {}

    ngOnInit(): void {}
    openDialog(): void {
        const dialogRef = this.dialog.open(ModalCreateUserAddComponent, {
            // data: { name: 'User Name' }, // You can pass any data here to the modal
            height: '63%',
            width: '50%',
        });

        // Optionally handle the dialog close event and get the result
        dialogRef.afterClosed().subscribe((result) => {
            console.log('Dialog closed, result:', result);
        });
    }
}
