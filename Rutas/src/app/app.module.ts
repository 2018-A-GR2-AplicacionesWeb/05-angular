import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';

@NgModule({
  declarations: [ // Componentess
    AppComponent,
    CabeceraComponent
  ],
  imports: [ // Modulos
    BrowserModule
  ],
  providers: [ // Servicios

  ],
  bootstrap: [ // Componente Principal
    AppComponent
  ]
})
export class AppModule { }
