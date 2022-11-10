export class Skill {
    private tecnologia:string = "";
    private porcentaje:number = 0

 constructor(tecnologia:string, porcentaje:number){

    this.tecnologia = tecnologia;
    this.porcentaje = porcentaje;
    
 }

    public get Tecnologia():string {
        return this.tecnologia;
    }

    public set Tecnologia(value:string){
        this.tecnologia = value;
    }

    public get Porcentaje():number {
        return this.porcentaje;
            }
        
     public set Porcentaje(value:number){
                this.porcentaje = value;
            }

}
