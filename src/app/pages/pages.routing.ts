import { Routes } from '@angular/router';

import { EditComponent } from './edit/edit.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'user',
      component: EditComponent
    }]
  }
];
