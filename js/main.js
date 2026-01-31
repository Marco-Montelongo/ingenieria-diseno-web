/**
 * @file /js/bootstrap/main.js
 * 
 * @description Punto de entrada de la aplicación.
 * Orquesta la inicialización de módulos principales.
 */

import "./bootstrap/initForms.js";

import { initUI }       from "./bootstrap/initUI.js";
import { initAppCore }  from "./bootstrap/initApp.js";
import { loadForm }     from "./router/formRouter.js";

document.addEventListener("DOMContentLoaded", () => {
    initAppCore();
    initUI();
    loadForm("home");
});
