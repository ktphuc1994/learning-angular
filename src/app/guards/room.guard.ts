import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

// import local services
import { LoginService } from '../login/login.service';

export const roomGuard: CanActivateChildFn = (childRoute, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  return loginService.canAccessAdmin() ? true : router.navigate(['/rooms']);
};
