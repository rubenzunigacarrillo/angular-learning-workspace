import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookService } from '../../core/services/book-service';

@Component({
  imports: [RouterLink],
  selector: 'app-autores',
  template: `
    <main class="authors-page">
      <header class="page-heading">
        <span>Autores del catálogo</span>
        <h1>Autores destacados</h1>
      </header>
      <section class="authors-grid">
        @for (book of books; track book.id) {
          <article>
            <div class="author-monogram">{{ book.author.charAt(0) }}</div>
            <div>
              <h2>{{ book.author }}</h2>
              <p>{{ book.title }}</p>
            </div>
            <a [routerLink]="['/libros', book.id]">Ver libro</a>
          </article>
        }
      </section>
    </main>
  `,
  styles: `
    .authors-page { padding: 32px 20px 48px; }
    .page-heading { margin-bottom: 24px; }
    .page-heading span { color: var(--text-muted); font-size: .78rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
    .page-heading h1 { margin: 6px 0 0; color: var(--text-dark); font-size: clamp(2rem, 5vw, 3.5rem); }
    .authors-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
    .authors-grid article { display: grid; grid-template-columns: 64px 1fr auto; align-items: center; gap: 16px; padding: 18px; border: 1px solid var(--border-flat); border-radius: var(--radius-md); background: var(--surface-bg); }
    .author-monogram { width: 64px; height: 64px; display: grid; place-items: center; border-radius: 50%; background: var(--primary-accent); color: var(--text-dark); font-family: Georgia, serif; font-size: 1.8rem; font-weight: 700; }
    .authors-grid h2 { margin: 0 0 4px; color: var(--text-dark); font-size: 1rem; }
    .authors-grid p { margin: 0; color: var(--text-muted); font-size: .88rem; }
    .authors-grid a { color: var(--text-dark); font-size: .82rem; font-weight: 800; text-decoration: none; }
    @media (max-width: 700px) { .authors-grid { grid-template-columns: 1fr; } .authors-grid article { grid-template-columns: 54px 1fr; } .authors-grid a { grid-column: 2; } .author-monogram { width: 54px; height: 54px; } }
  `,
})
export class Autores {
  private service = inject(BookService);
  books = this.service.getAllBooks();
}
