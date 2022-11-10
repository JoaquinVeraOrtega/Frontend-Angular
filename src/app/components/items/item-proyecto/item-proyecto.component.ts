import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyectos.model';

@Component({
  selector: 'app-item-proyecto',
  templateUrl: './item-proyecto.component.html',
  styleUrls: ['./item-proyecto.component.css']
})


export class ItemProyectoComponent implements OnInit {


proyectos:Proyecto[]=[

new Proyecto("Portfolio", "Arg Progra"),

]

agregarProyecto(){
  let miProyecto = new Proyecto(this.nuevoNombre, this.nuevoCliente);
  this.proyectos.push(miProyecto);
}

nuevoNombre:string = "";
nuevoCliente:string = "";


  ngOnInit(): void {
  }

}  


  
  

  
  
  
  