import { Comida } from "./Comida";
import { Objetivo } from "./Objetivo";
import { Paciente } from "./Paciente";
import { Profesional } from "./Profesional";
import { Bebida } from "./enums/Bebidas.enum";
import { Colacion } from "./enums/Colaciones.enum";
import { DuracionPlanAlimenticio } from "./enums/DuracionPlanAlimenticio.enum";
import { TipoComida } from "./enums/TipoComida.enum";
import { TipoComposicion } from "./enums/TipoComposicion.enum";
import { ResultadoEvaluacion } from "./enums/ResultadoEvaluacion.enum";


export class PlanAlimenticio{
    private profesional : Profesional;
    private paciente : Paciente;
    private duracion : DuracionPlanAlimenticio;
    private objetivos : Objetivo[];
    private comidas : Comida[];
    private edadInicial: number;
    private pesoInicial : number;
    private medidaCinturaInicial: number;
    private colacionesPermitidas : Colacion[];
    private bebidasPermitidas : Bebida[];
    

    constructor( profesional : Profesional, paciente : Paciente, duracion : DuracionPlanAlimenticio, objetivos? : Objetivo[], comidas? :Comida[] ){

        this.profesional = profesional;
        this.paciente = paciente;
        this.duracion = duracion;
        this.objetivos = objetivos ?? []; 
        this.comidas = comidas ?? [];
        this.edadInicial = paciente.getEdad();
        this.pesoInicial = paciente.getPeso();
        this.medidaCinturaInicial = paciente.getMedidaCintura();
        this.colacionesPermitidas = [];
        this.bebidasPermitidas = [];
    }



    public addObjetivo(objetivo : Objetivo){
        this.objetivos.push(objetivo);
    }
    
    public addColacionPermitida(colacion : Colacion){
        this.colacionesPermitidas.push(colacion);
    }
    
    public addBebidaPermitida(bebida : Bebida){
        this.bebidasPermitidas.push(bebida);
    }
    public addComida(comida : Comida){
        this.comidas.push(comida);
    }

    public getComidasPorTipo(tipoComida :TipoComida){
        return this.comidas.filter( (comida) => comida.getTipoComida() == tipoComida);
    } 

    public getCantComidas(): number{
        return this.comidas.length;
    }

    public getCantAlmuerzosCenas(): number{
        return this.getComidasPorTipo(TipoComida.ALMUERZO_CENA).length;
    }

    
    public getCantDesayunosMeriendas() : number{
        return this.getComidasPorTipo(TipoComida.DESAYUNO_MERIENDA).length;
    }

    public getCantBebidasPermitidas() :number{
        return this.bebidasPermitidas.length;
    }

    public getCantColacionesPermitidas() :number{
        return this.colacionesPermitidas.length;
    }

    private promedioPorcentajeTipoMayorA(tipoComida : TipoComposicion, min : number){
        let comidasAC = this.getComidasPorTipo(TipoComida.ALMUERZO_CENA);
        let promedioPorcentajeComidas = comidasAC.reduce((accumulator, comida) => accumulator + comida.getPorcentajeComposicion(tipoComida) , 0) / comidasAC.length; 
        
        return (promedioPorcentajeComidas > min);
    }

    public esFuerteProteinas():boolean{
        return this.promedioPorcentajeTipoMayorA(TipoComposicion.PROTEINA, 50)
    }
    
    public esBienVerde() : boolean{
        return this.promedioPorcentajeTipoMayorA(TipoComposicion.VEGETAL, 35)
        
    }
    public generarEvaluacion() : ResultadoEvaluacion{
        let resultadoEvaluacion;

        let cantidadObjetivos = this.objetivos.length;
        
        let objetivosCumplidos = this.objetivos.reduce((accumulator, objetivo) => objetivo.getCumplido() ? accumulator + 1 : accumulator, 0)

        let relacionObjetivosCumplidos = objetivosCumplidos / cantidadObjetivos;

        if(relacionObjetivosCumplidos == 1){
            resultadoEvaluacion = ResultadoEvaluacion.EXCELENTE;
        }
        else if( relacionObjetivosCumplidos >= 0.6 ){
            resultadoEvaluacion = ResultadoEvaluacion.MUY_BUENA;
        }
        else if( relacionObjetivosCumplidos >= 0.5 ){
            resultadoEvaluacion = ResultadoEvaluacion.BUENA;
        }
        else{
            resultadoEvaluacion =  ResultadoEvaluacion.REGULAR;
        }

        return resultadoEvaluacion;
    }

}