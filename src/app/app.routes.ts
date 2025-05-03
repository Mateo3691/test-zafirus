import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'detail',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    loadComponent: () => import('./features/characters/list/list.page').then( m => m.ListPage)
  },
  {
    path: 'detail/:name',
    loadComponent: () => import('./features/characters/detail/detail.page').then( m => m.DetailPage)
  },
  {
    path: '**',
    redirectTo: 'list',
    pathMatch: 'full',
  },
];
