import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BookService, Book } from '../core/services/book-service';
import { BookFilters } from './models/book-filters';
import { BookFiltersUi } from './components/book-filters-ui/book-filters-ui';

@Component({
  imports: [RouterLink, BookFiltersUi],
  selector: 'app-libros',
  styleUrl: './libros.css',
  templateUrl: './libros.html',
})
export class Libros {
  bookService = inject(BookService);
  filters: BookFilters = new BookFilters();
  books = computed(() => this.bookService.getAllBooks(this.filters));
  availableFilters = ['genre', 'author', 'publicationYear', 'pages', 'rating'];

  constructor() {
    // this.filters.setPublicationYear(2001, 'lower');
  }
}
