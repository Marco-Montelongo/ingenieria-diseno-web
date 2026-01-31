export function collectFormData(formEl) {
    const data = {};
    const fields = formEl.querySelectorAll("[data-key]");

    fields.forEach(el => {
        const key = el.dataset.key;

        if (el.type === "file") {
            const file = el.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = () => data[key] = reader.result;
            reader.readAsDataURL(file);
        } else {
            data[key] = el.value;
        }
    });

    return data;
}
