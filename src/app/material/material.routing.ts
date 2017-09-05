import { Routes } from '@angular/router';

import { ManageEntitiesComponent } from './manage-entities/manage-entities.component';
import { NewEntityComponent } from './new-entity/new-entity.component';
import { ManageRolesComponent } from './manage-roles/manage-roles.component';
import { NewRoleComponent } from './new-role/new-role.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ReportMetricsComponent } from './report-metrics/report-metrics.component';

export const MaterialRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'manage-entities',
      component: ManageEntitiesComponent
    },{
      path: 'new-entity',
      component: NewEntityComponent
    },{
      path: 'manage-roles',
      component: ManageRolesComponent
    },{
      path: 'new-role',
      component: NewRoleComponent
    },{
      path: 'manage-users',
      component: ManageUsersComponent
    },{
      path: 'new-users',
      component: NewUserComponent
    },{
      path: 'report-metrics',
      component: ReportMetricsComponent
    },]
  }
];
