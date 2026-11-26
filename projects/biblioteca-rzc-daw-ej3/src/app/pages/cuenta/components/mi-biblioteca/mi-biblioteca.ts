import { Component, inject } from '@angular/core';
import { BookService } from '../../../../core/services/book-service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-mi-biblioteca',
  styleUrl: './mi-biblioteca.css',
  templateUrl: './mi-biblioteca.html',
})
export class MiBiblioteca {
  private service = inject(BookService);
  books = this.service.getAllBooks();

}
