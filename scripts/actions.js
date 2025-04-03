import { addDragAndDropEvents, clearList } from './dragndrop.js';
// Importando diretamente o objeto 'actions' do global.js
import { actions } from './global.js';
import { populateDropdown } from '../utils/dropdownUtils.js';
import { createListItem } from '../utils/listUtils.js';
import { formatTextForMobile, formatTextForDesktop } from '../utils/text.Utils.js';
import { getParameterValues } from '../utils/configUtils.js';
import { applyResponsiveFormatting } from '../utils/responsiveUtils.js';

// Elementos DOM específicos para Ações
const platformSelect = document.getElementById("platform");
const categorySelect = document.getElementById("action");
const subcategorySelect = document.getElementById("subaction");
const parametersDiv = document.getElementById("parameters");
const actionList = document.getElementById("actionList");

populateDropdown(platformSelect, Object.keys(actions).map(key => ({ value: key, label: key })));

function updateCategories() {
    categorySelect.innerHTML = '<option value="">Category...</option>';
    subcategorySelect.innerHTML = '<option value="">Subcategory...</option>';
    parametersDiv.innerHTML = ""; // Limpa os parâmetros
    subcategorySelect.style.display = "none"; // Esconde o dropdown de subcategoria por padrão

    const platform = platformSelect.value;
    if (!platform) {
        categorySelect.style.display = "none";
        return;
    }

    populateDropdown(categorySelect, Object.keys(actions[platform]).map(key => ({ value: key, label: key })));

    categorySelect.style.display = "inline-block";
}

// Atualiza as subcategorias ou exibe diretamente os parâmetros quando não há subcategorias
function updateSubcategoriesOrParameters() {
    subcategorySelect.innerHTML = '<option value="">Subcategory...</option>';
    parametersDiv.innerHTML = ""; // Limpa os parâmetros

    const platform = platformSelect.value;
    const category = categorySelect.value;
    if (!platform || !category) {
        subcategorySelect.style.display = "none";
        return;
    }

    const actionsInCategory = actions[platform][category];
    const actionKeys = Object.keys(actionsInCategory);

    // Se a categoria não tiver subcategorias
    if (actionKeys.every(key => !actionsInCategory[key].parameters)) {
        subcategorySelect.style.display = "none"; // Esconde o dropdown de subcategoria
        actionsInCategory.parameters?.forEach(param => addParameterField(param));
    } else {
        // Caso tenha subcategorias, popula o dropdown normalmente
        subcategorySelect.style.display = "inline-block";

        populateDropdown(subcategorySelect, actionKeys.map(key => ({ value: key, label: actionsInCategory[key].name })));
    }
}

function updateParameters() {
    if (!parametersDiv) {
        console.error("Elemento 'parametersDiv' não encontrado no DOM!");
        return;
    }
    parametersDiv.innerHTML = ""; // Limpa os parâmetros anteriores

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

// Adiciona campos de parâmetros à interface
function addParameterField(param) {
    const label = document.createElement("label");
    label.textContent = `${param.name}:`;

    let inputElement;

    // Cria um dropdown para o parâmetro se houver opções
    if (param.type === "dropdown" && param.options) {
        inputElement = document.createElement("select");
        param.options.forEach(optionText => {
            const option = document.createElement("option");
            option.value = optionText.toLowerCase();
            option.textContent = optionText;
            inputElement.appendChild(option);
        });
    } else {
        // Caso contrário, cria um campo de texto padrão
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

    if (!platform || !category) return; // Certifica-se de que plataforma e categoria foram selecionadas

    let text = `${platform} - ${category}`;
    const actionConfig = subcategory
        ? actions[platform][category][subcategory] // Usa subcategoria se existir
        : actions[platform][category]; // Usa categoria diretamente se não existir subcategoria

    if (subcategory) {
        text += ` - ${subcategory}`;
    }

    const parameters = getParameterValues(actionConfig, parametersDiv.querySelectorAll("input, select")); // Utiliza a função geral
    if (parameters.length > 0) {
        text += ` (${parameters.join(", ")})`;
    }

    const formattedText = formatarTexto(text);

    const li = createListItem(formattedText, platform, () => li.remove()); // Usa função modularizada
    actionList.appendChild(li);

    addDragAndDropEvents(li, actionList); // Adiciona eventos de drag-and-drop
}

function clearActionList() {
    clearList(actionList); // Usa a função do arquivo externo
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