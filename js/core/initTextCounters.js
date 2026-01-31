/**
 * Ubicación: /js/core/initTextCounters.js
 * 
 * Inicializa los contadores de caracteres de los campos de texto.
 * ------------------------------------------------------------------
 * 
 * @exports
 * @function initTextCounters
 * @param {Object} container
 */
export function initTextCounters(container) {
    const textareas = container.querySelectorAll("textarea[data-key]");

    textareas.forEach(textarea => {
        const key = textarea.dataset.key;
        const max = textarea.getAttribute("maxlength");
        const counter = textarea
            .closest("label")
            .querySelector(`.counter[data-counter="${key}"]`);

        if (!counter) return;

        const updateCounter = () => {
            counter.textContent = `${textarea.value.length} / ${max}`;
        };

        // inicial
        updateCounter();

        textarea.addEventListener("input", updateCounter);
    });
}

