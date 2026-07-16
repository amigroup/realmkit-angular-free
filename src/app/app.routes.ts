import {Routes} from '@angular/router';
import {canActivateAuthRole} from "./guards/auth-role.guard";

export const routes: Routes = [{
  path: 'home',
  loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
}, {
  path: 'user',
  loadChildren: () => import('./components/user/user.module').then(m => m.UserModule),
  canActivate: [canActivateAuthRole],
  data: {roles: []} // any authenticated user; add role names to restrict further
}, {
  path: 'forbidden',
  loadChildren: () => import('./components/forbidden/forbidden.module').then(m => m.ForbiddenModule),
}, {
  path: 'not-found',
  loadChildren: () => import('./components/not-found/not-found.module').then(m => m.NotFoundModule),
}, {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: '/not-found',
  pathMatch: 'full'
}];
