import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-panel-peripherals',
  templateUrl: './side-panel-peripherals.component.html',
  styleUrls: ['./side-panel-peripherals.component.scss']
})
export class SidePanelPeripheralsComponent implements OnInit {
  isSidenavOpen = false; // State for the sidenav

  constructor() {}

  ngOnInit(): void {}

  // Method to open the sidenav
  openSidenav() {
    this.isSidenavOpen = true;
  }

  // Method to close the sidenav
  closeSidenav() {
    this.isSidenavOpen = false;
  }
}
