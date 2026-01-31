/**
 * Motor genérico de renderizado de formularios
 * ------------------------------------------------------------------
 * Este módulo se encarga de renderizar formularios dinámicos a 
 * partir de una definición declarativa (formDef).
 *
 * Es parte del núcleo del sistema (core) y no contiene lógica 
 * específica de ningún formulario en particular.
 * 
 * Depende de:
 * - projectStore.js:   capa de persistencia que gestiona la 
 *                      recuperación de datos previamente almacenados 
 *                      del formulario.
 * - renderField.js:    renderizador de campos individuales del 
 *                      formulario, responsable de transformar una 
 *                      definición de campo en HTML.
 * - initTextCounters.js: modifica los contadores.
 */

import { renderField } from "./renderField.js";
import { getFormData } from "./projectStore.js";
import { bindFormActions } from "./formActions.js";
import { initTextCounters } from "./initTextCounters.js";


/**
 * Renderiza un formulario completo dentro de un contenedor del DOM.
 *
 * @export
 * @function renderForm
 * @param {string} containerId  - ID del elemento del DOM donde se 
 *                                inyectará el formulario.
 * @param {Object} formDef      - Definición estructural del 
 *                                formulario.
 * @returns {NULL|string}       - HTML del campo renderizado.
 */
export function renderForm(containerId, formDef) {
    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = `
        <h2>${formDef.title}</h2>
        <p>${formDef.intro}</p>

        <form id="form-${formDef.id}">
            ${formDef.fields
            .map(field => renderField(field, formDef.id))
            .join("")}

            <div class="form-actions">
            <button type="button" data-action="save">
                💾 Guardar formulario
            </button>

            <button type="button" data-action="pdf">
                📄 Generar PDF
            </button>
        </div>
        </form>
    `;

    initTextCounters(container);
    bindFormActions(formDef);

    function filesToBase64(files) {
        return Promise.all(
            Array.from(files).map(file => new Promise(resolve => {
                const reader = new FileReader();
                reader.onload = (e) => resolve(e.target.result);
                reader.readAsDataURL(file);
            }))
        );
    }

    document.addEventListener("change", async (e) => {
        const input = e.target;
        if (!input.classList.contains("image-input")) return;

        const key = input.dataset.key;
        const files = input.files;
        if (!files.length) return;

        // Convertir todos los archivos a Base64
        const base64Images = await Promise.all(
            Array.from(files).map(file => new Promise(resolve => {
                const reader = new FileReader();
                reader.onload = (ev) => resolve(ev.target.result);
                reader.readAsDataURL(file);
            }))
        );

        // Mostrar previews
        const previewsContainer = input.closest(".image-field").querySelector(".previews");
        previewsContainer.innerHTML = "";
        base64Images.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            img.className = "preview";
            previewsContainer.appendChild(img);
        });

        // Guardar en PROJECT_STATE de forma consistente
        const formEl = input.closest("form");
        if (!formEl) return;

        const formId = formEl.dataset.formId;
        if (!formId) return;

        // Asegurarse de mantener el objeto existente
        const previous = window.PROJECT_STATE.formularios[formId] || {};
        window.PROJECT_STATE.formularios[formId] = {
            ...previous,
            [key]: base64Images // Siempre un array, incluso si es una sola imagen
        };
    });

}


