import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MdToolbarModule,
  MdIconModule,
  MdCardModule,
  MdInputModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdListModule, MdGridListModule,
  MdMenuModule,
  MdSidenavModule,
  MdProgressBarModule,
  MdTabsModule,
  MdDialogModule,
  MdExpansionModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppsRoutes } from './apps.routing';
import { SharedModule } from '../shared/shared.module';

import { CtcAdrComponent } from './ctc-adr/ctc-adr.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(AppsRoutes),
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdListModule,
    MdGridListModule,
    MdMenuModule,
    MdSidenavModule,
    MdProgressBarModule,
    MdTabsModule,
    MdDialogModule,
    MdExpansionModule,
    CalendarModule.forRoot(),
    FlexLayoutModule,
    ChartsModule
  ],
  declarations: [
    CtcAdrComponent
  ],
  entryComponents: [ CtcAdrComponent ],
})

export class AppsModule {}
