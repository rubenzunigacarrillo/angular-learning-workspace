import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from './services/auth-service';

@Component({
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('pizzeria-rzc-daw');

  protected auth = inject(AuthService);
  private router = inject(Router);

  exit() {
    this.auth.logout();
    this.router.navigateByUrl('/inicio');
  }
}
