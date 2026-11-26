import { inject } from '@angular/core';
import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { Book, BookService } from '../services/book-service';

export const bookResolver: ResolveFn<Book | RedirectCommand> = (route, state) => {
  const service = inject(BookService);
  const router = inject(Router);

  const id = Number(route.paramMap.get('id'));
  const book = service.getBookById(id);

  return book ?? new RedirectCommand(router.parseUrl('/libros'));
};


export const bookTitleResolver: ResolveFn<string> = (route, state) => {
  const id = Number(route.paramMap.get('id'));
  const book = inject(BookService).getBookById(id);

    return book
      ? `${book.title} · Biblioteca DAW`
      : `Title not found · Biblioteca DAW`
}
