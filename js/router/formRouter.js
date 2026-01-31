// /js/router/formRouter.js

import { handleFormLoad } from "../core/formLoader.js";

/**
 * CONTENT_TARGET_ID
 * -----------------
 * Identificador del contenedor principal donde se renderizan
 * los formularios y vistas de la aplicación.
 */
const CONTENT_TARGET_ID = "content-area";

/**
 * FORM_ROUTES
 * -----------
 * Mapa de rutas que asocia un identificador de navegación
 * con la función encargada de cargar el formulario correspondiente.
 *
 * Cada clave representa el `id` definido en menuData.
 * Cada valor ejecuta el renderizador adecuado mediante `handleFormLoad`.
 */
const FORM_ROUTES = {
    home: () => handleFormLoad("renderHome", CONTENT_TARGET_ID),

    equipo: () => handleFormLoad("renderFormEquipo", CONTENT_TARGET_ID),

    "1_1": () => handleFormLoad("renderForm1_1", CONTENT_TARGET_ID),
    "1_2": () => handleFormLoad("renderForm1_2", CONTENT_TARGET_ID),
    "1_3": () => handleFormLoad("renderForm1_3", CONTENT_TARGET_ID),
    "1_4": () => handleFormLoad("renderForm1_4", CONTENT_TARGET_ID),
    "1_5": () => handleFormLoad("renderForm1_5", CONTENT_TARGET_ID),

    // Formularios 2.x
    "2_1": () => handleFormLoad("renderForm2_1", CONTENT_TARGET_ID),
    "2_2": () => handleFormLoad("renderForm2_2", CONTENT_TARGET_ID),
    "2_3": () => handleFormLoad("renderForm2_3", CONTENT_TARGET_ID),
    "2_4": () => handleFormLoad("renderForm2_4", CONTENT_TARGET_ID),
    "2_5": () => handleFormLoad("renderForm2_5", CONTENT_TARGET_ID),
    "2_6": () => handleFormLoad("renderForm2_6", CONTENT_TARGET_ID),

    // Formularios 2.x
    "3_1": () => handleFormLoad("renderForm3_1", CONTENT_TARGET_ID),
    "3_2": () => handleFormLoad("renderForm3_2", CONTENT_TARGET_ID),
    "3_3": () => handleFormLoad("renderForm3_3", CONTENT_TARGET_ID),
    "3_4": () => handleFormLoad("renderForm3_4", CONTENT_TARGET_ID),
    "3_5": () => handleFormLoad("renderForm3_5", CONTENT_TARGET_ID),
    "3_6": () => handleFormLoad("renderForm3_6", CONTENT_TARGET_ID),
    "3_7": () => handleFormLoad("renderForm3_7", CONTENT_TARGET_ID),
    "3_8": () => handleFormLoad("renderForm3_8", CONTENT_TARGET_ID)
};

/**
 * loadForm
 * --------
 * Función de enrutamiento que carga el formulario o vista
 * correspondiente según el identificador recibido.
 *
 * Flujo de ejecución:
 * 1. Recibe el `id` del elemento seleccionado en el sidebar.
 * 2. Verifica si existe una ruta registrada en FORM_ROUTES.
 * 3. Ejecuta la función asociada a la ruta encontrada.
 * 4. Muestra un mensaje informativo si la ruta no existe.
 *
 * @param {string} id - Identificador del formulario o vista a cargar.
 *
 * Consideraciones:
 * - Esta función no renderiza HTML directamente.
 * - Actúa como intermediario entre la navegación y el motor de carga.
 * - Facilita la escalabilidad del sistema de formularios.
 */
export function loadForm(id) {
    const routeHandler = FORM_ROUTES[id];

    if (typeof routeHandler === "function") {
        window.CURRENT_FORM_ID = id;
        routeHandler();
        return;
    }

    const contentContainer = document.getElementById(CONTENT_TARGET_ID);
    if (!contentContainer) return;

    contentContainer.innerHTML =
        "<p>Formulario aún no implementado.</p>";
}

window.addEventListener("project:loaded", () => {
    if (window.CURRENT_FORM_ID) {
        loadForm(window.CURRENT_FORM_ID);
    }
});
