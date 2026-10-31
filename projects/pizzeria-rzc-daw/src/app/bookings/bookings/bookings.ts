import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  selector: 'app-bookings',
  styleUrl: './bookings.css',
  templateUrl: './bookings.html',
})
export class Bookings {}
