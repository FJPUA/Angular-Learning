import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ROUTING_TOKEN } from 'src/app/shared/enum/base-routing.enum';

export const LogoutGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const routeToken: typeof ROUTING_TOKEN = ROUTING_TOKEN;

  return authService.isAuthenticated().subscribe((res) => {
      return res && router.navigate([routeToken.DASHBOARD]);
  });
}