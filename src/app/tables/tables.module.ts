import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MdInputModule } from '@angular/material';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { TablesRoutes } from './tables.routing';

import { OverallProcessComponent } from './overall-process/overall-process.component';
import { TransportManagerComponent } from './transport-manager/transport-manager.component';
import { ForkliftDriverComponent } from './forklift-driver/forklift-driver.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TablesRoutes),
    MdInputModule,
    NgxDatatableModule
  ],
  declarations: [
    OverallProcessComponent,
    TransportManagerComponent,
    ForkliftDriverComponent
  ]
})

export class TablesModule {}
