export const form3_5 = {
    id: "3_5",
    title: "3.5 Diseño para la manufactura",
    intro: "Evalúa la viabilidad del diseño desde el punto de vista de fabricación.",
    fields: [
        {
            key: "manufacturingProcesses",
            label: "Procesos de manufactura",
            type: "text",
            max: 800,
            rows: 6,
            help: "Identifica los procesos de fabricación adecuados para cada componente."
        },
        {
            key: "processLimitations",
            label: "Limitaciones técnicas y económicas",
            type: "text",
            max: 800,
            rows: 6,
            help: "Analiza las limitaciones técnicas y económicas de los procesos seleccionados."
        },
        {
            key: "manufacturability",
            label: "Optimización de la manufacturabilidad",
            type: "text",
            max: 800,
            rows: 6,
            help: "Evalúa la facilidad de producción, ensamblaje y mantenimiento."
        },
        {
            key: "manufacturingTable",
            label: "Tabla técnica de manufactura",
            type: "image",
            help: "Sube la tabla que relacione componentes, procesos y herramientas."
        }
    ]
};
