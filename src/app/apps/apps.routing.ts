import { Routes } from '@angular/router';

import { CtcAdrComponent } from './ctc-adr/ctc-adr.component';

export const AppsRoutes: Routes = [{
  path: '',
  children: [{
    path: 'ctc-and-adr',
    component: CtcAdrComponent
  }]
}];
