export const form2_5 = {
    id: "2_5",
    title: "2.5 Matriz de decisión",
    intro: "Evalúa y compara las alternativas de diseño mediante una matriz de decisión ponderada para seleccionar el concepto más viable y equilibrado.",
    fields: [
        {
            key: "evaluationCriteria",
            label: "Criterios de evaluación",
            type: "text",
            max: 900,
            rows: 6,
            help: "Define los criterios de evaluación relevantes para el proyecto, considerando aspectos técnicos, económicos, funcionales y ambientales. Redacta un párrafo."
        },
        {
            key: "criteriaWeighting",
            label: "Asignación de pesos a los criterios",
            type: "text",
            max: 900,
            rows: 6,
            help: "Asigna un peso o importancia relativa a cada criterio dentro de la evaluación general y justifica brevemente dicha asignación. Redacta un párrafo."
        },
        {
            key: "evaluatedAlternatives",
            label: "Alternativas evaluadas",
            type: "text",
            max: 900,
            rows: 6,
            help: "Selecciona y describe las alternativas de concepto que serán objeto de comparación dentro de la matriz de decisión. Redacta un párrafo."
        },
        {
            key: "performanceAnalysis",
            label: "Análisis del desempeño",
            type: "text",
            max: 900,
            rows: 6,
            help: "Analiza el desempeño de cada alternativa frente a los criterios establecidos, explicando sus fortalezas y debilidades. Redacta un párrafo."
        },
        {
            key: "scoreCalculation",
            label: "Cálculo de puntajes",
            type: "text",
            max: 900,
            rows: 6,
            help: "Explica el cálculo del puntaje total o ponderado obtenido por cada alternativa dentro de la matriz de decisión. Redacta un párrafo."
        },
        {
            key: "finalSelection",
            label: "Selección del concepto óptimo",
            type: "text",
            max: 900,
            rows: 6,
            help: "Determina y justifica qué concepto resulta más equilibrado y viable de acuerdo con los resultados obtenidos. Redacta un párrafo."
        },
        {
            key: "decisionMatrix",
            label: "Matriz de decisión",
            type: "image",
            help: "Sube la matriz de decisión completa con criterios ponderados, calificaciones y puntajes finales."
        }
    ]
};
