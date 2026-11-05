import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth-service';


@Component({
  imports: [],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  private auth = inject(AuthService);
  private router = inject(Router);

  returnUrl = input<string>();

  login() {
    this.auth.login();
    this.router.navigateByUrl(this.returnUrl() ?? '/admin');
  }

}
