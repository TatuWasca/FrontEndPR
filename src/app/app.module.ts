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

import { NavegadorComponent } from './componentes/navegador/navegador.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaDeComponent } from './componentes/acercade/acercade.component';
import { EducacionesComponent } from './componentes/educaciones/educaciones.component';
import { NeweducacionesComponent } from './componentes/educaciones/neweducaciones.component';
import { EditareduComponent } from './componentes/educaciones/editaredu.component';
import { HySSkillsComponent } from './componentes/hysskills/hysskills.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

import { FooterComponent } from './componentes/footer/footer.component';
import { NewexperienciasComponent } from './componentes/experiencias/newexperiencias.component';
import { EditexperienciasComponent } from './componentes/experiencias/editexperiencias.component';
import { EditbannerComponent } from './componentes/banner/editbanner.component';
import { EditacercadeComponent } from './componentes/acercade/editacercade.component';
import { EdithysskillsComponent } from './componentes/hysskills/edithysskills.component';
import { NewhysskillsComponent } from './componentes/hysskills/newhysskills.component';
import { EditproyectosComponent } from './componentes/proyectos/editproyectos.component';
import { NewproyectosComponent } from './componentes/proyectos/newproyectos.component';
import { LoginComponent } from './componentes/login/login.component';

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
    AcercaDeComponent,
    EducacionesComponent,
    HySSkillsComponent,
    ExperienciasComponent,
    ProyectosComponent,
    InicioComponent,
    NeweducacionesComponent,
    EditareduComponent,
    FooterComponent,
    NewexperienciasComponent,
    EditexperienciasComponent,
    EditbannerComponent,
    EditacercadeComponent,
    EdithysskillsComponent,
    NewhysskillsComponent,
    EditproyectosComponent,
    NewproyectosComponent,
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
