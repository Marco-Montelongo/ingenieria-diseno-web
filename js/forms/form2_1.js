export const form2_1 = {
    id: "2_1",
    title: "2.1 Diagrama de caja negra",
    intro: "Analiza el funcionamiento general del sistema técnico del proyecto mediante la identificación de sus entradas, procesos, salidas y relación con el entorno, sin detallar aún su estructura interna.",
    fields: [
        {
            key: "mainFunction",
            label: "Función principal del sistema",
            type: "text",
            max: 800,
            rows: 5,
            help: "Identifica y describe la función principal que cumple el objeto o sistema técnico. Explica qué problema resuelve o qué necesidad atiende. Redacta un solo párrafo."
        },
        {
            key: "systemInputs",
            label: "Entradas del sistema",
            type: "text",
            max: 600,
            rows: 4,
            help: "Reconoce y enumera los elementos o recursos que ingresan al sistema, como energía, materia e información. Presenta la información en forma de lista."
        },
        {
            key: "internalProcesses",
            label: "Procesos y transformaciones internas",
            type: "text",
            max: 800,
            rows: 5,
            help: "Explica las transformaciones que ocurren dentro del sistema para cumplir su función. Describe los procesos de manera general, sin detallar componentes internos. Redacta un párrafo."
        },
        {
            key: "systemOutputs",
            label: "Salidas o resultados del sistema",
            type: "text",
            max: 800,
            rows: 5,
            help: "Describe los resultados, productos o efectos que genera el sistema al finalizar el proceso. Redacta un párrafo."
        },
        {
            key: "systemLimits",
            label: "Límites del sistema",
            type: "text",
            max: 800,
            rows: 5,
            help: "Delimita los límites físicos o funcionales que separan el sistema de su entorno. Explica qué elementos forman parte del sistema y cuáles no. Redacta un párrafo."
        },
        {
            key: "systemContext",
            label: "Interacción con el entorno",
            type: "text",
            max: 800,
            rows: 5,
            help: "Analiza las interacciones entre el sistema y su contexto, considerando al usuario, el ambiente u otros sistemas con los que se relaciona. Redacta un párrafo."
        },
        {
            key: "blackBoxExplanation",
            label: "Explicación del diagrama de caja negra",
            type: "text",
            max: 900,
            rows: 6,
            help: "Explica de manera general el funcionamiento del sistema representado en el diagrama de caja negra, describiendo la relación entre entradas, procesos, salidas y entorno. Incluye un breve texto que explique cómo el sistema responde a la necesidad identificada en la fase anterior."
        },
        {
            key: "blackBoxDiagram",
            label: "Diagrama de caja negra",
            type: "image",
            help: "Sube el diagrama de caja negra del sistema técnico, donde se representen claramente las entradas, procesos, salidas y su relación con el entorno."
        }
    ]
};
