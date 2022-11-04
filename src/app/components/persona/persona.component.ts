import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {


  nombre="Joaquín";
  apellido="Vera Ortega";
  acercaDe="desarrollador etc etc";

  constructor() {
   }

  ngOnInit(): void {
  }

}
