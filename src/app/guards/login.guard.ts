import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';

// import local services
import { LoginService } from '../login/login.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  return loginService.canLogin() ? true : router.navigate(['/login']);
};

export const loadLoginGuard: CanMatchFn = (route, segments) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  return loginService.canLogin() ? true : router.navigate(['/login']);
};
