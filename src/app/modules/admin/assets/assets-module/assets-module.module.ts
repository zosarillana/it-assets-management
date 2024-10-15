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

const assetsInventory:Route[]=[
  {
    path: 'inventory',
    component: InventoryTableComponent
  },
  {
    path: 'import-assets',
    component: ImportAssetsComponent
  },
];

@NgModule({
  declarations: [
    InventoryTableComponent,
    ImportAssetsComponent,
    AssetImportComponent,
    AssetExportComponent
  ],
  imports: [
    MatIconModule,
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterModule.forChild(assetsInventory)
  ]
})
export class AssetsModuleModule { }
