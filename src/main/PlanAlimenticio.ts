import { Bebida } from "./Bebida";
import { Colacion } from "./Colacion";
import { Objetivo } from "./Objetivo";
import { Paciente } from "./Paciente";
import { Profesional } from "./Profesional";
import { DuracionPlanAlimenticio } from "./enums/DuracionPlanAlimenticio.enum";

export class PlanAlimenticio{
    private profesional : Profesional;
    private paciente : Paciente;
    private duracion : DuracionPlanAlimenticio;
    private objetivos : Objetivo[];
    private edadInicial: number;
    private pesoInicial : number;
    private medidaCinturaInicial: number;
    private colacionesPermitidas : Colacion[];
    private bebidasPermitidas : Bebida[];
    

    constructor( profesional : Profesional, paciente : Paciente, duracion : DuracionPlanAlimenticio, objetivos? : Objetivo[] ){

        this.profesional = profesional;
        this.paciente = paciente;
        this.duracion = duracion;
        this.objetivos = objetivos ?? []; 
        this.edadInicial = paciente.getEdad();
        this.pesoInicial = paciente.getPeso();
        this.medidaCinturaInicial = paciente.getMedidaCintura();
        this.colacionesPermitidas = [];
        this.bebidasPermitidas = [];
    }

    public addObjetivo(objetivo : Objetivo){
        this.objetivos = [... this.objetivos, objetivo];
    }
    
    public addColacionPermitida(colacion : Colacion){
        this.colacionesPermitidas = [... this.colacionesPermitidas, colacion];
    }
    
    public addBebidaPermitida(bebida : Bebida){
        this.bebidasPermitidas = [... this.bebidasPermitidas, bebida];
    }
    

    public generarEvaluacion(){
        let resultadoEvaluacion;

        let cantidadObjetivos = this.objetivos.length;
        
        let objetivosCumplidos = this.objetivos.reduce((accumulator, objetivo) => objetivo.getCumplido() ? accumulator +1 : accumulator, 0)

        let porcentajeObjetivosCumplidos = objetivosCumplidos / cantidadObjetivos;
        console.log(porcentajeObjetivosCumplidos)

        if(porcentajeObjetivosCumplidos == 1){
            resultadoEvaluacion = "Excelente";
        }
        else if( porcentajeObjetivosCumplidos >= 0.6 ){
            resultadoEvaluacion = "Muy buena";
        }
        else if( porcentajeObjetivosCumplidos >= 0.5 ){
            resultadoEvaluacion = "Buena";
        }
        else{
            resultadoEvaluacion = "Regular";
        }

        return resultadoEvaluacion;
    }

}