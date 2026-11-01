import { Component, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';

import { BookService } from '../core/services/book-service';
import { BookFilters, OrderType } from './models/book-filters';
import { BookFiltersUi } from './components/book-filters-ui/book-filters-ui';

@Component({
  imports: [RouterLink, BookFiltersUi],
  selector: 'app-libros',
  styleUrl: './libros.css',
  templateUrl: './libros.html',
})
export class Libros {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  bookService = inject(BookService);
  filters = signal(new BookFilters());
  books = computed(() => this.bookService.getAllBooks(this.filters()));

  constructor() {
    // Cada cambio en la URL actualiza los filtros aplicados y el listado.
    this.route.queryParams
      .pipe(takeUntilDestroyed())
      .subscribe((params) => this.filters.set(this.readFilters(params)));
  }

  applyFilters(filters: BookFilters): void {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: this.toQueryParams(filters),
      queryParamsHandling: 'merge',
    });
  }

  private readFilters(params: Params): BookFilters {
    const filters = new BookFilters();
    const genre = typeof params['genre'] === 'string' ? params['genre'].trim() : '';
    const author = typeof params['author'] === 'string' ? params['author'].trim() : '';

    if (genre) filters.setGenre(genre);
    if (author) filters.setAuthor(author);

    const publicationYear = this.readNumber(params['publicationYear'], 0, undefined, true);
    if (publicationYear !== null) {
      filters.setPublicationYear(publicationYear, this.readOrder(params['publicationYearOrder']));
    }

    const pages = this.readNumber(params['pages'], 1, undefined, true);
    if (pages !== null) filters.setPages(pages, this.readOrder(params['pagesOrder']));

    const rating = this.readNumber(params['rating'], 0, 5);
    if (rating !== null) filters.setRating(rating, this.readOrder(params['ratingOrder']));

    return filters;
  }

  private toQueryParams(filters: BookFilters): Params {
    return {
      genre: filters.genre || null,
      author: filters.author || null,
      publicationYear: filters.publicationYear?.year ?? null,
      publicationYearOrder: filters.publicationYear?.order ?? null,
      pages: filters.pages?.value ?? null,
      pagesOrder: filters.pages?.order ?? null,
      rating: filters.rating?.rate ?? null,
      ratingOrder: filters.rating?.order ?? null,
    };
  }

  private readNumber(value: unknown, min: number, max?: number, integer = false): number | null {
    if (typeof value !== 'string' || value.trim() === '') return null;

    const number = Number(value);
    if (!Number.isFinite(number) || number < min) return null;
    if (max !== undefined && number > max) return null;
    if (integer && !Number.isInteger(number)) return null;

    return number;
  }

  private readOrder(value: unknown): OrderType {
    if (value === 'equal' || value === 'lower') return value;
    return 'greater';
  }
}
