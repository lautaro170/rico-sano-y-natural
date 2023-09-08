import { Composicion } from "./Composicion";
import { TipoComida } from "./enums/TipoComida.enum";
import { TipoComposicion } from "./enums/TipoComposicion.enum";

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

    public getTipoComida():TipoComida{
        return this.tipoComida;
    }

    public getPorcentajeComposicion(TipoComposicion : TipoComposicion){
        let composiciones = this.composicion.filter((composicion) => composicion.getTipo() == TipoComposicion );
        let porcentajeTipoComposicion = composiciones.reduce( (accumulator, composicion) => accumulator + composicion.getPorcentaje(), 0 )
        return porcentajeTipoComposicion;
    }

}