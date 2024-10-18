import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ItotPc } from 'app/models/ItotPc';
import { ITOTService } from 'app/services/itot.service';
import * as XLSX from 'xlsx'; // Keep this for XLSX handling

@Component({
    selector: 'app-pc-details',
    templateUrl: './pc-details.component.html',
    styleUrls: ['./pc-details.component.scss'],
})
export class PcDetailsComponent implements OnInit {
    displayedColumns: string[] = [
        'accountable_user',
        'bu',
        'department',
        'date_acquired',
        'inventory_tag',
        'brand',
        'type',
        'model',
        'processor',
        'ram',
        'storage_capacity',
        'storage_type',
        'operating_system',
        'graphics',
        'size',
        'color',
        'serial_no',
        'location',
        'action',
    ];
    dataSource = new MatTableDataSource<any>([]); // Initialize with an empty array
    data: any[] = [];

    constructor(
        private _liveAnnouncer: LiveAnnouncer,
        private itotService: ITOTService
    ) {}

    // Helper function to convert Excel date serial to a string
    private excelDateToString(excelDate: number): string {
        // Check if the value is a valid date
        if (typeof excelDate === 'number') {
            // Adjust for Excel's date system (subtract 25569 to convert to Unix time)
            const date = new Date((excelDate - 25569) * 86400 * 1000);
            return date.toLocaleDateString(); // Format the date as needed (you can customize this)
        }
        return excelDate; // If not a number, return the original value
    }

    // Helper function to replace missing values with 'N/A'
    private replaceMissingValues(row: any[]): any[] {
        return row.map((value) =>
            value === undefined || value === null || value === ''
                ? 'N/A'
                : value
        );
    }

    loadItots(): void {
      this.itotService.getItots().subscribe((result: ItotPc[]) => {
          // After receiving data, assign it to the MatTableDataSource
          this.dataSource = new MatTableDataSource(result);
          
          // Assign the paginator and sort after data is loaded
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      });
  }
  

    onFileChange(event: any) {
        const target: DataTransfer = <DataTransfer>event.target;
        if (target.files.length !== 1)
            throw new Error('Cannot use multiple files');

        const reader: FileReader = new FileReader();
        reader.onload = (e: any) => {
            const binaryData: string = e.target.result;
            const workbook: XLSX.WorkBook = XLSX.read(binaryData, {
                type: 'binary',
            });
            const firstSheetName: string = workbook.SheetNames[0];
            const worksheet: XLSX.WorkSheet = workbook.Sheets[firstSheetName];

            // Get the entire sheet data including headers
            this.data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

            // Process the data to convert Excel date to string for the "ACQ. DATE" column
            this.data = this.data.map((row: any[]) => {
                // Ensure we handle the ACQ. DATE, which is assumed to be at index 3
                row[0] = row[0];
                row[1] = row[1];
                row[2] = row[2];
                row[3] = this.excelDateToString(row[3]); // Convert the Excel date
                row[4] = row[4];
                row[5] = row[5];
                row[6] = row[6];
                row[7] = row[7];
                row[8] = row[8];
                row[9] = row[9];
                row[10] = row[10];
                row[11] = row[11];
                row[12] = row[12];
                row[13] = row[13];
                row[14] = row[14];
                row[15] = row[15];
                row[16] = row[16];
                row[17] = row[17];
                // Replace missing values with 'N/A'
                row = this.replaceMissingValues(row);
                return row;
            });

            // Remove the first row (header row) and update dataSource
            this.dataSource.data = this.data
                .slice(1)
                .map((row: any[]) => this.replaceMissingValues(row)); // Update dataSource, skipping the header
        };

        reader.readAsBinaryString(target.files[0]); // Read XLSX as binary string
    }

    uploadData() {
        if (this.data.length === 0) {
            alert('No data to upload.');
            return;
        }

        // Format the data for upload
        const formattedData = this.data.slice(1).map((row: any[]) => ({
            accountable_user: String(row[0] || 'N/A'), // Convert to string
            bu: String(row[1] || 'N/A'),
            department: String(row[2] || 'N/A'),
            date_acquired: String(this.excelDateToString(row[3])) || 'N/A', // Ensure this is a string
            inventory_tag: String(row[4] || 'N/A'),
            brand: String(row[5] || 'N/A'),
            type: String(row[6] || 'N/A'),
            model: String(row[7] || 'N/A'),
            processor: String(row[8] || 'N/A'),
            ram: String(row[9] || 'N/A'),
            storage_capacity: String(row[10] || 'N/A'), // Convert to string
            storage_type: String(row[11] || 'N/A'),
            operating_system: String(row[12] || 'N/A'),
            graphics: String(row[13] || 'N/A'),
            size: String(row[14] || 'N/A'), // Ensure this is a string
            color: String(row[15] || 'N/A'),
            serial_no: String(row[16] || 'N/A'),
            location: String(row[17] || 'N/A'),
        }));

        // Check the final data structure
        console.log(
            'Data to be uploaded:',
            JSON.stringify(formattedData, null, 2)
        );

        // Send the formatted data to your backend
        this.itotService.uploadExcelData(formattedData).subscribe(
            (response) => {
                console.log('Upload successful:', response);
                alert('Upload successful!');
            },
            (error) => {
                console.error('Upload failed:', error);
                alert('Upload failed. Please try again.');
            }
        );
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    ngOnInit(): void {
        // Any initialization logic can be added here
        this.loadItots();          
    }

    
    ngAfterViewInit() {
        // Ensure paginator is assigned after view initialization
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sortState: Sort) {
        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        } else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }
}
