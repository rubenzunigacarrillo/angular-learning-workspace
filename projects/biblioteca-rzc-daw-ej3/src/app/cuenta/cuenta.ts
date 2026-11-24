import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  selector: 'app-cuenta',
  styleUrl: './cuenta.css',
  templateUrl: './cuenta.html',
})
export class Cuenta {}
