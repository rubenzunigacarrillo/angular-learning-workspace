import { Service, signal } from '@angular/core';
import { pizza as IPizza, PIZZA_ARRAY } from './pizzas';

export interface Pizza extends IPizza {};

@Service()
export class PizzaService {
  private readonly _pizzas = signal(PIZZA_ARRAY);
  readonly pizzas = this._pizzas.asReadonly;

  getPizzas(type?: string): Pizza[] {
    return type ? this._pizzas().filter((p) => p.type === type) : this._pizzas();
  }

  getPizzaById(id: number): Pizza | undefined {
    return this._pizzas().find((p) => p.id === id);
  }

  getNextPizza(id: number) {
    const index = this._pizzas().findIndex((p) => p.id === id);

    return index ? this._pizzas()[(index + 1) % this._pizzas().length] : this._pizzas()[1];
  }

  getNextId(id: number) {
    const index = this._pizzas().findIndex((p) => p.id === id);

    return this._pizzas()[(index + 1) % this._pizzas().length].id;
  }
  getPreviousId(id: number) {
    const index = this._pizzas().findIndex((p) => p.id === id);

    return this._pizzas()[(index - 1 + this._pizzas().length) % this._pizzas().length].id;
  }
}
