import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia.model';

@Component({
  selector: 'app-item-experiencia',
  templateUrl: './item-experiencia.component.html',
  styleUrls: ['./item-experiencia.component.css']
})
export class ItemExperienciaComponent implements OnInit {

  experiencias:Experiencia[]=[

    new Experiencia("Google", "Desarrollador Backend"),
    
    ]
    
    agregarExperiencia(){
      let miExperiencia = new Experiencia(this.nuevaEmpresa, this.nuevoPuesto);
      this.experiencias.push(miExperiencia);
    }
    
    nuevaEmpresa:string = "";
    nuevoPuesto:string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
