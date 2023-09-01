import { tipoComposicion } from "./enums/TipoComposicion.enum";

export class Composicion{

    private nombre : string;
    private descripcion : string;
    private tipo : tipoComposicion; 
    private porcentaje : number;


    constructor(nombre : string, descripcion : string, tipo : tipoComposicion, porcentaje : number){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.tipo = tipo
        this.porcentaje = porcentaje

    }


}