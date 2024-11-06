import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ITOTService } from 'app/services/itot.service';

@Component({
  selector: 'app-side-panel-peripherals-edit',
  templateUrl: './side-panel-peripherals-edit.component.html',
  styleUrls: ['./side-panel-peripherals-edit.component.scss']
})
export class SidePanelPeripheralsEditComponent implements OnInit {
  isSidenavOpen = false; // State for the main sidenav
  isEditSidenavOpen = false; // State for the edit sidenav
  @Input() editData: any; // Receive the data to edit
  @Output() save = new EventEmitter<any>(); // Emit save event
  @Output() close = new EventEmitter<void>(); // Emit close event

  constructor(private service: ITOTService) {}

  ngOnInit(): void {}

  // openSidenavEdit() {
  //   this.isSidenavOpen = true;
  //   console.log('Opening side panel with ID:', this.editData);

  //   if (this.editData) {
  //     console.log('Attempting to fetch card data for ID:', this.editData);
  //     this.service.getItotPeripheralsId(this.editData).subscribe(
  //       (data) => {
  //         this.editData = data;
  //         console.log('Fetched card data:', data);
  //       },
  //       (error) => {
  //         console.error('Error fetching card data:', error);
  //       }
  //     );
  //   }
  // }

  // Method to save changes
  saveChanges() {
    console.log('Saving changes for:', this.editData);
    // this.service.updateItotPeripheral(this.editData.id, this.editData).subscribe(
      // () => {
      //   console.log('Changes saved successfully');
      //   this.save.emit(this.editData); // Emit the saved data
      // },
      // (error) => {
      //   console.error('Error saving changes:', error);
      // }
    // );
  }

  // Method to close the edit side panel
  closeEditSidenav() {
    this.close.emit(); // Emit close event
  }
}
