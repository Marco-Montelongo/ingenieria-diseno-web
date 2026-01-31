export const form3_2 = {
    id: "3_2",
    title: "3.2 Diagrama de cuerpo libre",
    intro: "Analiza las fuerzas, momentos y condiciones de equilibrio del sistema o componente principal.",
    fields: [
        {
            key: "forceIdentification",
            label: "Identificación de fuerzas y momentos",
            type: "text",
            max: 800,
            rows: 6,
            help: "Identifica las fuerzas y momentos que actúan sobre el sistema considerando su interacción con el entorno y el usuario."
        },
        {
            key: "equilibriumConditions",
            label: "Análisis de equilibrio",
            type: "text",
            max: 800,
            rows: 6,
            help: "Analiza las condiciones de equilibrio y la coherencia entre fuerzas aplicadas y reacciones."
        },
        {
            key: "mechanicalBehavior",
            label: "Interpretación del comportamiento mecánico",
            type: "text",
            max: 800,
            rows: 6,
            help: "Explica el comportamiento mecánico del sistema y su viabilidad estructural."
        },
        {
            key: "freeBodyImage",
            label: "Diagrama de cuerpo libre",
            type: "image",
            help: "Sube el diagrama de cuerpo libre con fuerzas, apoyos y reacciones."
        }
    ]
};
