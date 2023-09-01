import { Sexo } from "./enums/Sexo.enum";

export class Paciente{
    private nombre : string;
    private apellido : string;
    private nacimiento : Date;
    private sexo : Sexo;
    private disciplina : string; //Posibilidad agregar especialidades
    private peso : number;
    private medidaCintura;


    constructor(nombre : string, apellido : string, nacimiento :Date, sexo:Sexo, disciplina : string, peso :number,  medidaCintura :number) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.nacimiento = nacimiento;
        this.sexo = sexo;
        this.peso = peso;
        this.medidaCintura = medidaCintura
        this.disciplina = disciplina;
    }

    public getEdad() : number{
        const today = new Date();

        const correccionEdad = (today.getMonth() < this.nacimiento.getMonth() || 
            (today.getMonth() === this.nacimiento.getMonth() && today.getDate() < this.nacimiento.getDate())) ? 0 : 1;

        const edad = today.getFullYear() - this.nacimiento.getFullYear() - correccionEdad;
      
        return edad;
    }

    public getPeso() : number{
        return this.peso;
    }

    public getMedidaCintura() : number{
        return this.medidaCintura;
    }
}