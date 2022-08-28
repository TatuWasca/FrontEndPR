import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { TokenService } from './service/token.service';
import { CargandoComponent } from './componentes/cargando/cargando.component';

const routes: Routes = [
  {path: 'inicio', component:InicioComponent},
  {path: 'error404', component: Pagina404Component},
  {path: 'cargando', component: CargandoComponent},
  {path: '', pathMatch: 'full', redirectTo: 'inicio'},
  {path: '**', redirectTo:"error404"}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
