import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ItotPeripheral } from 'app/models/ItotPeripheral';
import { ITOTService } from 'app/services/itot.service';
import { SidePanelPeripheralsComponent } from '../side-panel-peripherals/side-panel-peripherals.component';
import { PeripheralModalCreateComponent } from '../peripheral-modal-create/peripheral-modal-create.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-peripherals-details',
    templateUrl: './peripherals-details.component.html',
    styleUrls: ['./peripherals-details.component.scss'],
})
export class PeripheralsDetailsComponent implements OnInit {
    displayedColumns: string[] = [
        'asset_barcode',
        'date_acquired',
        'brand',
        'model',
        'peripheral_type',
        'size',
        'color',
        'li_description',
        'serial_no',
        'action',
    ];

    dataSource = new MatTableDataSource<any>([]);
    data: any[] = [];

    constructor(
        private _liveAnnouncer: LiveAnnouncer,
        private itotService: ITOTService,
        public dialog: MatDialog
    ) {}

    loadItots(): void {
        this.itotService
            .getItotPeripherals()
            .subscribe((result: ItotPeripheral[]) => {
                this.dataSource = new MatTableDataSource(result);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            });
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild('sidePanel') sidePanel!: SidePanelPeripheralsComponent;
    
    ngOnInit(): void {
        this.loadItots();
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyInventoryTagFilter(filterValue: string) {
        this.dataSource.filterPredicate = (data: any, filter: string) => {
            return data.asset_barcode
                .toLowerCase()
                .includes(filter.toLowerCase());
        };

        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    openSidePanelWithId(id: string) {
        this.sidePanel.elementId = id; // Pass the ID
        this.sidePanel.openSidenav(); // Open the side panel
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(PeripheralModalCreateComponent, {
            //data: { name: 'User Name' }, // You can pass any data here to the modal
            height: '60%',
            width: '50%',
        });
  
        // Optionally handle the dialog close event and get the result
        dialogRef.afterClosed().subscribe((result) => {
            console.log('Dialog closed, result:', result);
        });
    }

    announceSortChange(sortState: Sort) {
        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        } else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }
}
