export const form1_5 = {
    id: "1_5",
    title: "1.5 Plan de Trabajo",
    intro: "Organiza y planifica las actividades necesarias para el desarrollo del proyecto de diseño.",
    fields: [
        {
            key: "projectStages",
            label: "Etapas del proyecto",
            type: "text",
            max: 1200,
            rows: 8,
            help: "Identifica y organiza las etapas principales que componen el desarrollo del proyecto de diseño. Redacta un párrafo o presenta un esquema."
        },
        {
            key: "projectActivities",
            label: "Actividades por etapa",
            type: "text",
            max: 1200,
            rows: 8,
            help: "Define y describe las actividades específicas que se deben realizar en cada etapa, relacionándolas con los objetivos del proyecto. Redacta un párrafo o utiliza una tabla."
        },
        {
            key: "timeEstimation",
            label: "Estimación de tiempos",
            type: "text",
            max: 1200,
            rows: 8,
            help: "Estima el tiempo necesario para el desarrollo de cada actividad, considerando su complejidad y los recursos disponibles. Presenta una tabla o cronograma preliminar."
        },
        {
            key: "taskAssignment",
            label: "Asignación de responsables",
            type: "text",
            max: 1200,
            rows: 8,
            help: "Asigna los responsables de cada tarea o conjunto de actividades, indicando el rol que desempeñará cada integrante del equipo. Presenta la información en una tabla."
        },
        {
            key: "intermediateDeliverables",
            label: "Resultados o productos intermedios",
            type: "text",
            max: 1200,
            rows: 8,
            help: "Determina y explica los resultados o productos intermedios que deben obtenerse al finalizar cada fase del proyecto. Redacta un párrafo o presenta un esquema."
        },
        {
            key: "ganttDescription",
            label: "Descripción del diagrama de Gantt",
            type: "text",
            max: 1200,
            rows: 8,
            help: "Diseña el diagrama de Gantt que represente visualmente el plan de trabajo del proyecto y descríbelo."
        },
        {
            key: "ganttChart",
            label: "Diagrama de Gantt",
            type: "image",
            help: "Sube el diagrama de gant en formato de imagen."
        }
    ]
};
