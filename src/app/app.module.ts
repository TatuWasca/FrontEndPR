import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxFileDropModule  } from 'ngx-file-drop';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTabsModule } from '@angular/material/tabs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NavegadorComponent } from './componentes/navegador/navegador.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaDeComponent } from './componentes/banner/acercade/acercade.component';
import { EducacionesComponent } from './componentes/educaciones/educaciones.component';
import { HySSkillsComponent } from './componentes/hysskills/hysskills.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule, 
    AppRoutingModule, 
    NgbModule, 
    NoopAnimationsModule, 
    NgxFileDropModule, 
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
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule{ }
