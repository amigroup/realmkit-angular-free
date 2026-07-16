import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {provideKeycloak} from "keycloak-angular";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule // AppRoutingModule must be last in the import list to include all routes for lazy loading purposes
  ],
  providers: [
    // Initializes Keycloak before the app starts (check-sso + PKCE, see environment)
    provideKeycloak({
      config: environment.keycloak.config,
      initOptions: environment.keycloak.initOptions
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
