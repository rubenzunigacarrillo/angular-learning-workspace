import { Component, inject } from '@angular/core';
import { AuthService } from '../../../../core/services/auth-service';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-perfil',
  styleUrl: './perfil.css',
  templateUrl: './perfil.html',
})
export class Perfil {
  private auth = inject(AuthService);
  private router = inject(Router);

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/');
  }
}
