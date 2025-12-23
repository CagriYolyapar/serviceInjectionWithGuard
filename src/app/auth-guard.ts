import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './Services/AuthService';

//Route'a girilmeden önce calısacak
//true => gir
//false => gecme

export const authGuard: CanActivateFn = () => {
  //Guard içinde inject():
  //- constructor olmadan modern Angular pattern

  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
