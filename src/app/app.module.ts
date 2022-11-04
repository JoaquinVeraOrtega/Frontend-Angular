import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarraDeNavegacionComponent } from './components/barra-de-navegacion/barra-de-navegacion.component';
import { ImgBackgroundComponent } from './components/img-background/img-background.component';
import { PersonaComponent } from './components/persona/persona.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SkillComponent } from './components/items/item-skill/skill.component';
import { ItemProyectoComponent } from './components/items/item-proyecto/item-proyecto.component';
import { ItemEdcucacionComponent } from './components/items/item-edcucacion/item-edcucacion.component';
import { ItemExperienciaComponent } from './components/items/item-experiencia/item-experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraDeNavegacionComponent,
    ImgBackgroundComponent,
    PersonaComponent,
    SkillsComponent,
    ProyectosComponent,
    EducacionComponent,
    ExperienciaComponent,
    ContactoComponent,
    SkillComponent,
    ItemProyectoComponent,
    ItemEdcucacionComponent,
    ItemExperienciaComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
