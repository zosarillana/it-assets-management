import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCreateUserAddComponent } from '../../components/modal/modal-create-user-add/modal-create-user-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { CardService } from 'app/services/card.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { CardPcs } from 'app/models/Card';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { SidePanelPeripheralsComponent } from '../../components/side-panel/side-panel-peripherals/side-panel-peripherals.component';

@Component({
    selector: 'app-pc-card',
    templateUrl: './pc-card.component.html',
    styleUrls: ['./pc-card.component.scss'],
})
export class PcCardComponent implements OnInit {
    displayedColumns: string[] = [
        'pc_assetId',
        'emp',
        'emp_id',
        'date_assigned',
        'history',
        'serial_no',
        'action',
    ];

    dataSource = new MatTableDataSource<any>([]);
    data: any[] = [];

    constructor(
        public dialog: MatDialog,
        private cardService: CardService,
        private _liveAnnouncer: LiveAnnouncer
    ) {}

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild('sidePanel') sidePanel!: SidePanelPeripheralsComponent;
    
    ngOnInit(): void {
        this.loadCards();
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    
    loadCards(): void {
        this.cardService.getCardData().subscribe((result: CardPcs[]) => {
            this.dataSource = new MatTableDataSource(result);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }

    applyInventoryTagFilter(filterValue: string) {
        this.dataSource.filterPredicate = (data: any, filter: string) => {
            return data.asset_barcode
                .toLowerCase()
                .includes(filter.toLowerCase());
        };
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    announceSortChange(sortState: Sort) {
        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        } else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }

    openSidePanelWithId(id: string) {
        this.sidePanel.elementId = id; // Pass the ID
        this.sidePanel.openSidenav(); // Open the side panel
    }

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
