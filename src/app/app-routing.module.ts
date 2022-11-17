import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NeweducacionesComponent } from './componentes/educaciones/neweducaciones.component';
import { EditareduComponent } from './componentes/educaciones/editaredu.component';
import { NewexperienciasComponent } from './componentes/experiencias/newexperiencias.component';
import { EditexperienciasComponent } from './componentes/experiencias/editexperiencias.component';
import { EditbannerComponent } from './componentes/banner/editbanner.component';
import { EditacercadeComponent } from './componentes/acercade/editacercade.component';
import { NewhysskillsComponent } from './componentes/hysskills/newhysskills.component';
import { EdithysskillsComponent } from './componentes/hysskills/edithysskills.component';
import { NewproyectosComponent } from './componentes/proyectos/newproyectos.component';
import { EditproyectosComponent } from './componentes/proyectos/editproyectos.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path: '', component:InicioComponent},
  {path: 'error404', component: Pagina404Component},

  {path: 'login', component: LoginComponent},

  {path: 'editban/:id', component: EditbannerComponent},

  {path: 'editacde/:id', component: EditacercadeComponent},

  {path: 'nuevaedu', component: NeweducacionesComponent},
  {path: 'editedu/:id', component: EditareduComponent},

  {path: 'nuevaexp', component: NewexperienciasComponent},
  {path: 'editexp/:id', component: EditexperienciasComponent},

  {path: 'nuevaskill', component: NewhysskillsComponent},
  {path: 'editskill/:id', component: EdithysskillsComponent},

  {path: 'nuevaproy', component: NewproyectosComponent},
  {path: 'editproy/:id', component: EditproyectosComponent},

  {path: '**', redirectTo:"error404"},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
