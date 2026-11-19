import { Routes } from '@angular/router';

// Custom Components
import { AdminPanel } from './admin-panel/admin-panel';
import { AdminPizzas } from './admin-pizzas/admin-pizzas';
import { EditPizzas } from './edit-pizzas/edit-pizzas';
import { notSavedGuard } from '../../guards/without-saving-guard';


export const ADMIN_ROUTES: Routes = [
  {
    path: 'admin',
    component: AdminPanel,
    data: { rol: 'admin' },
    children: [
      { path: '', redirectTo: 'pizzas', pathMatch: 'full' },
      {
        path: 'pizzas',
        component: AdminPizzas,
      },
      {
        path: 'pizzas/:id',
        component: EditPizzas,
        canDeactivate: [notSavedGuard]
      },
    ],
  },
];
