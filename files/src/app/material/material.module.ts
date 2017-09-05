import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdTableModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  StyleModule,
  FullscreenOverlayContainer,
  MdSelectionModule,
  OverlayContainer
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

import { MaterialRoutes } from './material.routing';

import { ManageEntitiesComponent } from './manage-entities/manage-entities.component';
import { NewEntityComponent } from './new-entity/new-entity.component';
import { ManageRolesComponent } from './manage-roles/manage-roles.component';
import { NewRoleComponent } from './new-role/new-role.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ReportMetricsComponent } from './report-metrics/report-metrics.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdTableModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdCoreModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSlideToggleModule,
    MdSliderModule,
    MdSnackBarModule,
    MdSortModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    MdNativeDateModule,
    StyleModule,
    MdNativeDateModule,
    MdSelectionModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule
  ],
  providers: [
    {provide: OverlayContainer, useClass: FullscreenOverlayContainer}
  ],
  declarations: [
    ManageEntitiesComponent,
    NewEntityComponent,
    ManageRolesComponent,
    NewRoleComponent,
    ManageUsersComponent,
    NewUserComponent,
    ReportMetricsComponent
  ],
  entryComponents: [
    ManageEntitiesComponent
   
  ]
})

export class MaterialComponentsModule {}
