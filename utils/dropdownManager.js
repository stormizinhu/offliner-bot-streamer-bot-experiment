import { populateDropdown } from './dropdownUtils.js';
import { addParameterField } from './parameterFieldsUtils.js';

export function updateCategoriesOrActions(platform, data, categorySelect, subcategorySelect, parametersDiv) {
    if (!categorySelect || !subcategorySelect || !parametersDiv) {
        return;
    }

    categorySelect.innerHTML = '<option value="">Select a category...</option>';
    subcategorySelect.innerHTML = '<option value="">Select a subcategory...</option>';
    parametersDiv.innerHTML = "";
    subcategorySelect.style.display = "none";

    if (!platform) {
        categorySelect.style.display = "none";
        return;
    }

    populateDropdown(categorySelect, Object.keys(data[platform]).map(key => ({
        value: key,
        label: key
    })));
    categorySelect.style.display = "inline-block";
}

export function updateCategories(platform, data, categorySelect, subcategorySelect, parametersDiv) {
    if (!categorySelect || !subcategorySelect || !parametersDiv) {
        return;
    }

    categorySelect.innerHTML = '<option value="">Select a category...</option>';
    subcategorySelect.innerHTML = '<option value="">Select a subcategory...</option>';
    parametersDiv.innerHTML = "";
    subcategorySelect.style.display = "none";

    if (!platform) {
        categorySelect.style.display = "none";
        return;
    }

    populateDropdown(categorySelect, Object.keys(data[platform]).map(key => ({
        value: key,
        label: key
    })));
    categorySelect.style.display = "inline-block";
}

export function updateSubcategoriesOrParameters(platform, category, data, subcategorySelect, parametersDiv) {
    if (!subcategorySelect || !parametersDiv) {
        console.error("Subcategory or parameters container is missing!"); // Log de depuração
        return;
    }

    parametersDiv.innerHTML = ""; // Limpa os parâmetros anteriores

    const categoryData = data[platform]?.[category];
    if (!categoryData) {
        subcategorySelect.style.display = "none"; // Oculta o dropdown caso não haja subcategorias
        return;
    }

    const subcategoryKeys = Object.keys(categoryData);

    if (subcategoryKeys.includes(subcategorySelect.value)) {
        const selectedSubcategory = categoryData[subcategorySelect.value];
        if (selectedSubcategory.parameters) {
            selectedSubcategory.parameters.forEach(param => addParameterField(param, parametersDiv));
        }
    } else if (subcategoryKeys.length && !categoryData.parameters) {
        populateDropdown(subcategorySelect, subcategoryKeys.map(key => ({
            value: key,
            label: categoryData[key].name
        })));
        subcategorySelect.style.display = "inline-block";
    } else {
        // Adiciona uma validação para garantir que "Select..." não seja aceitável
        if (subcategorySelect.value === "" || subcategorySelect.value === "Select...") {
            console.warn("Subcategoria inválida selecionada."); // Log para depuração
            alert("Por favor, selecione uma subcategoria válida."); // Feedback ao usuário
        }
    }
}