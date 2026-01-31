import { getFormData } from "../core/projectStore.js";
import { BASE_PATH, loadImage } from "./pdfUtils.js";

export async function generateGeneralCoverPdf(pdf) {
    const data = getFormData("Equipo");
    if (!data) {
        alert("Guarda primero el formulario");
        return;
    }

    /* =====================
       CONSTANTES
    ====================== */
    const PAGE_WIDTH = pdf.internal.pageSize.getWidth();
    const PAGE_HEIGHT = pdf.internal.pageSize.getHeight();
    const MARGIN = 25.4;
    const CENTER_X = PAGE_WIDTH / 2;

    /* =====================
       UTILIDADES
    ====================== */
    const drawCentered = (text, y, size = 14, bold = false) => {
        pdf.setFont("times", bold ? "bold" : "normal");
        pdf.setFontSize(size);
        pdf.text(text, CENTER_X, y, { align: "center" });
    };

    /* =====================
       ESCUDOS (SIN APLASTAR)
    ====================== */
    const escudoFI = await loadImage(`${BASE_PATH}/img/escudoFI.png`);
    const escudoUNAM = await loadImage(`${BASE_PATH}/img/escudoUNAM.png`);


    const escudoW = 22;
    const fi = pdf.getImageProperties(escudoFI);
    const unam = pdf.getImageProperties(escudoUNAM);

    if (escudoFI) {
        const fi = pdf.getImageProperties(escudoFI);
        pdf.addImage(
            escudoFI,
            "PNG",
            MARGIN,
            15,
            escudoW,
            (fi.height * escudoW) / fi.width
        );
    }

    if (escudoUNAM) {
        const unam = pdf.getImageProperties(escudoUNAM);
        pdf.addImage(
            escudoUNAM,
            "PNG",
            PAGE_WIDTH - MARGIN - escudoW,
            15,
            escudoW,
            (unam.height * escudoW) / unam.width
        );
    }

    /* =====================
       ENCABEZADO INSTITUCIONAL
    ====================== */
    drawCentered(
        "UNIVERSIDAD NACIONAL AUTÓNOMA DE MÉXICO",
        50,
        16,
        true
    );
    drawCentered("FACULTAD DE INGENIERÍA", 60, 14, true);
    drawCentered("INGENIERÍA DE DISEÑO", 70, 14, true);

    /* =====================
       TÍTULO DEL PROYECTO
    ====================== */
    const titleY = 85;
    const titlePaddingBottom = 8;

    pdf.setFont("times", "bold");
    pdf.setFontSize(20);

    const projectTitle = (data.projectName || "").toUpperCase();
    const titleMaxWidth = PAGE_WIDTH - (MARGIN * 2);

    const titleLines = pdf.splitTextToSize(projectTitle, titleMaxWidth);

    pdf.text(
        titleLines,
        CENTER_X,
        titleY,
        { align: "center" }
    );

    /* =====================
       DATOS ACADÉMICOS
    ====================== */
    const titleDimensions = pdf.getTextDimensions(titleLines);
    const titleHeight = titleDimensions.h;

    let baseY = titleY + titleHeight + titlePaddingBottom;
    const gap = 12;

    drawCentered(`Grupo: ${data.group || ""}`, baseY);
    drawCentered(`Equipo: ${data.teamNumber || ""}`, baseY + gap);
    drawCentered(`Semestre: ${data.semester || ""}`, baseY + gap * 2);
    drawCentered(
        "Profesor: Dr. Leopoldo Adrián González González",
        baseY + gap * 3
    );

    /* =====================
       INTEGRANTES DEL EQUIPO
    ===================== */
    let membersY = baseY + gap * 5;

    drawCentered("INTEGRANTES DEL EQUIPO", membersY, 14, true);
    membersY += 12;

    pdf.setFont("times", "normal");
    pdf.setFontSize(13);

    const members = (data.teamMembers || "")
        .split(";")
        .map(m => m.trim())
        .filter(Boolean)
        .slice(0, 7)
        .sort((a, b) => a.localeCompare(b, "es", { sensitivity: "base" }));

    members.forEach(member => {
        pdf.text(member, CENTER_X, membersY, { align: "center" });
        membersY += 8;
    });

    /* =====================
       FECHA (SIEMPRE AL FINAL)
    ====================== */
    const formattedDate = new Date().toLocaleDateString("es-MX", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    drawCentered(
        `Ciudad Universitaria, ${formattedDate}`,
        PAGE_HEIGHT - 25,
        12
    );
}





