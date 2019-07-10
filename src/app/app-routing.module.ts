import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PingComponent} from "./pages/ping/ping.component";

const routes: Routes = [
  {path: 'ping', component: PingComponent},
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

