import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CuerpoLoggedInComponent } from './vista-logged-in/cuerpo-logged-in.component';
import { NavegadorLoggedInComponent } from './vista-logged-in/navegador-logged-in/navegador-logged-in.component';

import { CuerpoLoggedOutComponent } from './vista-logged-out/cuerpo-logged-out.component';
import { NavegadorLoggedOutComponent } from './vista-logged-out/navegador-logged-out/navegador-logged-out.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    CuerpoLoggedInComponent,
    CuerpoLoggedOutComponent,
    NavegadorLoggedInComponent,
    NavegadorLoggedOutComponent,
    Pagina404Component,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule{ }
