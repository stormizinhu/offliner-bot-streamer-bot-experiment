import { triggers } from './global.js';
import { populateDropdown } from '../utils/dropdownUtils.js';
import { updateCategories, updateSubcategoriesOrParameters } from '../utils/dropdownManager.js';
import { addItemToList } from '../utils/listManager.js';

const triggerPlatformSelect = document.getElementById("triggerPlatform");
const triggerCategorySelect = document.getElementById("triggerCategory");
const triggerSubcategorySelect = document.getElementById("triggerSubcategory");
const triggerParametersDiv = document.getElementById("triggerParameters");
const triggerList = document.getElementById("triggerList");

populateDropdown(triggerPlatformSelect, Object.keys(triggers).map(key => ({ value: key, label: key })));

triggerPlatformSelect.addEventListener("change", () => {
    updateCategories(triggerPlatformSelect.value, triggers, triggerCategorySelect, triggerSubcategorySelect, triggerParametersDiv);
});

triggerCategorySelect.addEventListener("change", () => {
    updateSubcategoriesOrParameters(triggerPlatformSelect.value, triggerCategorySelect.value, triggers, triggerSubcategorySelect, triggerParametersDiv);
});

triggerSubcategorySelect.addEventListener("change", () => {
    updateSubcategoriesOrParameters(triggerPlatformSelect.value, triggerCategorySelect.value, triggers, triggerSubcategorySelect, triggerParametersDiv);
});

document.getElementById("triggerAddButton").addEventListener("click", () => {
    addItemToList(triggerPlatformSelect.value, triggerCategorySelect.value, triggerSubcategorySelect.value, triggers, triggerParametersDiv, triggerList);
});

document.getElementById("triggerClearButton").addEventListener("click", () => {
    triggerList.innerHTML = "";
});