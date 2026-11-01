import { Routes } from '@angular/router';

import { Autores } from './autores/autores';
import { Inicio } from './inicio/inicio';
import { Libros } from './libros/libros';
import { NoEncontrado } from './no-encontrado/no-encontrado';
import { Detalles } from './libros/components/detalles/detalles';


export const routes: Routes = [
  {
    path:'inicio'
    , component: Inicio
  },
  {
    path:''
    , redirectTo: 'inicio'
    , pathMatch: 'full'
  },
  {
    path:'libros'
    , component: Libros
  },
  {
    path:'libros/:id'
    , component: Detalles
  },
  {
    path:'autores'
    , component: Autores
  },
  {
    path:'**'
    , component: NoEncontrado
  }
];
