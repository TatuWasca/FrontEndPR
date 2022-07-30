import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CuerpoComponent } from './vista/cuerpo.component';
import { Pagina404Component } from './pagina404/pagina404.component';

const routes: Routes = [
  {path: 'inicio', component:AppComponent},
  {path: '', pathMatch: 'full', redirectTo: 'inicio'},
  {path: '**', component: Pagina404Component}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
