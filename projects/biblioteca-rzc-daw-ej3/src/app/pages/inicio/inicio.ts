import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-inicio',
  template: `
    <main class="home-page">
      <section class="hero">
        <div class="hero-copy">
          <span class="eyebrow">Biblioteca personal</span>
          <h1>Descubre tu próxima lectura</h1>
          <p>Explora clásicos y novelas imprescindibles, consulta sus detalles y organiza tu colección.</p>
          <a class="primary-action" routerLink="/libros">Explorar libros</a>
        </div>
        <div class="hero-mark" aria-hidden="true">
          <span>DAW</span>
        </div>
      </section>

      <section class="home-features">
        <article>
          <span>01</span>
          <h2>Catálogo completo</h2>
          <p>Consulta cada obra por género y encuentra información detallada.</p>
        </article>
        <article>
          <span>02</span>
          <h2>Tu biblioteca</h2>
          <p>Mantén organizada tu colección desde el panel de cuenta.</p>
        </article>
        <article>
          <span>03</span>
          <h2>Lecturas favoritas</h2>
          <p>Descubre títulos destacados y sus valoraciones.</p>
        </article>
      </section>
    </main>
  `,
  styles: `
    .home-page { display: grid; gap: 28px; padding: 32px 20px 48px; }
    .hero { min-height: 330px; display: grid; grid-template-columns: 1.5fr 1fr; align-items: center; gap: 32px; padding: 48px; border: 1px solid var(--border-flat); border-radius: 24px; background: linear-gradient(135deg, var(--surface-bg), #fff); box-sizing: border-box; }
    .eyebrow { color: var(--text-muted); font-size: .78rem; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; }
    .hero h1 { max-width: 620px; margin: 10px 0 12px; color: var(--text-dark); font-size: clamp(2.2rem, 6vw, 4.6rem); line-height: .98; }
    .hero p { max-width: 520px; color: var(--text-body); font-size: 1.05rem; }
    .primary-action { display: inline-block; margin-top: 12px; padding: 12px 18px; border-radius: 30px; background: var(--primary-accent); color: var(--text-dark); text-decoration: none; font-weight: 800; }
    .hero-mark { width: 190px; height: 190px; display: grid; place-items: center; margin: auto; border: 16px double var(--primary-accent); border-radius: 50%; color: var(--text-dark); font-size: 2.2rem; font-weight: 900; letter-spacing: .12em; transform: rotate(-5deg); }
    .home-features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
    .home-features article { min-height: 150px; padding: 22px; border-top: 3px solid var(--primary-accent); background: var(--surface-bg); }
    .home-features span { color: var(--primary-accent); font-size: .75rem; font-weight: 900; }
    .home-features h2 { margin: 14px 0 6px; color: var(--text-dark); font-size: 1.1rem; }
    .home-features p { margin: 0; color: var(--text-muted); line-height: 1.55; }
    @media (max-width: 700px) { .hero { grid-template-columns: 1fr; padding: 32px 24px; } .hero-mark { width: 130px; height: 130px; } .home-features { grid-template-columns: 1fr; } }
  `,
})
export class Inicio {}
