import { Routes } from '@angular/router';

import { EditComponent } from './edit/edit.component';
import { TabsComponent } from './tabs/tabs.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'user',
      component: EditComponent
    },{
      path: 'tabs',
      component: TabsComponent
    }]
  }
];
