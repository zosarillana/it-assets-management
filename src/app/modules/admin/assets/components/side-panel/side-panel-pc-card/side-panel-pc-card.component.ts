import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from 'app/services/card.service';

@Component({
  selector: 'app-side-panel-pc-card',
  templateUrl: './side-panel-pc-card.component.html',
  styleUrls: ['./side-panel-pc-card.component.scss']
})
export class SidePanelPcCardComponent implements OnInit {
  isSidenavOpen = false; // State for the sidenav
  @Input() elementId: string | null = null;
  @Input() cardData: any;

  // cardData: CardPcs[] | null = null; // Property to store fetched data

  constructor(private cardService: CardService, private router: Router) {}

  ngOnInit(): void {}

  openSidenav() {
    this.isSidenavOpen = true;
    console.log('Opening side panel with ID:', this.elementId);
    
    // Fetch the data only if elementId is available
    if (this.elementId) {
      this.cardService.getCardDataId(this.elementId).subscribe(
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