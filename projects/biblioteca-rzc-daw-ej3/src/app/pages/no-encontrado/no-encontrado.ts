import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-no-encontrado',
  template: `
    <main class="not-found">
      <span>404</span>
      <h1>Página no encontrada</h1>
      <p>La dirección que buscas no existe o ha cambiado de ubicación.</p>
      <a routerLink="/inicio">Volver al inicio</a>
    </main>
  `,
  styles: `
    .not-found { min-height: 420px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px 20px; }
    .not-found span { color: var(--primary-accent); font-size: clamp(5rem, 18vw, 10rem); font-weight: 900; line-height: .75; opacity: .75; }
    .not-found h1 { margin: 28px 0 8px; color: var(--text-dark); }
    .not-found p { color: var(--text-muted); }
    .not-found a { margin-top: 12px; padding: 11px 18px; border-radius: 30px; background: var(--primary-accent); color: var(--text-dark); font-weight: 800; text-decoration: none; }
  `,
})
export class NoEncontrado {}
