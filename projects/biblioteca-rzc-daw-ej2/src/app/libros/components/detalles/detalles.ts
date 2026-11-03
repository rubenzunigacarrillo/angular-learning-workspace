import { Component, computed, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BookService } from '../../../core/services/book-service';

@Component({
  imports: [RouterLink],
  selector: 'app-detalles',
  styleUrl: './detalles.css',
  templateUrl: './detalles.html',
})
export class Detalles {
  router = inject(Router);
  id = input<number>();
  bookService = inject(BookService);
  book = computed(() => this.bookService.getBookById(Number(this.id())));

  goToMyAccount() {
    this.router.navigateByUrl('/mi-cuenta', { replaceUrl: true });
  }

  nextBook() {
    const id = this.bookService.nextBookId(Number(this.id()));
    this.router.navigate(['libros', id]);
  }
  previousBook() {
    const id = this.bookService.previousBookId(Number(this.id()));
    this.router.navigate(['libros', id]);
  }
}
