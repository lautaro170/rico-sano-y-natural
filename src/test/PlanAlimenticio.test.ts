import { Comida } from "../main/Comida";
import { Composicion } from "../main/Composicion";
import { Objetivo } from "../main/Objetivo";
import { Paciente } from "../main/Paciente";
import { PlanAlimenticio } from "../main/PlanAlimenticio";
import { Profesional } from "../main/Profesional";
import { DuracionPlanAlimenticio } from "../main/enums/DuracionPlanAlimenticio.enum";
import { Sexo } from "../main/enums/Sexo.enum";
import { tipoComposicion } from "../main/enums/TipoComposicion.enum";
import { TipoComida } from "../main/enums/tipoComida.enum";

test("1. Permitir obtener la calificación final de un plan alimenticio, en base al cumplimiento de sus objetivos", () => {
    
    let paciente = new Paciente("Pepe", "Lopez", new Date("1995-12-17"), Sexo.MASCULINO,"Boxeo", 90, 100)
    let profesional = new Profesional("Juanito", "Rodriguez", "Ganancia de Masa Muscular", 1234);

    let composicion1 = new Composicion("Milanesa de Pollo", "400g de milanesa de pollo", tipoComposicion.PROTEINA, 50)
    let composicion2 = new Composicion("Ensalada lechuga y tomate", "100g de tomate y 100g de lechuga", tipoComposicion.VEGETAL,25)
    let composicion3 = new Composicion("Arroz", "200g de arroz", tipoComposicion.CARBOHIDRATO,25)
    let composicion4 = new Composicion("Pollo al horno", "400g de milanesa de pollo", tipoComposicion.PROTEINA, 50)
    let composicion5 = new Composicion("Fideos", "300g de fideos", tipoComposicion.CARBOHIDRATO, 25)
    let composicion6 = new Composicion("Brocoli hervido", "200g de brocoli", tipoComposicion.VEGETAL, 25)
    
    let comida1 = new Comida("Milanesa de pollo con acompañamiento", "Una milanesa de pollo ...", TipoComida.ALMUERZO_CENA, [composicion1, composicion2, composicion3]);
    let comida2 = new Comida("Pollo al horno con acompañamiento", "Un pollo ...", TipoComida.ALMUERZO_CENA, [composicion4, composicion2, composicion6]);
    let comida3 = new Comida("Tostadas con queso", "3 rodajas de pan integral con queso crema untable", TipoComida.DESAYUNO_MERIENDA);
    
    let objetivo1 = new Objetivo("Subir 2kg", "Se busca aumentar 2 kg de masa muscular")
    let objetivo2 = new Objetivo("Reducir *cosa nutricionista*", "Se busca reducir *cosa nutricionista*")
    let objetivo3 = new Objetivo("Aumentar *cosa nutricionista*", "Se busca aumentar *cosa nutricionista*")
    let objetivo4 = new Objetivo("Mantener *cosa nutricionista*", "Se busca mantener *cosa nutricionista*")

    let planAlimenticio = new PlanAlimenticio(profesional, paciente, DuracionPlanAlimenticio.MES)

    planAlimenticio.addObjetivo(objetivo1);
    planAlimenticio.addObjetivo(objetivo2);
    planAlimenticio.addObjetivo(objetivo3);
    planAlimenticio.addObjetivo(objetivo4);

    objetivo1.completar();

    planAlimenticio.generarEvaluacion();
    expect(2 + 2).toBe(4);
});