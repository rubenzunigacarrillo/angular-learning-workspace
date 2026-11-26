import { Routes } from '@angular/router';

// Components
import { Cuenta } from './cuenta';
import { Perfil } from './components/perfil/perfil';
import { Prestamos } from './components/prestamos/prestamos';



export const ACCOUNT_ROUTES: Routes = [
  {
    path: '',
    component: Cuenta,
    children: [
      { path: '', redirectTo: 'perfil', pathMatch: 'full'},
      {
        path: 'perfil',
        component: Perfil,
      },
      {
        path: 'prestamos',
        component: Prestamos,
      },
    ],
  },
];
