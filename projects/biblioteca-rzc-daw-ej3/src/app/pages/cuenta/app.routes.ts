import { Routes } from '@angular/router';

// Components
import { Cuenta } from './cuenta';
import { authGuard } from '../../core/guards/auth-guard';
import { notsavedGuard } from '../../core/guards/not-saved-guard';
import { setTitle } from '../../app.routes';


export const ACCOUNT_ROUTES: Routes = [
  {
    path: '',
    component: Cuenta,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'perfil', pathMatch: 'full' },
      {
        path: 'perfil',
        title: setTitle('Perfil'),
        loadComponent: () => import('./components/perfil/perfil').then((m) => m.Perfil),
      },
      {
        path: 'prestamos',
        title: setTitle('Prestamos'),
        loadComponent: () => import('./components/prestamos/prestamos').then((m) => m.Prestamos),
      },
      {
        path: 'biblioteca',
        title: setTitle('Biblioteca'),
        loadComponent: () =>
          import('./components/mi-biblioteca/mi-biblioteca').then((m) => m.MiBiblioteca),
      },
      {
        path: 'biblioteca/:id',
        title: setTitle('Editando libro'),
        loadComponent: () => import('./components/editar-libro/editar-libro').then((m) => m.EditarLibro),
        canDeactivate: [notsavedGuard]
      },
    ],
  },
];
