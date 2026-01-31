// home.js
// Función para renderizar el Home / Manual de Usuario
window.renderHome = function (contentId) {
    const container = document.getElementById(contentId);

    container.innerHTML = `
        <div class="home-manual">

            <!-- Cabecera -->
            <header class="home-manual__header">
                <h1 class="home-manual__title">Manual de Usuario</h1>
                <p class="home-manual__intro">
                    Bienvenido al sistema de gestión de proyectos y formularios.
                    Este manual le guiará paso a paso para registrar, respaldar y
                    administrar correctamente la información de su equipo y proyecto.
                </p>
            </header>

            <!-- Proceso inicial -->
            <section class="home-manual__section">
                <h2 class="home-manual__section-title">Proceso inicial</h2>
                <ol class="home-manual__list">
                    <li>
                        Al ingresar por primera vez, registre la información del equipo
                        en el formulario correspondiente.
                    </li>
                    <li>
                        Una vez completados los datos, presione
                        <span class="home-manual__highlight">Guardar formulario y Generar PDF</span>
                        para crear el documento con la información registrada.
                    </li>
                    <li>
                        Al final de la página encontrará el botón
                        <span class="home-manual__highlight">Descargar JSON</span>,
                        el cual permite guardar una copia local de todos los datos.
                    </li>
                </ol>
            </section>

            <!-- Uso posterior -->
            <section class="home-manual__section">
                <h2 class="home-manual__section-title">Uso posterior del sistema</h2>
                <ol class="home-manual__list">
                    <li>
                        Al volver a ingresar al sistema, encontrará el botón
                        <span class="home-manual__highlight">Cargar JSON</span>
                        en la parte inferior.
                    </li>
                    <li>
                        Seleccione el archivo JSON previamente descargado para restaurar
                        la información del equipo y los formularios.
                    </li>
                    <li>
                        Esto le permitirá continuar trabajando sin perder datos
                        ni tener que capturarlos nuevamente.
                    </li>
                </ol>
            </section>

            <!-- Formularios -->
            <section class="home-manual__section">
                <h2 class="home-manual__section-title">Formularios y actualización de datos</h2>
                <ol class="home-manual__list">
                    <li>
                        Cada formulario puede ser llenado o modificado en cualquier momento,
                        de acuerdo con el avance del proyecto.
                    </li>
                    <li>
                        Al finalizar la captura o edición de la información, presione
                        <span class="home-manual__highlight">Guardar formulario</span>
                        para actualizar los datos internos del sistema.
                    </li>
                    <li>
                        Dentro de cada formulario también se encuentra el botón
                        <span class="home-manual__highlight">Generar PDF</span>,
                        el cual permite crear el documento correspondiente al formulario
                        para su revisión, descarga o entrega posterior.
                    </li>
                    <li>
                        Después de realizar cualquier modificación, se recomienda descargar
                        nuevamente el archivo JSON para mantener un respaldo actualizado
                        de toda la información.
                    </li>
                </ol>
            </section>

            <!-- Generar Reporte -->
            <section class="home-manual__section">
                <h2 class="home-manual__section-title">Generación de Reporte Final</h2>
                <p class="home-manual__paragraph">
                    Se recomienda generar el reporte final una vez que todos los formularios hayan sido completados y revisados. 
                    Este reporte consolidará la información de todos los formularios en un único documento, facilitando su revisión, análisis y entrega.
                    Para ello, al final de la página se encuentra el botón <span class="home-manual__highlight">Generar reporte</span>.
                </p>
            </section>

            <!-- Resumen -->
            <section class="home-manual__section">
                <h2 class="home-manual__section-title">Resumen general</h2>
                <ul class="home-manual__summary">
                    <li>Registrar correctamente los datos iniciales del equipo.</li>
                    <li>Generar el PDF con la información capturada.</li>
                    <li>Respaldar y restaurar los datos mediante archivos JSON.</li>
                    <li>Mantener la información actualizada en cada formulario.</li>
                </ul>

                <div class="home-manual__note">
                    Recuerde siempre descargar el archivo JSON después de realizar
                    cualquier cambio para evitar la pérdida de información.
                </div>
            </section>

        </div>
    `;
}
