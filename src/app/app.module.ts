import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarraDeNavegacionComponent } from './components/barra-de-navegacion/barra-de-navegacion.component';
import { ImgBackgroundComponent } from './components/img-background/img-background.component';
import { PersonaComponent } from './components/persona/persona.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraDeNavegacionComponent,
    ImgBackgroundComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
