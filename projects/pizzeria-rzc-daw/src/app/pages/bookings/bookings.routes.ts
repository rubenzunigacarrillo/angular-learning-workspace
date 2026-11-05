import { Routes } from '@angular/router';

// Custom Components
import { NewBookings } from './new-bookings/new-bookings';
import { MyBookings } from './my-bookings/my-bookings';
import { Bookings } from './bookings/bookings';

export const BOOKING_ROUTES: Routes = [
  {
    path: 'reservas',
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
];
