import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITOTService } from 'app/services/itot.service';

@Component({
  selector: 'app-side-panel-peripherals',
  templateUrl: './side-panel-peripherals.component.html',
  styleUrls: ['./side-panel-peripherals.component.scss']
})
export class SidePanelPeripheralsComponent implements OnInit {
  isSidenavOpen = false; // State for the sidenav
  @Input() elementId: string | null = null;
  @Input() cardData: any;

  // cardData: CardPcs[] | null = null; // Property to store fetched data

  constructor(private service: ITOTService, private router: Router) {}

  ngOnInit(): void {}

  openSidenav() {
    this.isSidenavOpen = true;
    console.log('Opening side panel with ID:', this.elementId);

    if (this.elementId) {
        console.log('Attempting to fetch card data for ID:', this.elementId);
        this.service.getItotPeripheralsId(this.elementId).subscribe(
            (data) => {
                this.cardData = data;
                console.log('Fetched card data:', data);
            },
            (error) => {
                console.error('Error fetching card data:', error);
            }
        );
    }
  }

  viewDetails() {
    this.router.navigate(['assets/cards/pcs/details', this.cardData.id]);
  }

  // Method to close the sidenav
  closeSidenav() {
    this.isSidenavOpen = false;
  }
}
