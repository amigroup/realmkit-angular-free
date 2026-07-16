import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from "./forbidden.routes";

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ForbiddenRoutingModule {
}
