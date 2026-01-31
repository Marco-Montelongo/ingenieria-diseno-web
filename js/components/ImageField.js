/**
 * Ubicación: /js/components/ImageField.js
 * 
 * Componente de campo de imagen
 * ------------------------------------------------------------------
 * Este componente se encarga de renderizar un campo de tipo imagen
 * dentro de un formulario dinámico.
 *
 * Genera un input de tipo `file` y, opcionalmente, una vista previa
 * de la imagen previamente almacenada.
 */

/**
 * Renderiza el campo de imagen.
 *
 * @export
 * @function ImageField
 * @param {Object} field    - Definición estructural del campo.
 * @param {string} value    - Valor almacenado del campo (URL o 
 *                            base64).
 * @returns {string}        - HTML del campo de imagen.
 */
export function ImageField(field, value = "") {
    const values = Array.isArray(value) ? value : value ? [value] : [];

    return `
        <div class="image-field">
            <label class="image-label">${field.label}</label>
            <p>${field.help}</p>
            <div class="previews">
                    ${values.length 
                        ? values.map(src => `<img src="${src}" class="preview">`).join('') 
                        : `<div class="preview-placeholder"></div>`}
            </div>
            <input 
                type="file"
                data-key="${field.key}"
                accept="image/*"
                multiple
                class="image-input"
            />
        </div>
    `;
}

