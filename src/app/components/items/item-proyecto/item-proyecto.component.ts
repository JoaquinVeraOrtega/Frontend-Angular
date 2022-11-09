import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/proyectos';

@Component({
  selector: 'app-item-proyecto',
  templateUrl: './item-proyecto.component.html',
  styleUrls: ['./item-proyecto.component.css']
})


export class ItemProyectoComponent implements OnInit {

nombre="";
 cliente="";
 
 proyectos: any=[];

agregarProyecto(){

  this.proyectos.push(this.nombre, this.cliente);

  console.log("funca")
}




 constructor() {
 this.proyectos=[
  {nombre:"portfolio", cliente:"arg progra"},
{nombre:"cielo", cliente:"euge"}
 ]



}

  ngOnInit(): void {
  }

}  


  
  

  
  
  
  