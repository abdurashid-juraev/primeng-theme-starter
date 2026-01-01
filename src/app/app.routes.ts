import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'showcase',
    loadComponent: () => import('./features/showcase/test-showcase').then((m) => m.TestShowcaseComponent),
  },
  {
    path: '',
    redirectTo: 'showcase',
    pathMatch: 'full',
  },
];
