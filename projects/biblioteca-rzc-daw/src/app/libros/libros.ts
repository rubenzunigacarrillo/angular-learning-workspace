import { Component, computed, inject } from '@angular/core';
import { BookService, Book, BookFilters } from '../core/services/book-service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-libros',
  styleUrl: './libros.css',
  templateUrl: './libros.html',
})
export class Libros {
  bookService = inject(BookService);
  filters: BookFilters = {};
  books = computed(() => this.bookService.getAllBooks());
}
