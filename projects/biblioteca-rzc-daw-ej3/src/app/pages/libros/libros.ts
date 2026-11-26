import { Component, computed, inject, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { BookService, Book } from '../core/services/book-service';
import { BookFilters } from './models/book-filters';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-libros',
  styleUrl: './libros.css',
  templateUrl: './libros.html',
})
export class Libros {
  genre = input<string>();
  // filters: BookFilters = new BookFilters()
  filters = computed(() => {
    const filters: BookFilters = new BookFilters();
    const genre = this.genre();
    if(genre) {
      filters.setGenre(genre);
    }

    return filters;
  });
  bookService = inject(BookService);
  books = computed(() => this.bookService.getAllBooks(this.filters()));
  availableFilters = ['genre', 'author', 'publicationYear', 'pages', 'rating'];
  genreList = computed(() => this.bookService.getAvailableGenres());

  constructor() {}
}
