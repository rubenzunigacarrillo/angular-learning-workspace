import { IBookFilters } from "./ibook-filters";

export type OrderType = 'greater' | 'equal' | 'lower';

export class BookFilters implements IBookFilters {
  genre?: string;
  author?: string;
  publicationYear?: { year: number; order: OrderType; };
  pages?: { value: number; order: OrderType; } | undefined;
  rating?: { rate: number; order: OrderType; } | undefined;

  constructor(){}

  setGenre(genre: string){
    this.genre = genre;
  }
  setAuthor(author: string){
    this.author = author;
  }
  setPublicationYear(year: number, order: OrderType){
    this.publicationYear = {
      year: year,
      order: order,
    }
  }
  setPages(value: number, order: OrderType){
    this.pages = {
      value: value,
      order: order,
    }
  }
  setRating(rate: number, order: OrderType){
    this.rating = {
      rate: rate,
      order: order,
    }
  }
}
