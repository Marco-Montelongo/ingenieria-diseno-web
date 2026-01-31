window.PROJECT_STATE = {
    formularios: {}
};

export function saveFormData(formId, data) {
    const previous = window.PROJECT_STATE.formularios[formId] || {};

    window.PROJECT_STATE.formularios[formId] = {
        ...previous,
        ...data
    };
}

export function getFormData(formId) {
    return window.PROJECT_STATE.formularios[formId] || null;
}

export function getFormField(formId, key) {
    const value = window.PROJECT_STATE.formularios?.[formId]?.[key];
    if (value === undefined || value === null) return [];
    return Array.isArray(value) ? value : [value];
}
