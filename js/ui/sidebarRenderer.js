/**
 * renderSidebarMenu
 * -----------------
 * Construye y renderiza dinámicamente el menú lateral de la aplicación
 * a partir de una estructura de datos declarativa.
 *
 * Responsabilidades:
 * - Limpia el contenedor del sidebar.
 * - Itera sobre las secciones definidas en `menuData`.
 * - Genera secciones y elementos de navegación de forma dinámica.
 *
 * Parámetros:
 * - menuData (Array): Estructura que define las secciones y elementos del menú.
 * - onItemSelect (Function): Callback ejecutado al seleccionar un elemento,
 *   recibe como argumento el `id` del ítem seleccionado.
 */
export function renderSidebarMenu(menuData, onItemSelect) {
    const sidebarContainer = document.getElementById("sidebarContent");
    if (!sidebarContainer) return;

    sidebarContainer.innerHTML = "";

    menuData.forEach(section => {
        const sectionElement = createSidebarSection(section, onItemSelect);
        sidebarContainer.appendChild(sectionElement);
    });
}

/**
 * createSidebarSection
 * --------------------
 * Crea una sección del sidebar con su título y subelementos.
 */
function createSidebarSection(section, onItemSelect) {
    const sectionWrapper = document.createElement("div");
    sectionWrapper.className = "sidebar-section";

    const sectionTitle = document.createElement("div");
    sectionTitle.className = "sidebar-title";
    sectionTitle.textContent = section.title;

    const itemsContainer = document.createElement("div");
    itemsContainer.className = "sidebar-subitems";

    section.items.forEach(item => {
        const itemElement = createSidebarItem(item, onItemSelect);
        itemsContainer.appendChild(itemElement);
    });

    sectionTitle.addEventListener("click", () => {
        itemsContainer.classList.toggle("open");
    });

    sectionWrapper.appendChild(sectionTitle);
    sectionWrapper.appendChild(itemsContainer);

    return sectionWrapper;
}

/**
 * createSidebarItem
 * -----------------
 * Crea un elemento clickeable del menú lateral.
 */
function createSidebarItem(item, onItemSelect) {
    const itemElement = document.createElement("div");
    itemElement.className = "sidebar-subitem";
    itemElement.textContent = item.label;

    itemElement.addEventListener("click", () => {
        onItemSelect(item.id);
    });

    return itemElement;
}

