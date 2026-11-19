import { inject } from '@angular/core';
import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { Pizza, PizzaService } from '../services/pizza-service';

export const pizzaResolver: ResolveFn<Pizza | RedirectCommand> = (route, state) => {
  const service = inject(PizzaService);
  const router = inject(Router);

  const pizza = service.getPizzaById(Number(route.paramMap.get('id')));

  return pizza ?? new RedirectCommand(router.parseUrl('/carta'));
};

export const pizzaTitleResolver: ResolveFn<string> = (route, state) => {
  const pizza = inject(PizzaService).getPizzaById(Number(route.paramMap.get('id')));
  const router = inject(Router);

  return pizza
    ? `${pizza.name} · Pizzería DAW`
    : `Pizza · Pizzería DAW`;
};
