import { Comida } from "../main/Comida";
import { Composicion } from "../main/Composicion";
import { Objetivo } from "../main/Objetivo";
import { Paciente } from "../main/Paciente";
import { PlanAlimenticio } from "../main/PlanAlimenticio";
import { Profesional } from "../main/Profesional";
import { DuracionPlanAlimenticio } from "../main/enums/DuracionPlanAlimenticio.enum";
import { Sexo } from "../main/enums/Sexo.enum";
import { TipoComposicion } from "../main/enums/TipoComposicion.enum";
import { TipoComida } from "../main/enums/TipoComida.enum";
import { Bebida } from "../main/enums/Bebidas.enum";
import { Colacion } from "../main/enums/Colaciones.enum";
import { ResultadoEvaluacion } from "../main/enums/ResultadoEvaluacion.enum";

test("1. Permitir obtener la calificación final de un plan alimenticio, en base al cumplimiento de sus objetivos", () => {
    
    let paciente = new Paciente("Pepe", "Lopez", new Date("1995-12-17"), Sexo.MASCULINO,"Boxeo", 90, 100)
    let profesional = new Profesional("Juanito", "Rodriguez", "Ganancia de Masa Muscular", 1234);

    let composicion1 = new Composicion("Milanesa de Pollo", "400g de milanesa de pollo", TipoComposicion.PROTEINA, 50)
    let composicion2 = new Composicion("Ensalada lechuga y tomate", "100g de tomate y 100g de lechuga", TipoComposicion.VEGETAL,25)
    let composicion3 = new Composicion("Arroz", "200g de arroz", TipoComposicion.CARBOHIDRATO,25)
    let composicion4 = new Composicion("Pollo al horno", "400g de milanesa de pollo", TipoComposicion.PROTEINA, 50)
    let composicion5 = new Composicion("Fideos", "300g de fideos", TipoComposicion.CARBOHIDRATO, 25)
    let composicion6 = new Composicion("Brocoli hervido", "200g de brocoli", TipoComposicion.VEGETAL, 25)
    
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

    let evaluacion :ResultadoEvaluacion = planAlimenticio.generarEvaluacion();
    expect(evaluacion).toBe(ResultadoEvaluacion.REGULAR);
});


test("1. Permitir obtener la calificación final de un plan alimenticio, en base al cumplimiento de sus objetivos", () => {
    
    let paciente = new Paciente("Pepe", "Lopez", new Date("1995-12-17"), Sexo.MASCULINO,"Boxeo", 90, 100)
    let profesional = new Profesional("Juanito", "Rodriguez", "Ganancia de Masa Muscular", 1234);

    let composicion1 = new Composicion("Milanesa de Pollo", "400g de milanesa de pollo", TipoComposicion.PROTEINA, 50)
    let composicion2 = new Composicion("Ensalada lechuga y tomate", "100g de tomate y 100g de lechuga", TipoComposicion.VEGETAL,25)
    let composicion3 = new Composicion("Arroz", "200g de arroz", TipoComposicion.CARBOHIDRATO,25)
    let composicion4 = new Composicion("Pollo al horno", "400g de milanesa de pollo", TipoComposicion.PROTEINA, 50)
    let composicion5 = new Composicion("Fideos", "300g de fideos", TipoComposicion.CARBOHIDRATO, 25)
    let composicion6 = new Composicion("Brocoli hervido", "200g de brocoli", TipoComposicion.VEGETAL, 25)
    
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
    objetivo2.completar();
    objetivo3.completar();

    let evaluacion :ResultadoEvaluacion = planAlimenticio.generarEvaluacion();
    expect(evaluacion).toBe(ResultadoEvaluacion.MUY_BUENA);
});



test("2. Permitir saber la cantidad total de comidas de un plan alimenticio.", () => {
    
    let paciente = new Paciente("Pepe", "Lopez", new Date("1995-12-17"), Sexo.MASCULINO,"Boxeo", 90, 100)
    let profesional = new Profesional("Juanito", "Rodriguez", "Ganancia de Masa Muscular", 1234);

    let composicion1 = new Composicion("Milanesa de Pollo", "400g de milanesa de pollo", TipoComposicion.PROTEINA, 50)
    let composicion2 = new Composicion("Ensalada lechuga y tomate", "100g de tomate y 100g de lechuga", TipoComposicion.VEGETAL,25)
    let composicion3 = new Composicion("Arroz", "200g de arroz", TipoComposicion.CARBOHIDRATO,25)
    let composicion4 = new Composicion("Pollo al horno", "400g de milanesa de pollo", TipoComposicion.PROTEINA, 50)
    let composicion5 = new Composicion("Fideos", "300g de fideos", TipoComposicion.CARBOHIDRATO, 25)
    let composicion6 = new Composicion("Brocoli hervido", "200g de brocoli", TipoComposicion.VEGETAL, 25)
    
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

    planAlimenticio.addComida(comida1);
    planAlimenticio.addComida(comida2);
    planAlimenticio.addComida(comida3);

    objetivo1.completar();
    objetivo2.completar();
    objetivo3.completar();

    let cantComida :number = planAlimenticio.getCantComidas();
    expect(cantComida).toBe(3);
});

test("3. Permitir saber la cantidad de comidas de un tipo en particular (DM/AC) de un plan alimenticio", () => {
    
    let paciente = new Paciente("Pepe", "Lopez", new Date("1995-12-17"), Sexo.MASCULINO,"Boxeo", 90, 100)
    let profesional = new Profesional("Juanito", "Rodriguez", "Ganancia de Masa Muscular", 1234);

    let composicion1 = new Composicion("Milanesa de Pollo", "400g de milanesa de pollo", TipoComposicion.PROTEINA, 50)
    let composicion2 = new Composicion("Ensalada lechuga y tomate", "100g de tomate y 100g de lechuga", TipoComposicion.VEGETAL,25)
    let composicion3 = new Composicion("Arroz", "200g de arroz", TipoComposicion.CARBOHIDRATO,25)
    let composicion4 = new Composicion("Pollo al horno", "400g de milanesa de pollo", TipoComposicion.PROTEINA, 50)
    let composicion5 = new Composicion("Fideos", "300g de fideos", TipoComposicion.CARBOHIDRATO, 25)
    let composicion6 = new Composicion("Brocoli hervido", "200g de brocoli", TipoComposicion.VEGETAL, 25)
    
    let comida1 = new Comida("Milanesa de pollo con acompañamiento", "Una milanesa de pollo ...", TipoComida.ALMUERZO_CENA, [composicion1, composicion2, composicion3]);
    let comida2 = new Comida("Pollo al horno con acompañamiento", "Un pollo ...", TipoComida.ALMUERZO_CENA, [composicion4, composicion2, composicion6]);
    let comida3 = new Comida("Tostadas con queso", "3 rodajas de pan integral con queso crema untable", TipoComida.DESAYUNO_MERIENDA);
    let comida4= new Comida("Galletitas de agua con mermelada", "5 galletitas de agua con mermelada", TipoComida.DESAYUNO_MERIENDA);
    let comida5 = new Comida("Ensalada de Frutas", "300 gramos de ensalada de fruta", TipoComida.DESAYUNO_MERIENDA);

    let planAlimenticio = new PlanAlimenticio(profesional, paciente, DuracionPlanAlimenticio.MES)

    planAlimenticio.addComida(comida1);
    planAlimenticio.addComida(comida2);
    planAlimenticio.addComida(comida3);
    planAlimenticio.addComida(comida4);
    planAlimenticio.addComida(comida5);

    let cantAlmuerzosCenas :number = planAlimenticio.getCantAlmuerzosCenas();
    expect(cantAlmuerzosCenas).toBe(2);
});


test("3. Permitir saber la cantidad de comidas de un tipo en particular (DM/AC) de un plan alimenticio", () => {
    
    let paciente = new Paciente("Pepe", "Lopez", new Date("1995-12-17"), Sexo.MASCULINO,"Boxeo", 90, 100)
    let profesional = new Profesional("Juanito", "Rodriguez", "Ganancia de Masa Muscular", 1234);

    let composicion1 = new Composicion("Milanesa de Pollo", "400g de milanesa de pollo", TipoComposicion.PROTEINA, 50)
    let composicion2 = new Composicion("Ensalada lechuga y tomate", "100g de tomate y 100g de lechuga", TipoComposicion.VEGETAL,25)
    let composicion3 = new Composicion("Arroz", "200g de arroz", TipoComposicion.CARBOHIDRATO,25)
    let composicion4 = new Composicion("Pollo al horno", "400g de milanesa de pollo", TipoComposicion.PROTEINA, 50)
    let composicion5 = new Composicion("Fideos", "300g de fideos", TipoComposicion.CARBOHIDRATO, 25)
    let composicion6 = new Composicion("Brocoli hervido", "200g de brocoli", TipoComposicion.VEGETAL, 25)
    
    let comida1 = new Comida("Milanesa de pollo con acompañamiento", "Una milanesa de pollo ...", TipoComida.ALMUERZO_CENA, [composicion1, composicion2, composicion3]);
    let comida2 = new Comida("Pollo al horno con acompañamiento", "Un pollo ...", TipoComida.ALMUERZO_CENA, [composicion4, composicion2, composicion6]);
    let comida3 = new Comida("Tostadas con queso", "3 rodajas de pan integral con queso crema untable", TipoComida.DESAYUNO_MERIENDA);
    let comida4= new Comida("Galletitas de agua con mermelada", "5 galletitas de agua con mermelada", TipoComida.DESAYUNO_MERIENDA);
    let comida5 = new Comida("Ensalada de Frutas", "300 gramos de ensalada de fruta", TipoComida.DESAYUNO_MERIENDA);

    let planAlimenticio = new PlanAlimenticio(profesional, paciente, DuracionPlanAlimenticio.MES)

    planAlimenticio.addComida(comida1);
    planAlimenticio.addComida(comida2);
    planAlimenticio.addComida(comida3);
    planAlimenticio.addComida(comida4);
    planAlimenticio.addComida(comida5);

    let cantDesayunosMeriendas :number = planAlimenticio.getCantDesayunosMeriendas();
    expect(cantDesayunosMeriendas).toBe(3);
});


test("4. Permitir saber si el plan alimenticio es “fuerte en proteínas”: un plan alimenticio es “fuerte en proteínas” cuando el promedio de porcentaje de proteínas en todas las comidas AC es igual o superior al 50%.", () => {
    
    let paciente = new Paciente("Pepe", "Lopez", new Date("1995-12-17"), Sexo.MASCULINO,"Boxeo", 90, 100)
    let profesional = new Profesional("Juanito", "Rodriguez", "Ganancia de Masa Muscular", 1234);

    let composicion1 = new Composicion("Milanesa de Pollo", "400g de milanesa de pollo", TipoComposicion.PROTEINA, 60)
    let composicion2 = new Composicion("Ensalada lechuga y tomate", "100g de tomate y 100g de lechuga", TipoComposicion.VEGETAL,25)
    let composicion3 = new Composicion("Arroz", "200g de arroz", TipoComposicion.CARBOHIDRATO,25)
    let composicion4 = new Composicion("Pollo al horno", "400g de milanesa de pollo", TipoComposicion.PROTEINA, 50)
    let composicion5 = new Composicion("Fideos", "300g de fideos", TipoComposicion.CARBOHIDRATO, 25)
    let composicion6 = new Composicion("Brocoli hervido", "200g de brocoli", TipoComposicion.VEGETAL, 25)
    
    let comida1 = new Comida("Milanesa de pollo con acompañamiento", "Una milanesa de pollo ...", TipoComida.ALMUERZO_CENA, [composicion1, composicion2, composicion3]);
    let comida2 = new Comida("Pollo al horno con acompañamiento", "Un pollo ...", TipoComida.ALMUERZO_CENA, [composicion4, composicion2, composicion6]);
    let comida3 = new Comida("Tostadas con queso", "3 rodajas de pan integral con queso crema untable", TipoComida.DESAYUNO_MERIENDA);
    let comida4= new Comida("Galletitas de agua con mermelada", "5 galletitas de agua con mermelada", TipoComida.DESAYUNO_MERIENDA);
    let comida5 = new Comida("Ensalada de Frutas", "300 gramos de ensalada de fruta", TipoComida.DESAYUNO_MERIENDA);

    let planAlimenticio = new PlanAlimenticio(profesional, paciente, DuracionPlanAlimenticio.MES)

    planAlimenticio.addComida(comida1);
    planAlimenticio.addComida(comida2);
    planAlimenticio.addComida(comida3);
    planAlimenticio.addComida(comida4);
    planAlimenticio.addComida(comida5);


    let esFuerteProteinas :boolean = planAlimenticio.esFuerteProteinas();
    expect(esFuerteProteinas).toBe(true);
});


test("4. Permitir saber si el plan alimenticio es “fuerte en proteínas”: un plan alimenticio es “fuerte en proteínas” cuando el promedio de porcentaje de proteínas en todas las comidas AC es igual o superior al 50%.", () => {
    
    let paciente = new Paciente("Pepe", "Lopez", new Date("1995-12-17"), Sexo.MASCULINO,"Boxeo", 90, 100)
    let profesional = new Profesional("Juanito", "Rodriguez", "Ganancia de Masa Muscular", 1234);

    let composicion1 = new Composicion("Milanesa de Pollo", "400g de milanesa de pollo", TipoComposicion.PROTEINA, 49)
    let composicion2 = new Composicion("Ensalada lechuga y tomate", "100g de tomate y 100g de lechuga", TipoComposicion.VEGETAL,25)
    let composicion3 = new Composicion("Arroz", "200g de arroz", TipoComposicion.CARBOHIDRATO,25)
    let composicion4 = new Composicion("Pollo al horno", "400g de milanesa de pollo", TipoComposicion.PROTEINA, 50)
    let composicion5 = new Composicion("Fideos", "300g de fideos", TipoComposicion.CARBOHIDRATO, 25)
    let composicion6 = new Composicion("Brocoli hervido", "200g de brocoli", TipoComposicion.VEGETAL, 25)
    
    let comida1 = new Comida("Milanesa de pollo con acompañamiento", "Una milanesa de pollo ...", TipoComida.ALMUERZO_CENA, [composicion1, composicion2, composicion3]);
    let comida2 = new Comida("Pollo al horno con acompañamiento", "Un pollo ...", TipoComida.ALMUERZO_CENA, [composicion4, composicion2, composicion6]);
    let comida3 = new Comida("Tostadas con queso", "3 rodajas de pan integral con queso crema untable", TipoComida.DESAYUNO_MERIENDA);
    let comida4= new Comida("Galletitas de agua con mermelada", "5 galletitas de agua con mermelada", TipoComida.DESAYUNO_MERIENDA);
    let comida5 = new Comida("Ensalada de Frutas", "300 gramos de ensalada de fruta", TipoComida.DESAYUNO_MERIENDA);

    let planAlimenticio = new PlanAlimenticio(profesional, paciente, DuracionPlanAlimenticio.MES)

    planAlimenticio.addComida(comida1);
    planAlimenticio.addComida(comida2);
    planAlimenticio.addComida(comida3);
    planAlimenticio.addComida(comida4);
    planAlimenticio.addComida(comida5);


    let esFuerteProteinas :boolean = planAlimenticio.esFuerteProteinas();
    expect(esFuerteProteinas).toBe(false);
});

test("5. Permitir saber si el plan alimenticio es “bien verde”: un plan alimenticio es “bien verde” cuando el promedio de porcentaje de vegetales en todas las comidas AC es superior al 35%", () => {
    
    let paciente = new Paciente("Pepe", "Lopez", new Date("1995-12-17"), Sexo.MASCULINO,"Boxeo", 90, 100)
    let profesional = new Profesional("Juanito", "Rodriguez", "Ganancia de Masa Muscular", 1234);

    let composicion1 = new Composicion("Milanesa de Pollo", "400g de milanesa de pollo", TipoComposicion.PROTEINA, 50)
    let composicion2 = new Composicion("Ensalada lechuga y tomate", "100g de tomate y 100g de lechuga", TipoComposicion.VEGETAL,40)
    let composicion3 = new Composicion("Arroz", "200g de arroz", TipoComposicion.CARBOHIDRATO,10)
    let composicion4 = new Composicion("Pollo al horno", "400g de milanesa de pollo", TipoComposicion.PROTEINA, 50)
    let composicion5 = new Composicion("Fideos", "300g de fideos", TipoComposicion.CARBOHIDRATO, 25)
    let composicion6 = new Composicion("Brocoli hervido", "200g de brocoli", TipoComposicion.VEGETAL, 25)
    
    let comida1 = new Comida("Milanesa de pollo con acompañamiento", "Una milanesa de pollo ...", TipoComida.ALMUERZO_CENA, [composicion1, composicion2, composicion3]);
    let comida2 = new Comida("Pollo al horno con acompañamiento", "Un pollo ...", TipoComida.ALMUERZO_CENA, [composicion4, composicion2, composicion6]);
    let comida3 = new Comida("Tostadas con queso", "3 rodajas de pan integral con queso crema untable", TipoComida.DESAYUNO_MERIENDA);
    let comida4= new Comida("Galletitas de agua con mermelada", "5 galletitas de agua con mermelada", TipoComida.DESAYUNO_MERIENDA);
    let comida5 = new Comida("Ensalada de Frutas", "300 gramos de ensalada de fruta", TipoComida.DESAYUNO_MERIENDA);

    let planAlimenticio = new PlanAlimenticio(profesional, paciente, DuracionPlanAlimenticio.MES)

    planAlimenticio.addComida(comida1);
    planAlimenticio.addComida(comida2);
    planAlimenticio.addComida(comida3);
    planAlimenticio.addComida(comida4);
    planAlimenticio.addComida(comida5);


    let esBienVerde :boolean = planAlimenticio.esBienVerde();
    expect(esBienVerde).toBe(true);
});


test("5. Permitir saber si el plan alimenticio es “bien verde”: un plan alimenticio es “bien verde” cuando el promedio de porcentaje de vegetales en todas las comidas AC es superior al 35%", () => {
    
    let paciente = new Paciente("Pepe", "Lopez", new Date("1995-12-17"), Sexo.MASCULINO,"Boxeo", 90, 100)
    let profesional = new Profesional("Juanito", "Rodriguez", "Ganancia de Masa Muscular", 1234);

    let composicion1 = new Composicion("Milanesa de Pollo", "400g de milanesa de pollo", TipoComposicion.PROTEINA, 50)
    let composicion2 = new Composicion("Ensalada lechuga y tomate", "100g de tomate y 100g de lechuga", TipoComposicion.VEGETAL,20)
    let composicion3 = new Composicion("Arroz", "200g de arroz", TipoComposicion.CARBOHIDRATO,30)
    let composicion4 = new Composicion("Pollo al horno", "400g de milanesa de pollo", TipoComposicion.PROTEINA, 55)
    let composicion5 = new Composicion("Fideos", "300g de fideos", TipoComposicion.CARBOHIDRATO, 25)
    let composicion6 = new Composicion("Brocoli hervido", "200g de brocoli", TipoComposicion.VEGETAL, 25)
    
    let comida1 = new Comida("Milanesa de pollo con acompañamiento", "Una milanesa de pollo ...", TipoComida.ALMUERZO_CENA, [composicion1, composicion2, composicion3]);
    let comida2 = new Comida("Pollo al horno con acompañamiento", "Un pollo ...", TipoComida.ALMUERZO_CENA, [composicion4, composicion2, composicion6]);
    let comida3 = new Comida("Tostadas con queso", "3 rodajas de pan integral con queso crema untable", TipoComida.DESAYUNO_MERIENDA);
    let comida4= new Comida("Galletitas de agua con mermelada", "5 galletitas de agua con mermelada", TipoComida.DESAYUNO_MERIENDA);
    let comida5 = new Comida("Ensalada de Frutas", "300 gramos de ensalada de fruta", TipoComida.DESAYUNO_MERIENDA);

    let planAlimenticio = new PlanAlimenticio(profesional, paciente, DuracionPlanAlimenticio.MES)

    planAlimenticio.addComida(comida1);
    planAlimenticio.addComida(comida2);
    planAlimenticio.addComida(comida3);
    planAlimenticio.addComida(comida4);
    planAlimenticio.addComida(comida5);


    let esBienVerde :boolean = planAlimenticio.esBienVerde();
    expect(esBienVerde).toBe(false);
});


test("6. Permitir saber la cantidad total de colaciones permitidas en un plan alimenticio.", () => {
    
    let paciente = new Paciente("Pepe", "Lopez", new Date("1995-12-17"), Sexo.MASCULINO,"Boxeo", 90, 100)
    let profesional = new Profesional("Juanito", "Rodriguez", "Ganancia de Masa Muscular", 1234);


    let planAlimenticio = new PlanAlimenticio(profesional, paciente, DuracionPlanAlimenticio.MES)
    planAlimenticio.addBebidaPermitida(Bebida.AGUA_CON_GAS);
    planAlimenticio.addBebidaPermitida(Bebida.JUGO_NARANJA);


    let getCantBebidasPermitidas :number = planAlimenticio.getCantBebidasPermitidas();
    expect(getCantBebidasPermitidas).toBe(2);
});

test("7. Permitir saber la cantidad total de bebidas permitidas en un plan alimenticio.", () => {
    
    let paciente = new Paciente("Pepe", "Lopez", new Date("1995-12-17"), Sexo.MASCULINO,"Boxeo", 90, 100)
    let profesional = new Profesional("Juanito", "Rodriguez", "Ganancia de Masa Muscular", 1234);


    let planAlimenticio = new PlanAlimenticio(profesional, paciente, DuracionPlanAlimenticio.MES)
    planAlimenticio.addColacionPermitida(Colacion.TURRON);



    let getCantBebidasPermitidas :number = planAlimenticio.getCantColacionesPermitidas();
    expect(getCantBebidasPermitidas).toBe(1);
});