import { Component, computed, inject, input, linkedSignal } from '@angular/core';
import { BookService } from '../../../../core/services/book-service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-editar-libro',
  styleUrl: './editar-libro.css',
  templateUrl: './editar-libro.html',
})
export class EditarLibro {
  private service = inject(BookService);
  private router = inject(Router);

  id = input.required<string>();
  selectedBook = computed(() => {
    return this.service.getBookById(Number(this.id()))
  });
  title = linkedSignal(() => this.selectedBook()?.title ?? '');

  areNotSaved() {
    return this.selectedBook()?.title !== this.title();
  }

  saveChanges() {
    this.service.setBookTitle(Number(this.id()), this.title());
    this.router.navigateByUrl('/mi-cuenta/biblioteca');
  }

}
