import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [ // Componentes
    AppComponent
  ],
  imports: [ // Modulos
    BrowserModule
  ],
  providers: [ // Servicios

  ],
  bootstrap: [ // Componente Inicial
    AppComponent
  ]
})
export class AppModule {
}
