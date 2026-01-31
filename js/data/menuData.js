/**
 * menuData
 * --------
 * Configuración del menú lateral (sidebar) de la aplicación.
 *
 * Este módulo define la estructura completa del menú de navegación
 * y es utilizado por el renderizador del sidebar para construir
 * dinámicamente la interfaz.
 *
 * Estructura de cada sección:
 * - id (string): Identificador único de la sección.
 * - title (string): Título visible de la sección en el menú.
 * - items (Array): Lista de elementos de navegación.
 *
 * Estructura de cada item:
 * - id (string): Identificador único del elemento.
 *               Se utiliza para determinar qué contenido,
 *               formulario o vista debe cargarse.
 * - label (string): Texto visible mostrado al usuario.
 */
export const menuData = [
    {
        id: "inicio",
        title: "Inicio",
        items: [
            {
                id: "home",
                label: "Página principal"
            }
        ]
    },
    {
        id: "equipoInfo",
        title: "Datos del equipo",
        items: [
            {
                id: "equipo",
                label: "Equipo y Proyecto"
            }
        ]
    },
    {
        id: "elaboracionProblema",
        title: "1. Elaboración del problema",
        items: [
            { id: "1_1", label: "1.1 Identificación de la necesidad" },
            { id: "1_2", label: "1.2 Definir el problema" },
            { id: "1_3", label: "1.3 Búsqueda de información" },
            { id: "1_4", label: "1.4 Especificaciones y requerimientos" },
            { id: "1_5", label: "1.5 Plan de trabajo" }
        ]
    },
    {
        id: "disenoConceptual",
        title: "2. Diseño Conceptual",
        items: [
            { id: "2_1", label: "2.1 Diagrama de caja negra" },
            { id: "2_2", label: "2.2 Definición de sistemas funcionales" },
            { id: "2_3", label: "2.3 Generación de conceptos" },
            { id: "2_4", label: "2.4 Matriz morfológica" },
            { id: "2_5", label: "2.5 Matriz de decisión" },
            { id: "2_6", label: "2.6 Propuesta de diseño conceptual" }
        ]
    },
    {
        id: "disenoDetallado",
        title: "3. Diseño detallado del sistema",
        items: [
            { id: "3_1", label: "3.1 Diseño de configuración" },
            { id: "3_2", label: "3.2 Diagrama de cuerpo libre" },
            { id: "3_3", label: "3.3 Selección de materiales" },
            { id: "3_4", label: "3.4 Selección de componentes comerciales" },
            { id: "3_5", label: "3.5 Diseño para la manufactura" },
            { id: "3_6", label: "3.6 Diseño para el ensamble" },
            { id: "3_7", label: "3.7 CAD / CAM y FEM" },
            { id: "3_8", label: "3.8 Costos" }
        ]
    }
];
