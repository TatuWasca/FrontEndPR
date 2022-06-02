import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Pagina404Component } from './pagina404/pagina404.component';

const routes: Routes = [
 {path:"inicio", component:AppComponent},
 {path:'', redirectTo: '/inicio', pathMatch: 'full'},
 {path:"**", component:Pagina404Component},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
