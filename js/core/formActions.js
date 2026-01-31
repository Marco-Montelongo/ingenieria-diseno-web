import { collectFormData } from "./formCollector.js";
import { saveFormData } from "./projectStore.js";
import { generatePDF } from "../pdf/pdfGenerator.js";
import { generateCoverPdf } from "../pdf/generateCoverPdf.js";

export function bindFormActions(formDef) {
    const form = document.getElementById(`form-${formDef.id}`);
    if (!form) return;

    const formId = formDef.id;

    // 1️⃣ Listener para inputs de imágenes (múltiples)
    form.addEventListener("change", async (e) => {
        const input = e.target;
        if (!input.classList.contains("image-input")) return;

        const key = input.dataset.key;
        const files = input.files;
        if (!files.length) return;

        const base64Images = await Promise.all(
            Array.from(files).map(file => new Promise(resolve => {
                const reader = new FileReader();
                reader.onload = (ev) => resolve(ev.target.result);
                reader.readAsDataURL(file);
            }))
        );

        // Actualizar preview
        const previewsContainer = input.closest(".image-field").querySelector(".previews");
        previewsContainer.innerHTML = "";
        base64Images.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            img.className = "preview";
            previewsContainer.appendChild(img);
        });

        // Guardar imágenes en PROJECT_STATE
        const previous = window.PROJECT_STATE.formularios[formId] || {};
        window.PROJECT_STATE.formularios[formId] = {
            ...previous,
            [key]: base64Images
        };
    });

    // 2️⃣ Listener para botones
    form.addEventListener("click", e => {
        const action = e.target.dataset.action;
        if (!action) return;

        if (action === "save") {

            // 🔐 Asegurar inicialización del formulario
            if (!window.PROJECT_STATE.formularios[formId]) {
                window.PROJECT_STATE.formularios[formId] = {};
            }

            // Guardar campos de texto
            form.querySelectorAll("input[type=text], textarea").forEach(el => {
                const key = el.dataset.key;
                window.PROJECT_STATE.formularios[formId][key] = el.value;
            });

            alert("Formulario guardado correctamente ✅");
        }


        if (action === "pdf") {
            if (formDef.id === "Equipo") {
                generateCoverPdf(formDef);
            } else {
                generatePDF(formDef);
            }
        }
    });
}


