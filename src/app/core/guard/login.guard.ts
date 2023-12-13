import { inject } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../auth.service';
import { ROUTING_TOKEN } from 'src/app/shared/enum/base-routing.enum';

//as can activate in already deprecated we should move to this functional guard instead
export const LoginGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const routeToken: typeof ROUTING_TOKEN = ROUTING_TOKEN;

  return authService.isAuthenticated().subscribe((res) => {
      return res || router.navigate([routeToken.LOGIN]);
  });
}