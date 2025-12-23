import { Injectable, signal } from '@angular/core';

/*
    Kullanıcının login durumunu tutmaktır...

    Gerçek projede token , API vs.. olur...
*/

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _isLoggedIn = signal<boolean>(false);

  //read only erişim : Dısarıdan set edilmesin
  isLoggedIn = this._isLoggedIn.asReadonly();

  //Login işlemi : Gerçekte API cagrısı olur. Burada ise sadece state degiştiriyoruz
  login(): void {
    this._isLoggedIn.set(true);
  }

  logout(): void {
    this._isLoggedIn.set(false);
  }
}
