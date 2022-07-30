import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Pagina404Component } from './pagina404/pagina404.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CuerpoComponent } from './vista/cuerpo.component';
import { NavegadorComponent } from './vista/navegador/navegador.component';
import { BannerComponent } from './vista/banner/banner.component';
import { AcercaDeComponent } from './vista/banner/acerca-de/acerca-de.component';
import { EducacionComponent } from './vista/educacion/educacion.component';
import { HySSkillsComponent } from './vista/hy-s-skills/hys-skills.component';
import { ExperienciaComponent } from './vista/experiencia/experiencia.component';
import { ProyectosComponent } from './vista/proyectos/proyectos.component';
import { IdiomasComponent } from './vista/idiomas/idiomas.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    AppRoutingModule, 
    NgbModule, 
  ],
  declarations: [
    AppComponent,
    CuerpoComponent, 
    NavegadorComponent,
    Pagina404Component,
    BannerComponent,
    AcercaDeComponent,
    EducacionComponent,
    HySSkillsComponent,
    ExperienciaComponent,
    ProyectosComponent,
    IdiomasComponent,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule{ }
