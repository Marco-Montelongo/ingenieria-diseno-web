/**
 * Ubicación: /js/forms/renderForm1_1.js
 * 
 * Renderizador del formulario 1.1
 * ------------------------------------------------------------------
 * Este módulo expone una función global utilizada por el router para 
 * renderizar dinámicamente el formulario "1.1 Identificación de la 
 * necesidad" dentro de un contenedor específico del DOM.
 *
 * Depende de:
 * - form1_1.js:        definición estructural del formulario
 * - formRenderer.js:   motor genérico de renderizado de formularios
 */

import { form1_1 } from "./form1_1.js";
import { renderForm } from "../core/formRenderer.js";

/**
 * Función global requerida por el sistema de ruteo.
 *
 * @global
 * @function renderForm1_1
 * @param {string} containerId - ID del elemento del DOM donde se 
 *                               renderizará el formulario.
 *
 * Flujo de ejecución:
 * 1. El router invoca esta función al cargar la vista 
 *    correspondiente.
 * 2. Se delega el renderizado al motor genérico `renderForm`.
 * 3. Se inyecta la estructura definida en `form1_1` dentro del 
 *    contenedor indicado.
 */
window.renderForm1_1 = function (containerId) {
    renderForm(containerId, form1_1);
};
