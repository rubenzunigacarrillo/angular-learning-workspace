import { Component, inject } from '@angular/core';
import { PizzaService } from '../../../services/pizza-service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-admin-pizzas',
  styleUrl: './admin-pizzas.css',
  templateUrl: './admin-pizzas.html',
})
export class AdminPizzas {
  protected service = inject(PizzaService);

}
