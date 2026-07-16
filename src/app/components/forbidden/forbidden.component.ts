import {Component} from '@angular/core';
import {Router} from "@angular/router";
import Keycloak from "keycloak-js";

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrl: './forbidden.component.scss',
  standalone: false
})
export class ForbiddenComponent {

  constructor(
    private router: Router,
    private keycloak: Keycloak
  ) {
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  public async logout(): Promise<void> {
    await this.keycloak.logout({redirectUri: window.location.origin});
  }
}
