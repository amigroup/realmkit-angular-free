import {KeycloakConfig, KeycloakInitOptions} from "keycloak-js";

// Point these at your Keycloak instance.
// Your client must be public, with PKCE (S256) and your app origin in the
// redirect URIs and web origins.
export const environment = {
  production: false,

  keycloak: {
    config: {
      url: 'http://localhost:8080',
      realm: 'your-realm',
      clientId: 'your-client-id'
    } as KeycloakConfig,

    initOptions: {
      onLoad: 'check-sso',
      pkceMethod: 'S256',
      checkLoginIframe: false,
      enableLogging: true
      // No redirectUri: keycloak-js defaults to the current URL, so a
      // check-sso round trip lands back on the page you loaded (deep links,
      // reloads on guarded routes) instead of the app root.
    } as KeycloakInitOptions
  }
};
