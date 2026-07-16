import {Component, OnInit} from '@angular/core';
import Keycloak from "keycloak-js";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false
})
export class HomeComponent implements OnInit {

  public isLoggedIn = false;
  public username?: string;

  constructor(private readonly keycloak: Keycloak) {
  }

  public ngOnInit(): void {
    this.isLoggedIn = this.keycloak.authenticated ?? false;
    this.username = this.keycloak.tokenParsed?.['preferred_username'];
  }

  public async login(): Promise<void> {
    await this.keycloak.login();
  }

  public async logout(): Promise<void> {
    await this.keycloak.logout({redirectUri: window.location.origin});
  }

}
