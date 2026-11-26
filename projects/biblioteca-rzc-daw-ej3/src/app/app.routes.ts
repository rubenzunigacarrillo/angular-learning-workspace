import { Routes } from '@angular/router';

import { Inicio } from './pages/inicio/inicio';
import { NoEncontrado } from './pages/no-encontrado/no-encontrado';


export const routes: Routes = [
  {
    path: 'inicio',
    component: Inicio,
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'libros',
    loadComponent: () => import('./pages/libros/libros').then((m) => m.Libros),
  },
  {
    path: 'libros/:id',
    loadComponent: () => import('./pages/libros/components/detalles/detalles').then((m) => m.Detalles),
  },
  {
    path: 'autores',
    loadComponent: () => import('./pages/autores/autores').then((m) => m.Autores),
  },
  {
    path: 'mi-cuenta',
    loadChildren: () => import('./pages/cuenta/app.routes').then((m) => m.ACCOUNT_ROUTES),
  },
  {
    path: '**',
    component: NoEncontrado,
  },
];
