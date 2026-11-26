import { Routes } from '@angular/router';

import { Inicio } from './pages/inicio/inicio';
import { NoEncontrado } from './pages/no-encontrado/no-encontrado';
import { bookResolver, bookTitleResolver } from './core/resolver/book-resolver';


export function setTitle(pageName: string): string {
  return `${pageName} · Biblioteca DAW`
}

export const routes: Routes = [
  {
    path: 'inicio',
    title: setTitle('Inicio'),
    component: Inicio,
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'libros',
    title: setTitle('Libros'),
    loadComponent: () => import('./pages/libros/libros').then((m) => m.Libros),
  },
  {
    path: 'libros/:id',
    title: bookTitleResolver,
    resolve: { book: bookResolver },
    loadComponent: () =>
      import('./pages/libros/components/detalles/detalles').then((m) => m.Detalles),
  },
  {
    path: 'autores',
    title: setTitle('Autores'),
    loadComponent: () => import('./pages/autores/autores').then((m) => m.Autores),
  },
  {
    path: 'mi-cuenta',
    title: setTitle('Mi cuenta'),
    loadChildren: () => import('./pages/cuenta/app.routes').then((m) => m.ACCOUNT_ROUTES),
  },
  {
    path: 'login',
    title: setTitle('Login'),
    loadComponent: () => import('./pages/login/login').then((m) => m.Login),
  },
  {
    path: '**',
    component: NoEncontrado,
  },
];
