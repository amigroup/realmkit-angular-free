import {Component, OnInit} from '@angular/core';
import Keycloak from "keycloak-js";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  standalone: false
})
export class UserComponent implements OnInit {

  public username?: string;
  public roles: string[] = [];

  constructor(private readonly keycloak: Keycloak) {
  }

  ngOnInit() {
    this.username = this.keycloak.tokenParsed?.['preferred_username'];
    this.roles = this.keycloak.realmAccess?.roles ?? [];
  }
}
