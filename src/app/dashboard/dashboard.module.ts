import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MdIconModule, MdInputModule, MdCardModule, MdButtonModule, MdListModule, MdProgressBarModule, MdMenuModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { TableFilterComponent } from './../tables/table-filter/table-filter.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    MdIconModule,
    MdCardModule,
    MdButtonModule,
    MdListModule,
    MdProgressBarModule,
    MdMenuModule,
    ChartsModule,
    NgxDatatableModule,
    FlexLayoutModule,
    MdInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    DashboardComponent,
    TableFilterComponent,
    FormComponent,
    TableComponent,
    TabsComponent
  ]
})

export class DashboardModule {}
