/**
 * @file /js/bootstrap/initApp.js
 * 
 * @description Inicializa el núcleo de la aplicación y expone 
 * utilidades globales.
 */

import "../core/projectStore.js";

import {
    exportProjectToJson,
    importProjectFromJson
} from "../core/projectImportExport.js";

/**
 * Inicializa el core de la aplicación.
 */
export function initAppCore() {
    window.exportProjectToJson = exportProjectToJson;
    window.importProjectFromJson = importProjectFromJson;
}
