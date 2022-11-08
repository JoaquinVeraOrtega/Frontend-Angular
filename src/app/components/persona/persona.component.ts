import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {


  nombreCompleto="Joaquín Vera Ortega";
  acercaDe="desarrollador etc etc";

  nuevoNombre:string="";

  nuevoAcercaDe:string="";

  cambiarNombre(){

this.nombreCompleto = this.nuevoNombre;

  }

  cambiarAcercaDe(){

    this.acercaDe = this.nuevoAcercaDe;
  }

  constructor() {
   }

  ngOnInit(): void {
  }

}
