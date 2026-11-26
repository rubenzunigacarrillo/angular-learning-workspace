import { Service, signal } from '@angular/core';

@Service()
export class AuthService {
  private readonly _logged = signal(false);
  readonly logged = this._logged.asReadonly();

  private setLogged(value: boolean) {
    this._logged.set(value);
  }

  login(user="admin", password="1234"){
    if(!user || !password) return
    // TODO: validate user and password
    this.setLogged(true);
  }

  logout() {
    this.setLogged(false);
  }
}
