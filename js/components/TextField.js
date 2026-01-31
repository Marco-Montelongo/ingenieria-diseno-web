/**
 * Ubicación: /js/components/TextField.js
 * 
 * Componente de campo de texto
 * -----------------------------
 * Este componente se encarga de renderizar un campo de tipo texto
 * dentro de un formulario dinámico.
 *
 * Está orientado a entradas de texto extensas y utiliza un `textarea`
 * con límite de caracteres, texto de ayuda y contador visual.
 */

/**
 * Renderiza el campo de texto.
 *
 * @export
 * @function TextField
 * @param {Object} field - Definición estructural del campo.
 * @param {string} value - Valor almacenado del campo. *
 * @returns {string} HTML del campo de texto.
 */
export function TextField(field, value = "") {
    return `
        <label class="field-label">
            <strong>${field.label}</strong>
            <textarea
                data-key="${field.key}"
                rows="${field.rows}"
                maxlength="${field.max}"
                class="field-textarea"
            >${value ?? ""}</textarea>


            <small class="help-text">${field.help}</small>
            <div class="counter" data-counter="${field.key}">
                ${value.length} / ${field.max}
            </div>
        </label>
    `;
}
