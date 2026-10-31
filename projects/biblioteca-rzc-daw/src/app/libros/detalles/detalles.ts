import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookService } from '../../core/services/book-service';

@Component({
  imports: [RouterLink],
  selector: 'app-detalles',
  styleUrl: './detalles.css',
  templateUrl: './detalles.html',
})
export class Detalles {
  id = input<string>();
  bookService = inject(BookService);
  book = computed(() => this.bookService.getBookById(String(this.id())));
}
