import { Routes } from '@angular/router';

import { OverallProcessComponent } from './overall-process/overall-process.component';
import { TransportManagerComponent } from './transport-manager/transport-manager.component';
import { ForkliftDriverComponent } from './forklift-driver/forklift-driver.component';


export const TablesRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: 'overall-process',
      component: OverallProcessComponent
    },
    {
      path: 'transport-manager',
      component: TransportManagerComponent
    },
    {
      path: 'forklift-driver',
      component: ForkliftDriverComponent
    }]
  }
];
