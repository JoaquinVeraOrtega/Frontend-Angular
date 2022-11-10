export class Educacion {
    private titulo:string = "";
    private institucion:string = "";
    private yearEgreso:string = "";

 constructor(titulo:string, institucion:string, yearEgreso:string){

    this.titulo = titulo;
    this.institucion = institucion;
    this.yearEgreso = yearEgreso;
    
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

    public get EgresoYear():string {
        return this.yearEgreso;
     }
 
     public set EgresoYear(value:string){
         this.yearEgreso = value;
     }

   
}
