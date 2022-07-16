import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CuerpoLoggedInComponent } from './vista-logged-in/cuerpo-logged-in.component';
import { CuerpoLoggedOutComponent } from './vista-logged-out/cuerpo-logged-out.component';
import { Pagina404Component } from './pagina404/pagina404.component';

const routes: Routes = [
  {path: 'inicio', component:AppComponent},
  {path: 'logged-in', component: CuerpoLoggedInComponent},
  {path: 'logged-out', component: CuerpoLoggedOutComponent},
  {path: '', pathMatch: 'full', redirectTo: 'logged-out'},
  {path: '**', component: Pagina404Component}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
