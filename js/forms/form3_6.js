export const form3_6 = {
    id: "3_6",
    title: "3.6 Diseño para el ensamble",
    intro: "Analiza y optimiza el proceso de ensamble del producto.",
    fields: [
        {
            key: "assemblyJoints",
            label: "Uniones y fijaciones",
            type: "text",
            max: 800,
            rows: 6,
            help: "Identifica uniones, fijaciones y secuencia de montaje."
        },
        {
            key: "assemblyAnalysis",
            label: "Análisis del proceso de ensamble",
            type: "text",
            max: 800,
            rows: 6,
            help: "Analiza accesibilidad, interferencias y dificultades de montaje."
        },
        {
            key: "assemblyAlternatives",
            label: "Alternativas de ensamble",
            type: "text",
            max: 800,
            rows: 6,
            help: "Evalúa alternativas de ensamble mecánico o automatizado."
        },
        {
            key: "assemblyDiagram",
            label: "Diagrama de ensamble",
            type: "image",
            help: "Sube el diagrama o esquema secuencial de ensamble."
        }
    ]
};
