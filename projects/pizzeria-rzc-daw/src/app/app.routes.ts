import { Routes } from '@angular/router';

// Custom Components
import { Contact } from './contact/contact';
import { Details } from './details/details';
import { Dishes } from './dishes/dishes';
import { Home } from './home/home';
import { NotFound } from './not-found/not-found';
import { NewBookings } from './bookings/new-bookings/new-bookings';
import { MyBookings } from './bookings/my-bookings/my-bookings';
import { Bookings } from './bookings/bookings/bookings';

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
    component: Dishes,
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
    component: Bookings,
    children: [
      { path: '', redirectTo: 'nueva-reserva', pathMatch: 'full'},
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
    path: '**',
    component: NotFound,
  },
];
