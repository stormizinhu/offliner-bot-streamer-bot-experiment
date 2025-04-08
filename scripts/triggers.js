import { triggers } from './global.js';
import { populateDropdown } from '../utils/dropdownUtils.js';
import { updateCategories, updateSubcategoriesOrParameters } from '../utils/dropdownManager.js';
import { addItemToList } from '../utils/listManager.js';

// Seletores
const triggerPlatformSelect = document.getElementById("triggerPlatform");
const triggerCategorySelect = document.getElementById("triggerCategory");
const triggerSubcategorySelect = document.getElementById("triggerSubcategory");
const triggerParametersDiv = document.getElementById("triggerParameters");
const triggerList = document.getElementById("triggerList");

// Popula dropdown de plataformas
populateDropdown(triggerPlatformSelect, Object.keys(triggers).map(key => ({ value: key, label: key })));

triggerPlatformSelect.addEventListener("change", () => {
    updateCategories(triggerPlatformSelect.value, triggers, triggerCategorySelect, triggerSubcategorySelect, triggerParametersDiv);
});

triggerCategorySelect.addEventListener("change", () => {
    updateSubcategoriesOrParameters(triggerPlatformSelect.value, triggerCategorySelect.value, triggers, triggerSubcategorySelect, triggerParametersDiv);
});

// Evento para o terceiro dropdown
triggerSubcategorySelect.addEventListener("change", () => {
    updateSubcategoriesOrParameters(triggerPlatformSelect.value, triggerCategorySelect.value, triggers, triggerSubcategorySelect, triggerParametersDiv);
});

document.getElementById("addTriggerButton").addEventListener("click", () => {
    addItemToList(triggerPlatformSelect.value, triggerCategorySelect.value, triggerSubcategorySelect.value, triggers, triggerParametersDiv, triggerList);
});

document.getElementById("clearTriggerButton").addEventListener("click", () => {
    triggerList.innerHTML = ""; // Limpa a lista de gatilhos
});