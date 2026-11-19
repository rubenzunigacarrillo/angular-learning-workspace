import { Routes } from '@angular/router';

// Custom Components
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
import { Login } from './pages/login/login';

import { pizzaResolver, pizzaTitleResolver } from './resolver/pizza-resolver';

const titleEnd =  '· Pizzería DAW'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    title: `Inicio ${titleEnd}`,
    component: Home,
  },
  {
    path: 'carta',
    title: `Carta ${titleEnd}`,
    loadComponent: () => import('./pages/dishes/dishes').then((m) => m.Dishes),
  },
  {
    path: 'carta/:id',
    title: pizzaTitleResolver,
    resolve: { pizza: pizzaResolver },
    loadComponent: () => import('./pages/details/details').then((m) => m.Details),
  },
  {
    path: 'contacto',
    title: `Contacto ${titleEnd}`,
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  {
    path: 'reservas',
    title: `Reservas ${titleEnd}`,
    loadChildren: () => import('./pages/bookings/bookings.routes').then((m) => m.BOOKING_ROUTES),
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: '**',
    component: NotFound,
  },
];
