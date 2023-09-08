import { TipoComposicion } from "./enums/TipoComposicion.enum";

export class Composicion{

    private nombre : string;
    private descripcion : string;
    private tipo : TipoComposicion; 
    private porcentaje : number;


    constructor(nombre : string, descripcion : string, tipo : TipoComposicion, porcentaje : number){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.tipo = tipo
        this.porcentaje = porcentaje
    }

    public getTipo():TipoComposicion{
        return this.tipo;
    }

    public getPorcentaje():number{
        return this.porcentaje;
    }

}