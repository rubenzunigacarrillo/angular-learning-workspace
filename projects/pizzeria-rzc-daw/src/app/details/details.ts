import { Component, computed, inject, input, Signal } from '@angular/core';
import { type pizza, PizzaService } from '../services/pizza-service';
import { NotFound } from '../not-found/not-found';
import { Router } from '@angular/router';

@Component({
  imports: [NotFound],
  selector: 'app-details',
  styleUrl: './details.css',
  templateUrl: './details.html',
})
export class Details {
  router = inject(Router);
  service = inject(PizzaService);
  id = input();
  pizza: Signal<pizza | undefined> = computed(() => this.service.getPizzaById(Number(this.id())));

  nextPizza(currentId: number = Number(this.id())) {
    this.router.navigate(['carta', this.service.getNextId(currentId)]);
  }
  previousPizza(currentId: number = Number(this.id())) {
    this.router.navigate(['carta', this.service.getPreviousId(currentId)]);
  }

  bookNow(){
    this.router.navigate(['reservas']);
  }
}
