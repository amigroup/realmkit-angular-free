import {inject} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthGuardData, createAuthGuard} from 'keycloak-angular';

const isAccessAllowed = async (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  authData: AuthGuardData
): Promise<boolean | UrlTree> => {
  // inject() is only valid before the first await
  const router = inject(Router);
  const {authenticated, grantedRoles, keycloak} = authData;

  if (!authenticated) {
    await keycloak.login({
      redirectUri: `${window.location.origin}${state.url}`
    });

    return false;
  }

  const requiredRoles = route.data['roles'] as string[];
  if (!requiredRoles?.length) {
    return true;
  }

  const userRoles = [
    ...grantedRoles.realmRoles,
    ...Object.values(grantedRoles.resourceRoles).flat()
  ];

  const hasRequiredRole = requiredRoles.some(role => userRoles.includes(role));

  if (!hasRequiredRole) {
    return router.parseUrl('/forbidden');
  }

  return true;
};

export const canActivateAuthRole = createAuthGuard<CanActivateFn>(isAccessAllowed);
