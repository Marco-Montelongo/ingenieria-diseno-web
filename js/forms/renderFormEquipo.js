import { formEquipo } from "././formEquipo.js";
import { renderForm } from "../core/formRenderer.js";

window.renderFormEquipo = function (containerId) {
    renderForm(containerId, formEquipo);
};
