import { Component, inject, input } from '@angular/core';
import { AuthService } from '../../core/services/auth-service';
import { Router } from '@angular/router';

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
    this.router.navigateByUrl(this.returnUrl() ?? '/mi-cuenta');
  }

  constructor(){
    if(this.auth.logged())
      this.router.navigateByUrl('/mi-cuenta');
  }
}
