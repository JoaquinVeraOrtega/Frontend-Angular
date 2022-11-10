export class Proyecto {
    private nombre:string = "";
    private cliente:string = "";

 constructor(nombre:string, cliente:string){

    this.nombre = nombre;
    this.cliente = cliente;
    
 }

    public get Nombre():string {
        return this.nombre;
    }

    public set Nombre(value:string){
        this.nombre = value;
    }

    public get Cliente():string {
        return this.cliente;
            }
        
     public set Cliente(value:string){
                this.cliente = value;
            }

}
