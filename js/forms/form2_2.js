export const form2_2 = {
    id: "2_2",
    title: "2.2 Definición de sistemas funcionales",
    intro: "Analiza el sistema técnico del proyecto a partir de la descomposición de su función principal en subfunciones, identificando su interacción interna, flujo de recursos y mecanismos de control.",
    fields: [
        {
            key: "mainSystemFunction",
            label: "Función principal del sistema",
            type: "text",
            max: 800,
            rows: 5,
            help: "Identifica y describe la función principal que cumple el sistema técnico, explicando su propósito general y la necesidad que atiende. Redacta un solo párrafo."
        },
        {
            key: "subFunctions",
            label: "Subfunciones del sistema",
            type: "text",
            max: 900,
            rows: 6,
            help: "Determina y describe las subfunciones o funciones parciales necesarias para cumplir la función principal. Explica cómo contribuye cada una al funcionamiento general del sistema. Redacta un párrafo."
        },
        {
            key: "resourceFlow",
            label: "Flujo de energía, materia o información",
            type: "text",
            max: 800,
            rows: 5,
            help: "Analiza el flujo de energía, materia o información entre las subfunciones que integran el sistema. Describe cómo se transfieren y transforman estos recursos dentro del sistema. Redacta un párrafo."
        },
        {
            key: "feedbackControl",
            label: "Procesos de retroalimentación y control",
            type: "text",
            max: 800,
            rows: 5,
            help: "Reconoce y explica los posibles procesos de retroalimentación, control o ajuste que ocurren entre las funciones del sistema para asegurar su correcto funcionamiento. Redacta un párrafo."
        },
        {
            key: "functionalComponents",
            label: "Componentes o mecanismos por subfunción",
            type: "text",
            max: 900,
            rows: 6,
            help: "Propón los componentes, mecanismos o elementos técnicos que podrían cumplir cada subfunción identificada. Relaciona cada componente con su función correspondiente. Redacta un párrafo."
        },
        {
            key: "functionalIntegration",
            label: "Integración funcional del sistema",
            type: "text",
            max: 900,
            rows: 6,
            help: "Explica cómo se interrelacionan las funciones y subfunciones dentro del sistema técnico para lograr su funcionamiento global y cumplir la función principal. Redacta un párrafo."
        },
        {
            key: "functionalDiagramExplanation",
            label: "Explicación del diagrama de sistemas funcionales",
            type: "text",
            max: 900,
            rows: 6,
            help: "Describe el diagrama de sistemas funcionales, explicando la descomposición de la función principal en subfunciones y la relación interna entre ellas. Incluye una breve descripción del proceso general representado."
        },
        {
            key: "functionalDiagram",
            label: "Diagrama de sistemas funcionales",
            type: "image",
            help: "Sube el diagrama de sistemas funcionales que muestre la función principal, sus subfunciones y la relación interna entre ellas."
        }
    ]
};
