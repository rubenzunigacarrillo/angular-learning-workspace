import { Service } from '@angular/core';
import { IBookFilters } from '../../libros/models/ibook-filters';

export interface BookRate {
  value: number;
  opinions: number;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  coverUrl: string;
  publicationYear: number;
  pages: number;
  isAvailable: boolean;
  synopsis?: string;
  rating?: BookRate;
  publisher?: string;
  languaje?: string;
}

@Service()
export class BookService {
  books: Book[] = [
    {
      id: '978-0142437230',
      title: 'Don Quixote',
      author: 'Miguel de Cervantes',
      genre: 'Classic Literature',
      coverUrl: 'https://covers.openlibrary.org/b/id/6928939-L.jpg',
      publicationYear: 1605,
      pages: 863,
      isAvailable: true,
      synopsis:
        'The adventures of a noble man who loses his mind from reading too many chivalric romances and decides to become a knight-errant.',
      rating: { value: 4.8, opinions: 359 },
      publisher: 'Penguin Classics',
      languaje: 'Castellano',
    },
    {
      id: '978-0451524935',
      title: '1984',
      author: 'George Orwell',
      genre: 'Dystopian / Sci-Fi',
      coverUrl: 'https://covers.openlibrary.org/b/id/15256133-L.jpg',
      publicationYear: 1949,
      pages: 328,
      isAvailable: true,
      synopsis:
        'A chilling novel about a dystopian future where a totalitarian regime exerts total control over public and private life.',
      rating: { value: 4.7, opinions: 103 },
      publisher: 'Signet Classics',
      languaje: 'Inglés',
    },
    {
      id: '978-0345339683',
      title: 'El Hobbit',
      author: 'J.R.R. Tolkien',
      genre: 'Fantasy',
      coverUrl: 'https://covers.openlibrary.org/b/id/15146094-L.jpg',
      publicationYear: 1937,
      pages: 310,
      isAvailable: false,
      synopsis:
        'The journey of Bilbo Baggins, a home-loving hobbit, who sets out on a quest to reclaim a stolen treasure guarded by a dragon.',
      rating: { value: 4.9, opinions: 957 },
      publisher: 'Minotauro',
      languaje: 'Castellano',
    },
    {
      id: '978-8408061052',
      title: 'The Shadow of the Wind',
      author: 'Carlos Ruiz Zafón',
      genre: 'Mystery / Fiction',
      coverUrl: 'https://covers.openlibrary.org/b/id/15156378-L.jpg',
      publicationYear: 2001,
      pages: 576,
      isAvailable: true,
      synopsis:
        "An antiquarian book dealer's son finds a mysterious book that opens the door to a dark and thrilling secret in Barcelona.",
      rating: { value: 4.4, opinions: 205 },
      publisher: 'Planeta',
      languaje: 'Castellano',
    },
    {
      id: '978-0060883287',
      title: 'One Hundred Years of Solitude',
      author: 'Gabriel García Márquez',
      genre: 'Magical Realism',
      coverUrl: 'https://covers.openlibrary.org/b/id/14651643-L.jpg',
      publicationYear: 1967,
      pages: 471,
      isAvailable: true,
      synopsis:
        'The multi-generational story of the Buendía family, whose patriarch founds the isolated but magical town of Macondo.',
      rating: { value: 4.2, opinions: 68 },
      publisher: 'Harper Perennial',
      languaje: 'Inglés',
    },
  ];

  getAllBooks(filters?: IBookFilters): Book[] {
    return this.books.filter((book) => {
      if (!filters) return true;

      if (filters.genre && !book.genre.includes(filters.genre)) return false;
      if (filters.author && !book.author.includes(filters.author)) return false;

      if (filters.publicationYear) {
        const { year, order } = filters.publicationYear;
        if (order === 'greater' && book.publicationYear <= year) return false;
        if (order === 'equal' && book.publicationYear !== year) return false;
        if (order === 'lower' && book.publicationYear >= year) return false;
      }

      if (filters.pages) {
        const { value, order } = filters.pages;
        if (order === 'greater' && book.pages <= value) return false;
        if (order === 'equal' && book.pages !== value) return false;
        if (order === 'lower' && book.pages >= value) return false;
      }

      if (filters.rating) {
        const { rate, order } = filters.rating;
        if (!book.rating) return false;
        if (order === 'greater' && book.rating.value <= rate) return false;
        if (order === 'equal' && book.rating.value !== rate) return false;
        if (order === 'lower' && book.rating.value >= rate) return false;
      }

      return true;
    });
  }

  getRatingStars(value: number): string {
    const roundedRating = Number.isFinite(value) ? Math.round(value) : 0;
    const filledStars = Math.max(0, Math.min(5, roundedRating));
    return '★'.repeat(filledStars) + '☆'.repeat(5 - filledStars);
  }

  getBookById(id: string): Book | undefined {
    return this.books.find((book) => book.id === id);
  }
}
