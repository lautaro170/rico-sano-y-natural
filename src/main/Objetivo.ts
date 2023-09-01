export class Objetivo{
    private nombre : string;
    private descripcion : string;
    private cumplido : boolean;

    constructor(nombre :string, descripcion:string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.cumplido = false;
    }

    public getCumplido() : boolean{
        return this.cumplido;
    }

    public completar(){
        this.cumplido = true;
    }
    
}