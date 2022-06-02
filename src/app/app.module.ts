import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DiapositivasInformacionComponent } from './diapositivas-informacion/diapositivas-informacion.component';
import { DiapositivaHeaderComponent } from './diapositiva-header/diapositiva-header.component';
import { DiapositivaAcercaDeComponent } from './diapositiva-acerca-de/diapositiva-acerca-de.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { AppRoutingModule } from './app-routing.module.ts.module';



@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    AppRoutingModule
  ],
  declarations: [
    AppComponent, 
    LoginComponent, 
    DiapositivasInformacionComponent, 
    DiapositivaHeaderComponent, 
    DiapositivaAcercaDeComponent,  
    Pagina404Component
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule{ }
