import { actions } from './global.js';
import { populateDropdown } from '../utils/dropdownUtils.js';
import { updateCategoriesOrActions, updateSubcategoriesOrParameters } from '../utils/dropdownManager.js';
import { addItemToList } from '../utils/listManager.js';

const actionPlatformSelect = document.getElementById("actionPlatform");
const actionCategorySelect = document.getElementById("actionCategory");
const actionSubcategorySelect = document.getElementById("actionSubcategory");
const actionParametersDiv = document.getElementById("actionParameters");
const actionList = document.getElementById("actionList");

populateDropdown(actionPlatformSelect, Object.keys(actions).map(key => ({ value: key, label: key })));

actionPlatformSelect.addEventListener("change", () => {
    updateCategoriesOrActions(actionPlatformSelect.value, actions, actionCategorySelect, actionSubcategorySelect, actionParametersDiv);
});

actionCategorySelect.addEventListener("change", () => {
    updateSubcategoriesOrParameters(actionPlatformSelect.value, actionCategorySelect.value, actions, actionSubcategorySelect, actionParametersDiv);
});

actionSubcategorySelect.addEventListener("change", () => {
    updateSubcategoriesOrParameters(actionPlatformSelect.value, actionCategorySelect.value, actions, actionSubcategorySelect, actionParametersDiv);
});

document.getElementById("actionAddButton").addEventListener("click", () => {
    addItemToList(actionPlatformSelect.value, actionCategorySelect.value, actionSubcategorySelect.value, actions, actionParametersDiv, actionList);
});

document.getElementById("actionClearButton").addEventListener("click", () => {
    actionList.innerHTML = "";
});

window.addEventListener("beforeunload", (event) => {
    const confirmationMessage = "Are you sure you want to refresh the page? Any unsaved progress will be lost.";

    event.preventDefault();
    event.returnValue = confirmationMessage;
});