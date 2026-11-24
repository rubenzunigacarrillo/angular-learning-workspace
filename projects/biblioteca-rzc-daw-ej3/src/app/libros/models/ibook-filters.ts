export interface IBookFilters {
  genre?: string;
  author?: string;
  publicationYear?: {
    year: number;
    order: 'greater' | 'equal' | 'lower';
  };
  pages?: {
    value: number;
    order: 'greater' | 'equal' | 'lower';
  };
  rating?: {
    rate: number;
    order: 'greater' | 'equal' | 'lower';
  };
}
