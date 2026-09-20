// /js/pdf/pdfUtils.js

export const BASE_PATH = window.location.pathname.split("/")[1]
    ? "/" + window.location.pathname.split("/")[1]
    : "";

export const loadImage = async (src) => {

    // String Base64 de un JPG de 1x1 pixeles
    const BLANK_IMAGE = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAABAAEBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA=";
    
    try {
        const res = await fetch(src);

        if (!res.ok) {
            console.error("Imagen no encontrada:", src);
            return BLANK_IMAGE;
        }

        const blob = await res.blob();

        return await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.readAsDataURL(blob);
        });
    } catch (err) {
        console.error("Error cargando imagen:", src, err);
        return BLANK_IMAGE;
    }
};
