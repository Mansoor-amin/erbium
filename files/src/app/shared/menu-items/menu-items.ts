import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}


const MENUITEMS = [
  {
    state: '/',
    name: 'Dashboard',
    type: 'link',
    icon: 'explore'
  },
  {
    state: 'apps',
    name: 'APPS',
    type: 'sub',
    icon: 'apps',
    badge: [
      {type: 'red', value: '5'}
    ],
    children: [
      {state: 'ctc-and-adr', name: 'CTC/ADR'}
    ]
  },
  {
    state: 'material',
    name: 'Management',
    type: 'sub',
    icon: 'face',
    children: [
      {state: 'manage-entities', name: 'Manage entities'},
      {state: 'new-entity', name: 'New Entity'},
      {state: 'manage-roles', name: 'Manage roles'},
      {state: 'new-role', name: 'New Role'},
      {state: 'manage-users', name: 'Manage users'},
      {state: 'new-users', name: 'New User'},
      {state: 'report-metrics', name: 'Report Metrics'}
    ]
  },
  {
    state: 'tables',
    name: 'Performance',
    type: 'sub',
    icon: 'equalizer',
    badge: [
      {type: 'blue-grey', value: '8'
      }
    ],
    children: [
      {state: 'fullscreen', name: 'Overall Process'},
      {state: 'editing', name: 'Transport Manager'},
      {state: 'filter', name: 'Forklift Driver'}
    ]
  },
  
  {
    state: 'taskboard',
    name: 'Reports',
    type: 'link',
    icon: 'show_chart',
  },
   {
    state: 'http://primer.nyasha.me/docs',
    name: 'DOCS',
    type: 'extTabLink',
    icon: 'local_library'
  },
  {
    state: 'charts',
    name: 'Support',
    type: 'link',
    icon: 'pages',
  },
  {
    state: 'tables',
    name: 'DATATABLE',
    type: 'sub',
    icon: 'format_line_spacing',
    badge: [
      {type: 'blue-grey', value: '8'
      }
    ],
    children: [
      {state: 'fullscreen', name: 'FULLSCREEN'},
      {state: 'editing', name: 'EDITING'},
      {state: 'filter', name: 'FILTER'},
      {state: 'paging', name: 'PAGING'},
      {state: 'sorting', name: 'SORTING'},
      {state: 'pinning', name: 'PINNING'},
      {state: 'selection', name: 'SELECTION'},
    ]
  },
   {
    state: 'pages',
    name: 'PAGES',
    type: 'sub',
    icon: 'pages',
    children: [
      {state: 'invoice', name: 'INVOICE'},
      {state: 'timeline', name: 'TIMELINE'},
      {state: 'user', name: 'USER'},
      {state: 'blank', name: 'BLANK'},
      {state: 'pricing', name: 'PRICING'},
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  // add(menu: Menu) {
  //   MENUITEMS.push(menu);
  // }
}
