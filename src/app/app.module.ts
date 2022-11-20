import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './service/interceptor.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTabsModule } from '@angular/material/tabs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './componentes/home/home.component';
import { NavegadorComponent } from './componentes/navegador/navegador.component';
import { LoginComponent } from './componentes/login/login.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { EditbannerComponent } from './componentes/banner/editbanner.component';
import { AcercaDeComponent } from './componentes/acercade/acercade.component';
import { EditacercadeComponent } from './componentes/acercade/editacercade.component';
import { EducacionesComponent } from './componentes/educaciones/educaciones.component';
import { NeweducacionesComponent } from './componentes/educaciones/neweducaciones.component';
import { EditareduComponent } from './componentes/educaciones/editaredu.component';
import { HySSkillsComponent } from './componentes/hysskills/hysskills.component';
import { EdithysskillsComponent } from './componentes/hysskills/edithysskills.component';
import { NewhysskillsComponent } from './componentes/hysskills/newhysskills.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { NewexperienciasComponent } from './componentes/experiencias/newexperiencias.component';
import { EditexperienciasComponent } from './componentes/experiencias/editexperiencias.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { EditproyectosComponent } from './componentes/proyectos/editproyectos.component';
import { NewproyectosComponent } from './componentes/proyectos/newproyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule, 
    AppRoutingModule, 
    NgbModule, 
    NoopAnimationsModule, 
    MatTabsModule,
  ],
  declarations: [
    AppComponent,
    NavegadorComponent,
    Pagina404Component,
    BannerComponent,
    EditbannerComponent,
    AcercaDeComponent,
    EditacercadeComponent,
    EducacionesComponent,
    NeweducacionesComponent,
    EditareduComponent,
    HySSkillsComponent,
    EdithysskillsComponent,
    NewhysskillsComponent,
    ExperienciasComponent,
    NewexperienciasComponent,
    EditexperienciasComponent,
    ProyectosComponent,
    EditproyectosComponent,
    NewproyectosComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent
  ],
  providers:[
    InterceptorService,
  ],
  bootstrap: [ 
    AppComponent 
  ],
})
export class AppModule{ }
