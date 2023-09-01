import { Composicion } from "./Composicion";
import { TipoComida } from "./enums/tipoComida.enum";

export class Comida{
    private nombre : string;
    private descripcion : string;
    private tipoComida : TipoComida;
    private composicion : Composicion[];

    constructor (nombre :string, descripcion :string, tipoComida : TipoComida, composicion? : Composicion[]){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.tipoComida = tipoComida;
        this.composicion = composicion ?? [];
    }

}