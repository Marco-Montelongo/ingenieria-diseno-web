export const formEquipo = {
    id: "Equipo",
    title: "Datos del Equipo y del Proyecto",
    intro: "Completa la información general del equipo de trabajo y del proyecto conforme a los criterios indicados.",
    fields: [
        {
            key: "group",
            label: "Grupo",
            type: "text",
            max: 2,
            rows: 1,
            help: "Indica el grupo académico al que pertenece el equipo, conforme a la asignatura correspondiente (por ejemplo: 01)."
        },
        {
            key: "teamNumber",
            label: "Número de equipo",
            type: "text",
            max: 2,
            rows: 1,
            help: "Especifica el número asignado al equipo de trabajo (por ejemplo: 05)."
        },
        {
            key: "projectName",
            label: "Nombre del proyecto",
            type: "text",
            max: 150,
            rows: 2,
            help: "Escribe el nombre completo del proyecto, de forma clara y representativa de su objetivo principal."
        },
        {
            key: "semester",
            label: "Semestre",
            type: "text",
            max: 6,
            rows: 1,
            help: "Indica el semestre académico en el que se desarrolla el proyecto (por ejemplo: 2026-1)."
        },
        {
            key: "teamMembers",
            label: "Integrantes del equipo",
            type: "text",
            max: 300,
            rows: 8,
            help: "Registra los nombres completos de los siete integrantes del equipo iniciando por apellidos, en orden alfabético, separados por punto y coma (;)."
        }
    ]
};
