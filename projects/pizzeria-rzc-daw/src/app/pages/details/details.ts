import { Component, computed, inject, input, Signal } from '@angular/core';
import { type Pizza, PizzaService } from '../../services/pizza-service';
import { NotFound } from '../not-found/not-found';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-details',
  styleUrl: './details.css',
  templateUrl: './details.html',
})
export class Details {
  router = inject(Router);
  service = inject(PizzaService);

  // id = input();
  // pizza: Signal<Pizza | undefined> = computed(() => this.service.getPizzaById(Number(this.id())));
  pizza = input.required<Pizza>();

  nextPizza(currentId: number = Number(this.pizza().id)) {
    this.router.navigate(['carta', this.service.getNextId(currentId)]);
  }
  previousPizza(currentId: number = Number(this.pizza().id)) {
    this.router.navigate(['carta', this.service.getPreviousId(currentId)]);
  }

  bookNow() {
    this.router.navigate(['reservas']);
  }
}
