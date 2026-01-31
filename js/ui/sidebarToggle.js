/**
 * toggleSidebar
 * -------------
 * Alterna la visibilidad del menú lateral (sidebar) de la aplicación.
 *
 * Esta función:
 * 1. Obtiene el elemento del DOM identificado como `sidebarMenu`.
 * 2. Verifica que el elemento exista antes de operar sobre él.
 * 3. Agrega o elimina la clase CSS `active` según su estado actual.
 *
 * La presentación visual del menú (mostrar, ocultar, animar, etc.)
 * se controla exclusivamente mediante reglas CSS asociadas a la
 * clase `active`.
 */
export function toggleSidebar() {
    const sidebar = document.getElementById("sidebarMenu");
    if (!sidebar) return;

    sidebar.classList.toggle("active");
}
