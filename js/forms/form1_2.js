export const form1_2 = {
    id: "1_2",
    title: "1.2 Definición del Problema",
    intro: "Define con claridad el problema de diseño a partir del contexto identificado.",
    fields: [
        {
            key: "problemDefinition",
            label: "Aspecto o situación a resolver",
            type: "text",
            max: 1200,
            rows: 8,
            help: "Define con claridad qué aspecto o situación específica debe resolverse dentro del contexto identificado. Redacta un solo párrafo."
        },
        {
            key: "solutionObjective",
            label: "Objetivo de la solución propuesta",
            type: "text",
            max: 1200,
            rows: 8,
            help: "Explica qué se busca lograr o alcanzar mediante la solución propuesta. Redacta un solo párrafo."
        },
        {
            key: "designConstraints",
            label: "Limitaciones y condiciones del diseño",
            type: "text",
            max: 1200,
            rows: 8,
            help: "Identifica y describe las limitaciones o condiciones que deben considerarse, como espacio disponible, costo, materiales, uso, mantenimiento y seguridad. Redacta un solo párrafo."
        },
        {
            key: "beneficiaries",
            label: "Usuarios y beneficiarios",
            type: "text",
            max: 1200,
            rows: 8,
            help: "Reconoce y describe quiénes se beneficiarán directa o indirectamente con la solución planteada. Redacta un solo párrafo."
        },
        {
            key: "designProblemStatement",
            label: "Enunciado del problema de diseño",
            type: "text",
            max: 1200,
            rows: 8,
            help: "Redacta un enunciado claro y conciso que formule el problema de diseño, integrando el contexto, el objetivo, las limitaciones y los beneficiarios. Redacta un solo párrafo."
        }
    ]
};
