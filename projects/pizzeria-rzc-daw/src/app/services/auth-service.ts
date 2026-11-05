import { Service, signal } from '@angular/core';

@Service()
export class AuthService {
  private readonly _logged = signal(false);
  readonly logged = this._logged.asReadonly();

  private setLogged(value: boolean) {
    this._logged.set(value);
  }

  login() {
    this.setLogged(true);
  }

  logout() {
    this.setLogged(true);
  }
}
