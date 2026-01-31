/**
 * handleFormLoad
 * --------------
 * Función intermediaria encargada de cargar dinámicamente
 * un formulario o vista dentro del contenedor principal
 * de la aplicación.
 *
 * Esta función actúa como un *adaptador* entre el sistema
 * de navegación (router) y los módulos de formularios,
 * los cuales se registran de forma global en `window`.
 *
 * Flujo de ejecución:
 * 1. Recibe el nombre de una función en formato string.
 * 2. Busca dicha función dentro del objeto global `window`.
 * 3. Verifica que la referencia obtenida sea una función válida.
 * 4. Ejecuta la función, pasando como argumento el ID del contenedor.
 * 5. En caso de no existir la función, muestra un mensaje de error
 *    y notifica al usuario que el formulario no está disponible.
 *
 * @param {string} functionName
 *
 * @param {string} contentId
 */
export function handleFormLoad(functionName, contentId) {
  const fn = window[functionName];

  if (typeof fn === "function") {
    fn(contentId);
    return;
  }

  console.error(`${functionName} no disponible`);

  const container = document.getElementById(contentId);
  if (!container) return;

  container.innerText = "Formulario no disponible.";
}
