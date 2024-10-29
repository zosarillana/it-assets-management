import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryTableComponent } from '../inventory/inventory-table/inventory-table.component';
import { Route, RouterModule } from '@angular/router';
import { ImportAssetsComponent } from '../import/import-assets/import-assets.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AssetImportComponent } from '../import/import-assets/asset-import/asset-import.component';
import { AssetExportComponent } from '../import/import-assets/asset-export/asset-export.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FuseCardModule } from '@fuse/components/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { PcDetailsComponent } from '../pc/pc-details/pc-details.component';
import { PeripheralsDetailsComponent } from '../peripherals/peripherals-details/peripherals-details.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { ImportPeripheralsComponent } from '../import/import-assets/import-peripherals/import-peripherals.component';
import { MatInputModule } from '@angular/material/input';
import { PcCardComponent } from '../cards/pc-card/pc-card.component';
import { UserCardComponent } from '../cards/user-card/user-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { ModalCreateUserAddComponent } from '../components/modal/modal-create-user-add/modal-create-user-add.component';
import { ModalUniversalComponent } from '../components/modal/modal-universal/modal-universal.component';
import { SidePanelPcsComponent } from '../components/side-panel/side-panel-pcs/side-panel-pcs.component';
import { SidePanelPeripheralsComponent } from '../components/side-panel/side-panel-peripherals/side-panel-peripherals.component';
import { MatChipsModule} from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { SharedModule } from 'app/shared/shared.module';
import { FuseHighlightModule } from '@fuse/components/highlight';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsPcCardComponent } from '../cards/pc-card/details-pc-card/details-pc-card.component';

const assetRoute:Route[]=[
  {
    path: 'inventory',
    component: InventoryTableComponent
  },
  {
    path: 'import-assets',
    component: ImportAssetsComponent
  },
  {
    path: 'pc',
    component: PcDetailsComponent
  },
  {
    path: 'peripherals',
    component: PeripheralsDetailsComponent
  },
  {
    path: 'cards/users',
    component: UserCardComponent
  },
  {
    path: 'cards/pcs',
    component: PcCardComponent
  },
  {
    path: 'cards/pcs/details/:id',
    component: DetailsPcCardComponent
  },
];

@NgModule({
  declarations: [
    SidePanelPeripheralsComponent,
    SidePanelPcsComponent,    
    ModalUniversalComponent,
    ModalCreateUserAddComponent,
    PcCardComponent,
    UserCardComponent,
    InventoryTableComponent,
    ImportAssetsComponent,
    ImportPeripheralsComponent,
    AssetImportComponent,
    AssetExportComponent,
    PcDetailsComponent,
    PeripheralsDetailsComponent,
    DetailsPcCardComponent
  ],
  imports: [  
    MatDividerModule,
    SharedModule,
    FuseHighlightModule,   
    MatMomentDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatChipsModule,
    MatAutocompleteModule,    
    MatChipsModule,
    MatStepperModule,  
    ReactiveFormsModule, 
    FormsModule,    
    MatDialogModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    FuseCardModule,
    MatMenuModule,
    MatTooltipModule,
    MatIconModule,
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,  
    RouterModule.forChild(assetRoute)
  ],
  // schemas: [NO_ERRORS_SCHEMA] // Add this line
})
export class AssetsModuleModule { }
