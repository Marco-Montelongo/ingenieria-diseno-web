// /js/pdf/pdfUtils.js

export const BASE_PATH = window.location.pathname.split("/")[1]
    ? "/" + window.location.pathname.split("/")[1]
    : "";

export const loadImage = async (src) => {
    try {
        const res = await fetch(src);

        if (!res.ok) {
            console.error("Imagen no encontrada:", src);
            return null;
        }

        const blob = await res.blob();

        return await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.readAsDataURL(blob);
        });
    } catch (err) {
        console.error("Error cargando imagen:", src, err);
        return null;
    }
};
