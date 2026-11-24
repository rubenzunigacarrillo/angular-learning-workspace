import { Component, computed, inject, input, linkedSignal } from '@angular/core';
import { PizzaService } from '../../../services/pizza-service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-edit-pizzas',
  styleUrl: './edit-pizzas.css',
  templateUrl: './edit-pizzas.html',
})
export class EditPizzas {
  private servicie = inject(PizzaService);
  private router = inject(Router);

  id = input.required<string>();
  selectedPizza = computed(() => this.servicie.getPizzaById(Number(this.id())));
  name = linkedSignal(() => this.selectedPizza()?.name ?? '');

  areNotSaved() {
    return this.selectedPizza()?.name !== this.name();
  }

  saveChanges() {
    this.servicie.setPizzaName(Number(this.id()), this.name());
    this.router.navigateByUrl('/admin');
  }
}
