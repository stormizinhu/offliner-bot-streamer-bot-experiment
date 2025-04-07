import { actions } from './global.js';
import { addDragAndDropEvents, clearList } from './dragndrop.js';
import { populateDropdown } from '../utils/dropdownUtils.js';
import { createListItem } from '../utils/listUtils.js';
import { formatTextForMobile, formatTextForDesktop } from '../utils/text.Utils.js';
import { getParameterValues } from '../utils/configUtils.js';
import { applyResponsiveFormatting } from '../utils/responsiveUtils.js';

const platformSelect = document.getElementById("platform");
const categorySelect = document.getElementById("action");
const subcategorySelect = document.getElementById("subaction");
const parametersDiv = document.getElementById("parameters");
const actionList = document.getElementById("actionList");

populateDropdown(platformSelect, Object.keys(actions).map(key => ({ value: key, label: key })));

function updateCategories() {
    categorySelect.innerHTML = '<option value="">Category...</option>';
    subcategorySelect.innerHTML = '<option value="">Subcategory...</option>';
    parametersDiv.innerHTML = ""; 
    subcategorySelect.style.display = "none";

    const platform = platformSelect.value;
    if (!platform) {
        categorySelect.style.display = "none";
        return;
    }

    populateDropdown(categorySelect, Object.keys(actions[platform]).map(key => ({ value: key, label: key })));

    categorySelect.style.display = "inline-block";
}

function updateSubcategoriesOrParameters() {
    subcategorySelect.innerHTML = '<option value="">Subcategory...</option>';
    parametersDiv.innerHTML = "";

    const platform = platformSelect.value;
    const category = categorySelect.value;
    if (!platform || !category) {
        subcategorySelect.style.display = "none";
        return;
    }

    const actionsInCategory = actions[platform][category];
    const actionKeys = Object.keys(actionsInCategory);

    if (actionKeys.every(key => !actionsInCategory[key].parameters)) {
        subcategorySelect.style.display = "none";
        actionsInCategory.parameters?.forEach(param => addParameterField(param));
    } else {
        subcategorySelect.style.display = "inline-block";

        populateDropdown(subcategorySelect, actionKeys.map(key => ({ value: key, label: actionsInCategory[key].name })));
    }
}

function updateParameters() {
    if (!parametersDiv) {
        console.error("Elemento 'parametersDiv' não encontrado no DOM!");
        return;
    }
    parametersDiv.innerHTML = "";

    const platform = platformSelect.value;
    const category = categorySelect.value;
    const subcategory = subcategorySelect.value;

    const actionConfig = subcategory
        ? actions[platform][category][subcategory]
        : actions[platform][category];

    if (actionConfig && actionConfig.parameters) {
        actionConfig.parameters.forEach(param => addParameterField(param));
    }
}

function addParameterField(param) {
    const label = document.createElement("label");
    label.textContent = `${param.name}:`;

    let inputElement;

    if (param.type === "dropdown" && param.options) {
        inputElement = document.createElement("select");
        param.options.forEach(optionText => {
            const option = document.createElement("option");
            option.value = optionText.toLowerCase();
            option.textContent = optionText;
            inputElement.appendChild(option);
        });
    } else {
        inputElement = document.createElement("input");
        inputElement.type = param.type;
        inputElement.placeholder = param.placeholder;
    }

    parametersDiv.appendChild(label);
    parametersDiv.appendChild(inputElement);
}

function addAction() {
    const platform = platformSelect.value;
    const category = categorySelect.value;
    const subcategory = subcategorySelect.value;

    if (!platform || !category) return;

    let text = `${platform} - ${category}`;
    const actionConfig = subcategory
        ? actions[platform][category][subcategory]
        : actions[platform][category];

    if (subcategory) {
        text += ` - ${subcategory}`;
    }

    const parameters = getParameterValues(actionConfig, parametersDiv.querySelectorAll("input, select")); // Utiliza a função geral
    if (parameters.length > 0) {
        text += ` (${parameters.join(", ")})`;
    }

    const formattedText = formatarTexto(text);

    const li = createListItem(formattedText, platform, () => li.remove());
    actionList.appendChild(li);

    addDragAndDropEvents(li, actionList);
}

function clearActionList() {
    clearList(actionList);
}

function formatarTexto(texto) {
    return texto.split(" - ").join("\n");
}

document.addEventListener("DOMContentLoaded", () => {
    platformSelect.addEventListener("change", updateCategories);
    categorySelect.addEventListener("change", updateSubcategoriesOrParameters);
    subcategorySelect.addEventListener("change", updateParameters);
    document.getElementById("addButton").addEventListener("click", addAction);
    document.getElementById("clearButton").addEventListener("click", clearActionList);
    applyResponsiveFormatting(actionList, formatTextForMobile, formatTextForDesktop);
});