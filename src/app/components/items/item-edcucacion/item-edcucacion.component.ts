import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion.model';

@Component({
  selector: 'app-item-edcucacion',
  templateUrl: './item-edcucacion.component.html',
  styleUrls: ['./item-edcucacion.component.css']
})
export class ItemEdcucacionComponent implements OnInit {

  educacion:Educacion[]=[

    new Educacion("Desarrollador web full-stack Jr", "Argentina Programa", "2023"),
    
    ]
    
    agregarEducacion(){
      let miEducacion = new Educacion(this.nuevoTitulo, this.nuevaInstitucion, this.nuevoEgresoYear);
      this.educacion.push(miEducacion);
    }
    
    nuevoTitulo:string = "";
    nuevaInstitucion:string = "";
    nuevoEgresoYear:string = "";





  
  constructor() { }

  ngOnInit(): void {
  }

}
