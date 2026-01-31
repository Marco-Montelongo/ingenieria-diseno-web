/**
 * Ubicación: /js/forms/form1_1.js
 * 
 * Formulario 1.1 – Identificación de la necesidad
 * ------------------------------------------------------------------
 * Este módulo define la estructura de un formulario dinámico
 * utilizado para recopilar información sobre la identificación de 
 * una necesidad dentro de un diagnóstico o proyecto.
 *
 * El objeto exportado es consumido por el motor de formularios para 
 * renderizar los campos de forma automática.
 *
 * Estructura general:
 * - id:        Identificador único del formulario
 * - title:     Título visible del formulario
 * - intro:     Texto introductorio
 * - fields:    Definición de los campos del formulario
 *      - key:      identificador único
 *      - label:    texto visible
 *      - type:     "text" | "image" (tipo de campo)
 *      - max:      máximo de caracteres (solo si es texto)
 *      - rows:     tamaño de textarea (solo si es texto)
 *      - help:     texto de ayuda
 */

export const form1_1 = {
    id: "1_1",
    title: "1.1 Identificación de la Necesidad",
    intro: "Completa la información solicitada conforme a los criterios indicados.",
    fields: [
        {
            key: "problemSituation",
            label: "Identificación de la situación",
            type: "text",
            max: 1200,
            rows: 8,
            help: "Describe la situación que genera malestar, dificultad o insatisfacción en el contexto analizado. Redacta un solo párrafo."
        },
        {
            key: "contextDescription",
            label: "Contexto de la necesidad",
            type: "text",
            max: 1200,
            rows: 8,
            help: "Reconoce y describe el contexto en el que ocurre la necesidad identificada. Redacta un solo párrafo."
        },
        {
            key: "affectedStakeholders",
            label: "Personas o grupos afectados",
            type: "text",
            max: 1200,
            rows: 8,
            help: "Identifica y describe a las personas, grupos o sectores que se ven afectados por esta situación. Redacta un solo párrafo."
        },
        {
            key: "potentialConsequences",
            label: "Consecuencias de no atender la necesidad",
            type: "text",
            max: 1200,
            rows: 8,
            help: "Reconoce y explica las consecuencias o efectos que podrían surgir si la necesidad no es atendida. Redacta un solo párrafo."
        },
        {
            key: "previousAttempts",
            label: "Intentos o soluciones implementadas",
            type: "text",
            max: 1200,
            rows: 8,
            help: "Identifica, lista y describe los intentos o soluciones que se han implementado. Explica por qué no logran satisfacer completamente la necesidad. Extensión sugerida: media cuartilla."
        },
        {
            key: "resourcesAndConstraints",
            label: "Recursos y limitaciones",
            type: "text",
            max: 1200,
            rows: 8,
            help: "Identifica y explica los recursos, limitaciones o condiciones que influyen en la aparición o permanencia de esta situación. Redacta un solo párrafo."
        },
        {
            key: "needSummary",
            label: "Síntesis de la necesidad identificada",
            type: "text",
            max: 1200,
            rows: 8,
            help: "Redacta un párrafo que sintetice claramente la necesidad identificada, integrando los aspectos abordados en los puntos anteriores."
        }
    ]
};

