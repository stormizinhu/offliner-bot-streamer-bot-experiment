import { actions } from './global.js';
import { populateDropdown } from '../utils/dropdownUtils.js';
import { updateCategoriesOrActions, updateSubcategoriesOrParameters } from '../utils/dropdownManager.js';
import { addItemToList } from '../utils/listManager.js';

// Seletores
const platformSelect = document.getElementById("platform");
const categorySelect = document.getElementById("action");
const subcategorySelect = document.getElementById("subaction");
const parametersDiv = document.getElementById("actionParameters");
const actionList = document.getElementById("actionList");

// Popula dropdown de plataformas
populateDropdown(platformSelect, Object.keys(actions).map(key => ({ value: key, label: key })));

platformSelect.addEventListener("change", () => {
    updateCategoriesOrActions(platformSelect.value, actions, categorySelect, subcategorySelect, parametersDiv);
});

categorySelect.addEventListener("change", () => {
    updateSubcategoriesOrParameters(platformSelect.value, categorySelect.value, actions, subcategorySelect, parametersDiv);
});

// Evento para o terceiro dropdown
subcategorySelect.addEventListener("change", () => {
    updateSubcategoriesOrParameters(platformSelect.value, categorySelect.value, actions, subcategorySelect, parametersDiv);
});

document.getElementById("addButton").addEventListener("click", () => {
    addItemToList(platformSelect.value, categorySelect.value, subcategorySelect.value, actions, parametersDiv, actionList);
});

document.getElementById("clearButton").addEventListener("click", () => {
    actionList.innerHTML = ""; // Limpa a lista de ações
});