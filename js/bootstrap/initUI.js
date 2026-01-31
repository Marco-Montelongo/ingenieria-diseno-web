/**
 * @file /js/bootstrap/initUI.js
 * 
 * @description Inicializa los componentes principales de la interfaz 
 * de usuario.
 */

import { toggleSidebar }        from "../ui/sidebarToggle.js";
import { menuData }             from "../data/menuData.js";
import { renderSidebarMenu }    from "../ui/sidebarRenderer.js";
import { loadForm }             from "../router/formRouter.js";

/**
 * Inicializa el menú lateral y carga las funciones que utiliza.
 */
export function initUI() {
    renderSidebarMenu(menuData, loadForm);

    // Exposición global para uso desde HTML
    window.toggleSidebar = toggleSidebar;
}
