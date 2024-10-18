import { NgModule } from '@angular/core';
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
];

@NgModule({
  declarations: [
    
    InventoryTableComponent,
    ImportAssetsComponent,
    ImportPeripheralsComponent,
    AssetImportComponent,
    AssetExportComponent,
    PcDetailsComponent,
    PeripheralsDetailsComponent
  ],
  imports: [
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
    RouterModule.forChild(assetRoute)
  ]
})
export class AssetsModuleModule { }
