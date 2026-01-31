/**
 * Renderizador genérico de campos de formulario
 * ------------------------------------------------------------------
 * Este módulo se encarga de renderizar un campo individual de un 
 * formulario a partir de su definición declarativa.
 *
 * Actúa como una capa de despacho (dispatcher) que decide qué 
 * componente de campo utilizar según el tipo definido.
 * 
 * Depende de:
 * - projectStore.js:   capa de persistencia que provee el valor 
 *                      almacenado de cada campo del formulario.
 * - TextField.js:      componente de presentación para campos de 
 *                      texto.
 * - ImageField.js:     componente de presentación para campos de 
 *                      imagen.
 */

import { getFormField } from "./projectStore.js";
import { TextField } from "../components/TextField.js";
import { ImageField } from "../components/ImageField.js";

/**
 * Renderiza un campo del formulario según su tipo.
 *
 * @export
 * @function renderField
 * @param {Object} field    - Definición estructural del campo.
 * @param {string} formId   - Identificador del formulario al que
 *                            pertenece el campo.
 * @returns {string}        - HTML del campo renderizado.
 */
export function renderField(field, formId) {
    const value = getFormField(formId, field.key) || "";

    switch (field.type) {
        case "text":
            return TextField(field, value);
        case "image":
            return ImageField(field, value);
        default:
            console.warn("Tipo de campo no soportado:", field.type);
            return "";
    }
}
