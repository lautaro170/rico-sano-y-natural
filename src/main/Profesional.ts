export class Profesional{
    private nombre : string;
    private apellido : string;
    private especialidad : string; //Posibilidad agregar especialidades
    private matricula : number;
    
    constructor(nombre : string, apellido : string, especialidad : string, matricula : number) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.especialidad = especialidad;
        this.matricula = matricula;
    }

}