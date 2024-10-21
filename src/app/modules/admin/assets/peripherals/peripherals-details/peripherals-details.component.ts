import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ItotPeripheral } from 'app/models/ItotPeripheral';
import { ITOTService } from 'app/services/itot.service';

@Component({
  selector: 'app-peripherals-details',
  templateUrl: './peripherals-details.component.html',
  styleUrls: ['./peripherals-details.component.scss']
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
  
  dataSource = new MatTableDataSource<any>([]); // Initialize with an empty array
  data: any[] = [];

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private itotService: ITOTService
  ) {}

  // Helper function to convert Excel date serial to a string

  // Load data from service
// peripherals-details.component.ts
loadItots(): void {
  this.itotService.getItotPeripherals().subscribe((result: ItotPeripheral[]) => {
    this.dataSource = new MatTableDataSource(result);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  });
}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.loadItots();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // Method to filter based on Inventory Tag
  applyInventoryTagFilter(filterValue: string) {
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      return data.asset_barcode.toLowerCase().includes(filter.toLowerCase());
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
}
