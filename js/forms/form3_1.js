export const form3_1 = {
    id: "3_1",
    title: "3.1 Diseño de configuración",
    intro: "Define la estructura general del sistema técnico, sus componentes y la configuración final del diseño.",
    fields: [
        {
            key: "modulesAndComponents",
            label: "Identificación de módulos y componentes",
            type: "text",
            max: 1200,
            rows: 8,
            help: "Identifica los módulos, subconjuntos y componentes del sistema, describiendo su función y relaciones básicas."
        },
        {
            key: "spatialLayout",
            label: "Disposición espacial del sistema",
            type: "text",
            max: 1200,
            rows: 8,
            help: "Organiza la disposición espacial de los componentes considerando funcionalidad, ergonomía y accesibilidad."
        },
        {
            key: "geometricAnalysis",
            label: "Compatibilidad geométrica y de conexión",
            type: "text",
            max: 1200,
            rows: 8,
            help: "Analiza interferencias, tolerancias y rutas de ensamblaje entre las partes del sistema."
        },
        {
            key: "finalDesignConfig",
            label: "Configuración final del producto",
            type: "text",
            max: 1200,
            rows: 8,
            help: "Define la configuración final integrando aspectos funcionales, estéticos y estructurales."
        },
        {
            key: "configDiagrams",
            label: "Diagramas y esquemas del diseño",
            type: "image",
            help: "Sube diagramas de bloques, bocetos dimensionales, esquemas analíticos o vistas generales del diseño."
        }
    ]
};
