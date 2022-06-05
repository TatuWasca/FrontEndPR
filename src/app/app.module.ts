import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DiapositivasInformacionComponent } from './diapositivas-informacion/diapositivas-informacion.component';
import { DiapositivaHeaderComponent } from './diapositiva-header/diapositiva-header.component';
import { DiapositivaAcercaDeComponent } from './diapositiva-acerca-de/diapositiva-acerca-de.component';
import { AppRoutingModule } from './app-routing.module';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { NavegadorComponent } from './navegador/navegador.component';

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
    CuerpoComponent,  
    NavegadorComponent,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule{ }
