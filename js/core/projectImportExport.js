
export function exportProjectToJson() {
    try {
        const projectState = window.PROJECT_STATE;

        if (!projectState || typeof projectState !== "object") {
            alert("No hay información del proyecto disponible para exportar.");
            return;
        }

        const jsonContent = JSON.stringify(projectState, null, 2);

        const blob = new Blob([jsonContent], {
            type: "application/json;charset=utf-8"
        });

        const downloadUrl = URL.createObjectURL(blob);

        const anchor = document.createElement("a");
        anchor.href = downloadUrl;
        anchor.download = "Proyecto_general.json";

        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);

        URL.revokeObjectURL(downloadUrl);

    } catch (error) {
        console.error("Error al exportar el proyecto a JSON:", error);
        alert("Ocurrió un error al exportar el proyecto.");
    }
}

export async function importProjectFromJson() {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "application/json";

    fileInput.onchange = async (event) => {
        const selectedFile = event.target.files[0];
        if (!selectedFile) return;

        try {
            const fileContent = await selectedFile.text();
            const parsedData = JSON.parse(fileContent);

            if (
                typeof parsedData !== "object" ||
                parsedData === null ||
                !parsedData.formularios
            ) {
                alert("El archivo JSON no contiene una estructura válida.");
                return;
            }

            window.PROJECT_STATE.formularios = {};

            // 🔹 Rehidratación controlada
            Object.entries(parsedData.formularios).forEach(
                ([formId, formData]) => {
                    window.PROJECT_STATE.formularios[formId] = formData;
                }
            );

            // 🔹 Evento global para que la UI se actualice
            window.dispatchEvent(
                new CustomEvent("project:loaded", {
                    detail: { source: "import" }
                })
            );

            alert("Proyecto cargado correctamente.");

        } catch (error) {
            console.error("Error al importar el archivo JSON:", error);
            alert("Ocurrió un error al cargar el archivo del proyecto.");
        } finally {
            fileInput.value = "";
        }
    };

    fileInput.click();
}

