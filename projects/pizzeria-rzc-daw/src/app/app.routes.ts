import { Routes } from '@angular/router';

// Custom Components
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import { BOOKING_ROUTES } from './pages/bookings/bookings.routes';
import { NotFound } from './pages/not-found/not-found';
import { Details } from './pages/details/details';
import { Login } from './pages/login/login';
// import { Dishes } from './dishes/dishes';
import { Bookings } from './bookings/bookings/bookings';
import { NewBookings } from './bookings/new-bookings/new-bookings';
import { MyBookings } from './bookings/my-bookings/my-bookings';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: Home,
  },
  {
    path: 'carta',
    // component: Dishes,
    loadComponent: () => import('./pages/dishes/dishes').then((m) => m.Dishes),
  },
  {
    path: 'carta/:id',
    component: Details,
  },
  {
    path: 'contacto',
    component: Contact,
  },
  {
    path: 'reservas',
    // loadChildren: () => import('./pages/bookings/bookings.routes').then((m) => m.BOOKING_ROUTES),
    component: Bookings,
    children: [
      { path: '', redirectTo: 'nueva-reserva', pathMatch: 'full' },
      {
        path: 'nueva-reserva',
        component: NewBookings,
      },
      {
        path: 'mis-reservas',
        component: MyBookings,
      },
    ],
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
