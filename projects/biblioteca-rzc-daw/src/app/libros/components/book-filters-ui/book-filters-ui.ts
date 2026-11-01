import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookFilters, OrderType } from '../../models/book-filters';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-book-filters-ui',
  styleUrl: './book-filters-ui.css',
  templateUrl: './book-filters-ui.html',
})
export class BookFiltersUi implements OnChanges {
  @Input() filters = new BookFilters();
  @Output() filtersApplied = new EventEmitter<BookFilters>();

  readonly filterForm = new FormGroup({
    genre: new FormControl('', { nonNullable: true }),
    author: new FormControl('', { nonNullable: true }),
    publicationYearOrder: new FormControl<OrderType>('greater', { nonNullable: true }),
    publicationYear: new FormControl<number | null>(null, [Validators.min(0), Validators.pattern(/^\d+$/)]),
    pagesOrder: new FormControl<OrderType>('greater', { nonNullable: true }),
    pages: new FormControl<number | null>(null, [Validators.min(1), Validators.pattern(/^\d+$/)]),
    ratingOrder: new FormControl<OrderType>('greater', { nonNullable: true }),
    rating: new FormControl<number | null>(null, [Validators.min(0), Validators.max(5)]),
  });

  ngOnChanges(): void {
    this.filterForm.patchValue({
      genre: this.filters.genre ?? '',
      author: this.filters.author ?? '',
      publicationYearOrder: this.filters.publicationYear?.order ?? 'greater',
      publicationYear: this.filters.publicationYear?.year ?? null,
      pagesOrder: this.filters.pages?.order ?? 'greater',
      pages: this.filters.pages?.value ?? null,
      ratingOrder: this.filters.rating?.order ?? 'greater',
      rating: this.filters.rating?.rate ?? null,
    }, { emitEvent: false });
  }

  applyFilters(): void {
    if (this.filterForm.invalid) {
      this.filterForm.markAllAsTouched();
      return;
    }

    const values = this.filterForm.getRawValue();
    const filters = new BookFilters();
    const genre = values.genre.trim();
    const author = values.author.trim();

    if (genre) filters.setGenre(genre);
    if (author) filters.setAuthor(author);
    if (values.publicationYear !== null) {
      filters.setPublicationYear(values.publicationYear, values.publicationYearOrder);
    }
    if (values.pages !== null) filters.setPages(values.pages, values.pagesOrder);
    if (values.rating !== null) filters.setRating(values.rating, values.ratingOrder);

    this.filtersApplied.emit(filters);
  }
}
