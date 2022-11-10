export class Experiencia {
    private empresa:string = "";
    private puesto:string = "";

 constructor(empresa:string, puesto:string){

    this.empresa = empresa;
    this.puesto = puesto;
    
 }

    public get Empresa():string {
        return this.empresa;
    }

    public set Empresa(value:string){
        this.empresa = value;
    }

    public get Puesto():string {
        return this.puesto;
            }
        
     public set Puesto(value:string){
                this.puesto = value;
            }

}
