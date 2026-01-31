import { getFormData } from "../core/projectStore.js";
import { generateGeneralCoverPdf } from "./generateGeneralCoverPdf.js";

export async function generatePDF(formDef) {
    const BASE_PATH = window.location.pathname.split("/")[1]
        ? "/" + window.location.pathname.split("/")[1]
        : "";

    const data = getFormData(formDef.id);
    if (!data) {
        alert("Guarda primero el formulario");
        return;
    }

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF("p", "mm", "letter");

    await generateGeneralCoverPdf(pdf);

    pdf.addPage();

    /* =====================
       CONFIGURACIÓN GENERAL
    ====================== */
    const MARGIN = 25.4; // 1 pulgada
    const PAGE_WIDTH = pdf.internal.pageSize.getWidth();
    const PAGE_HEIGHT = pdf.internal.pageSize.getHeight();
    const LINE_HEIGHT = 6; // interlineado académico UNAM
    const BOTTOM_MARGIN = PAGE_HEIGHT - MARGIN;

    let y = MARGIN + 28;

    pdf.setFont("times", "normal");
    pdf.setFontSize(12);

    /* =====================
       CONTROL DE PÁGINA
    ====================== */
    function checkPageBreak(extraHeight = 0) {
        if (y + extraHeight > BOTTOM_MARGIN) {
            pdf.addPage();
            y = MARGIN;
        }
    }

    /* =====================
       TEXTO FLUIDO
    ====================== */
    function writeFlowingText(lines) {
        for (let i = 0; i < lines.length; i++) {
            checkPageBreak(LINE_HEIGHT);
            pdf.text(lines[i], MARGIN, y);
            y += LINE_HEIGHT;
        }
        y += LINE_HEIGHT; // espacio posterior
    }

    /* =====================
       TÍTULO + PÁRRAFO
       (protege solo el inicio)
    ====================== */
    function writeTitleWithParagraph(title, text, minLines = 3) {
        const lines = pdf.splitTextToSize(
            text,
            PAGE_WIDTH - MARGIN * 2
        );

        const minBlockHeight =
            LINE_HEIGHT + (minLines * LINE_HEIGHT);

        // Si el título + primeras líneas no caben, saltamos
        checkPageBreak(minBlockHeight);

        // Título
        pdf.setFont("times", "bold");
        pdf.text(title, MARGIN, y);
        pdf.setFont("times", "normal");
        y += LINE_HEIGHT;

        // Texto fluido
        writeFlowingText(lines);
    }

    function addCenteredImageWithLabel(imageData, label, index) {
        // --- Página horizontal para la imagen ---
        pdf.addPage("letter", "landscape");

        const PAGE_WIDTH_L = pdf.internal.pageSize.getWidth();
        const PAGE_HEIGHT_L = pdf.internal.pageSize.getHeight();
        const MARGIN_L = 25.4;

        const props = pdf.getImageProperties(imageData);
        const imgW = props.width;
        const imgH = props.height;

        const MAX_WIDTH = PAGE_WIDTH_L - MARGIN_L * 2;
        const MAX_HEIGHT = PAGE_HEIGHT_L - MARGIN_L * 2 - 25;

        const scale = Math.min(
            MAX_WIDTH / imgW,
            MAX_HEIGHT / imgH
        );

        const width = imgW * scale;
        const height = imgH * scale;

        const x = (PAGE_WIDTH_L - width) / 2;
        const yImg = (PAGE_HEIGHT_L - height) / 2 - 10;

        pdf.addImage(
            imageData,
            props.fileType || "PNG",
            x,
            yImg,
            width,
            height
        );

        // --- Pie de figura ---
        const captionY = yImg + height + 8;

        pdf.setFontSize(11);
        pdf.setFont(undefined, "bold");
        pdf.text(
            `Figura ${index}.`,   // Aquí se pone "Figura 1.1" automáticamente
            PAGE_WIDTH_L / 2,
            captionY,
            { align: "center" }
        );

        pdf.setFont(undefined, "normal");
        const captionLines = pdf.splitTextToSize(
            label,                 // Solo el texto del campo
            PAGE_WIDTH_L - MARGIN_L * 2
        );

        pdf.text(
            captionLines,
            PAGE_WIDTH_L / 2,
            captionY + 6,
            { align: "center" }
        );

        pdf.setFontSize(12);
    }

    /* =====================
       ENCABEZADO INSTITUCIONAL
    ====================== */
    const loadImage = async (src) => {
        const res = await fetch(src);
        const blob = await res.blob();
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.readAsDataURL(blob);
        });
    };

    const escudoFI = await loadImage(`/${BASE_PATH}/img/escudoFI.png`);
    const escudoUNAM = await loadImage(`/${BASE_PATH}/img/escudoUNAM.png`);

    pdf.addImage(escudoFI, "PNG", MARGIN, MARGIN, 20, 20);
    pdf.addImage(escudoUNAM, "PNG", PAGE_WIDTH - MARGIN - 20, MARGIN, 20, 20);

    pdf.setFont("times", "bold");
    pdf.setFontSize(11);
    pdf.text("UNIVERSIDAD NACIONAL AUTÓNOMA DE MÉXICO", PAGE_WIDTH / 2, MARGIN + 6, { align: "center" });
    pdf.text("FACULTAD DE INGENIERÍA", PAGE_WIDTH / 2, MARGIN + 12, { align: "center" });
    pdf.text("INGENIERÍA DE DISEÑO", PAGE_WIDTH / 2, MARGIN + 18, { align: "center" });

    /* =====================
       TÍTULO DEL DOCUMENTO
    ====================== */
    y += LINE_HEIGHT;
    pdf.setFontSize(12);
    pdf.text(formDef.title, PAGE_WIDTH / 2, y, { align: "center" });
    pdf.setFont("times", "normal");

    y += LINE_HEIGHT * 1.5;

    let imageFieldCounter = 0; // cuenta los campos de tipo imagen en el formulario

    formDef.fields.forEach((field) => {
        const value = data[field.key] || "";

        if (field.type === "image") {
            imageFieldCounter++; // nueva categoría de figura
            const images = Array.isArray(value) ? value : value ? [value] : [];

            images.forEach((imgBase64, idx) => {
                // Numeración: 1.1, 1.2, 2.1, etc.
                const figureNumber = `${imageFieldCounter}.${idx + 1}`;

                addCenteredImageWithLabel(
                    imgBase64,
                    field.label,   // SOLO el label, sin "Figura X.Y"
                    figureNumber   // aquí sí le pasamos la numeración
                );
            });
        } else {
            writeTitleWithParagraph(
                `${field.label}:`,
                value,
                3
            );
        }
    });

    pdf.save(`form_${formDef.id}.pdf`);
}


