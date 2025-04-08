import { populateDropdown } from './dropdownUtils.js';
import { addParameterField } from './parameterFieldsUtil.js';

// Atualiza as categorias ou ações
export function updateCategoriesOrActions(platform, data, categorySelect, subcategorySelect, parametersDiv) {
    if (!categorySelect || !subcategorySelect || !parametersDiv) {
        console.error("One or more elements are missing for updating categories or actions!");
        return;
    }

    // Reseta categorias, subcategorias e parâmetros
    categorySelect.innerHTML = '<option value="">Select a category...</option>';
    subcategorySelect.innerHTML = '<option value="">Select a subcategory...</option>';
    parametersDiv.innerHTML = "";
    subcategorySelect.style.display = "none";

    if (!platform) {
        categorySelect.style.display = "none";
        return;
    }

    // Popula as categorias dinamicamente
    populateDropdown(categorySelect, Object.keys(data[platform]).map(key => ({
        value: key,
        label: key
    })));
    categorySelect.style.display = "inline-block";
}

// Atualiza subcategorias e parâmetros
export function updateSubcategoriesOrParameters(platform, category, data, subcategorySelect, parametersDiv) {
    if (!subcategorySelect || !parametersDiv) {
        console.error("Subcategory or parameters container is missing! Check your DOM or the arguments passed.");
        return;
    }

    // Reseta subcategorias e parâmetros
    subcategorySelect.innerHTML = '<option value="">Select a subcategory...</option>';
    parametersDiv.innerHTML = "";

    if (!platform || !category) {
        subcategorySelect.style.display = "none";
        return;
    }

    const categoryData = data[platform]?.[category];
    if (!categoryData) {
        subcategorySelect.style.display = "none";
        return;
    }

    const subcategoryKeys = Object.keys(categoryData);

    if (subcategoryKeys.includes(subcategorySelect.value)) {
        // Mostra os parâmetros da subcategoria selecionada
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
    }
}