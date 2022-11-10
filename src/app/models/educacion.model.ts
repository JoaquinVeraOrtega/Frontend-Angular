export class Educacion {
    private titulo:string = "";
    private institucion:string = "";
    private fechaIngreso:Date;
    private fehcaEgreso:Date; 

 constructor(titulo:string, institucion:string, fechaIngreso:Date, fechaEgreso:Date){

    this.titulo = titulo;
    this.institucion = institucion;
    this.fechaIngreso = fechaIngreso;
    this.fehcaEgreso = fechaEgreso
    
 }

    public get Titulo():string {
       return this.titulo;
    }

    public set Titulo(value:string){
        this.titulo = value;
    }

    public get Institucion():string {
        return this.institucion;
    }
 
     public set Institucion(value:string){
         this.institucion = value;
    }

    public get FechaDeIngreso():Date {
        return this.fechaIngreso;
     }
 
     public set FechaDeIngreso(value:Date){
         this.fechaIngreso = value;
     }

     public get FechaDeEgreso():Date {
        return this.fehcaEgreso;
     }
 
     public set FechaDeEgreso(value:Date){
         this.fehcaEgreso = value;
     } 
}
