import { Component, computed, inject, Input, input } from '@angular/core';
import { PizzaService } from '../../services/pizza-service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-dishes',
  styleUrl: './dishes.css',
  templateUrl: './dishes.html',
})
export class Dishes {
  // pizzaService = new PizzaService();
  // pizzas = this.pizzaService.getPizzas();
  // pizzas = signal(['margarita', 'cuatro quesos'])
  // lista = computed(() => this.pizzas);
  private allTypes = 'Todas';
  private service = inject(PizzaService);
  type = input<string>();
  pizzas = computed(() => this.service.getPizzas(this.type()));
  // typeFilter = computed(() => {});

  types = [this.allTypes, ...new Set(this.pizzas().map((p) => p.type))];

  cleanText(text: unknown): string {
    return String(text)
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }
}
