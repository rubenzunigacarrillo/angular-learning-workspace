import { Routes } from '@angular/router';

import { Inicio } from './inicio/inicio';
import { NoEncontrado } from './no-encontrado/no-encontrado';


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
    loadComponent: () => import('./libros/libros').then((m) => m.Libros),
  },
  {
    path: 'libros/:id',
    loadComponent: () => import('./libros/components/detalles/detalles').then((m) => m.Detalles),
  },
  {
    path: 'autores',
    loadComponent: () => import('./autores/autores').then((m) => m.Autores),
  },
  {
    path: 'mi-cuenta',
    loadChildren: () => import('./cuenta/app.routes').then((m) => m.ACCOUNT_ROUTES),
  },
  {
    path: '**',
    component: NoEncontrado,
  },
];
