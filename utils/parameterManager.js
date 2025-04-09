import { populateDropdown } from './dropdownUtils.js';
import { addParameterField } from './parameterFieldsUtil.js';

export function updateCategoriesOrActions(platform, data, categorySelect, subcategorySelect, parametersDiv) {
    if (!categorySelect || !subcategorySelect || !parametersDiv) {
        console.error("One or more elements are missing for updating categories or actions!");
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
        console.error("Subcategory or parameters container is missing! Check your DOM or the arguments passed.");
        return;
    }

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