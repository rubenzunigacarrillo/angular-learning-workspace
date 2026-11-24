import { Routes } from '@angular/router';

// Custom Components
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
import { Login } from './pages/login/login';

import { pizzaResolver, pizzaTitleResolver } from './resolver/pizza-resolver';

const titleEnd =  '· Pizzería DAW'

function getTitle(name:string, sufix:string  = titleEnd) {
  return `${name} ${sufix}`
}

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    title: getTitle('Inicio'),
    component: Home,
  },
  {
    path: 'carta',
    title: getTitle('Carta'),
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
    title: getTitle('Contacto'),
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  {
    path: 'reservas',
    title: getTitle('Reservas'),
    loadChildren: () => import('./pages/bookings/bookings.routes').then((m) => m.BOOKING_ROUTES),
  },
  {
    path: 'admin',
    title: getTitle('Admin'),
    loadChildren: () => import('./pages/admin/admin.routes').then((m) => m.ADMIN_ROUTES),
  },
  {
    path: 'login',
    title: getTitle('Login'),
    component: Login,
  },
  {
    path: '**',
    component: NotFound,
  },
];
