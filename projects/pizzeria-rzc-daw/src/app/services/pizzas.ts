export interface pizza {
  id: number;
  name: string;
  price: number;
  type?: string;
  imageURL?: string;
  description?: string;
  ingredients?: string[];
}

export const PIZZA_ARRAY: pizza[] = [
    {
      id: 1,
      name: 'Margarita',
      price: 8,
      description: 'Lorem ipsum aut dolor exercitationem...',
      imageURL: 'https://images.unsplash.com/photo-1598023696416-0193a0bcd302',
      type: 'Clásicas',
    },
    {
      id: 2,
      name: 'Cuatro quesos',
      price: 11,
      description: 'Lorem ipsum aut dolor exercitationem...',
      imageURL: 'https://images.unsplash.com/photo-1732223229355-95a1433404bf',
      type: 'Clásicas',
    },
    {
      id: 3,
      name: 'Hortelana',
      price: 10,
      description: 'Lorem ipsum aut dolor exercitationem...',
      imageURL: 'https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf',
      type: 'Vegetarianas',
    },
    {
      id: 4,
      name: 'Don Luigi',
      price: 13,
      description: 'Lorem ipsum aut dolor exercitationem...',
      imageURL: 'https://images.unsplash.com/photo-1681567604770-0dc826c870ae',
      type: 'Especiales',
    },
  ];
