import { triggers } from './global.js';
import { addDragAndDropEvents, clearList } from './dragndrop.js';
import { populateDropdown } from '../utils/dropdownUtils.js';
import { createListItem } from '../utils/listUtils.js';
import { formatTextForMobile, formatTextForDesktop } from '../utils/text.Utils.js';
import { getParameterValues } from '../utils/configUtils.js';
import { applyResponsiveFormatting } from '../utils/responsiveUtils.js';

const triggerPlatformSelect = document.getElementById("triggerPlatform");
const triggerCategorySelect = document.getElementById("triggerCategory");
const triggerSubcategorySelect = document.getElementById("triggerSubcategory");
const triggerList = document.getElementById("triggerList");

populateDropdown(triggerPlatformSelect, Object.keys(triggers).map(key => ({ value: key, label: key })));

function updateTriggerCategories() {
    triggerCategorySelect.innerHTML = '<option value="">Category...</option>';
    triggerSubcategorySelect.innerHTML = '<option value="">Subcategory...</option>';

    const platform = triggerPlatformSelect.value;
    if (!platform) {
        triggerCategorySelect.style.display = "none";
        return;
    }

    populateDropdown(triggerCategorySelect, Object.keys(triggers[platform]).map(key => ({ value: key, label: key })));

    triggerCategorySelect.style.display = "inline-block";
}

function updateTriggerSubcategoriesOrParameters() {
    triggerSubcategorySelect.innerHTML = '<option value="">Subcategory...</option>';

    const platform = triggerPlatformSelect.value;
    const category = triggerCategorySelect.value;
    if (!platform || !category) {
        triggerSubcategorySelect.style.display = "none";
        return;
    }

    const triggersInCategory = triggers[platform][category];
    const triggerKeys = Object.keys(triggersInCategory);

    // Se a categoria não tiver subcategorias
    if (triggerKeys.every(key => !triggersInCategory[key].parameters)) {
        triggerSubcategorySelect.style.display = "none";
    } else {
        triggerSubcategorySelect.style.display = "inline-block";

        populateDropdown(triggerSubcategorySelect, triggerKeys.map(key => ({ value: key, label: triggersInCategory[key].name })));
    }
}

function addTrigger() {
    const platform = triggerPlatformSelect.value;
    const category = triggerCategorySelect.value;
    const subcategory = triggerSubcategorySelect.value;

    if (!platform || !category) return;

    let text = `${platform} - ${category}`;
    const triggerConfig = subcategory
        ? triggers[platform][category][subcategory]
        : triggers[platform][category];

    if (subcategory) {
        text += ` - ${subcategory}`;
    }

    const parameters = getParameterValues(triggerConfig, document.querySelectorAll("input, select")); // Utiliza a função geral
    if (parameters.length > 0) {
        text += ` (${parameters.join(", ")})`;
    }

    const formattedText = formatarTexto(text);

    const li = createListItem(formattedText, platform, () => li.remove());
    triggerList.appendChild(li);

    addDragAndDropEvents(li, triggerList);
}

function clearTriggerList() {
    clearList(triggerList);
}

function formatarTexto(texto) {
    return texto.split(" - ").join("\n");
}

document.addEventListener("DOMContentLoaded", () => {
    triggerPlatformSelect.addEventListener("change", updateTriggerCategories);
    triggerCategorySelect.addEventListener("change", updateTriggerSubcategoriesOrParameters);
    document.getElementById("addTriggerButton").addEventListener("click", addTrigger);
    document.getElementById("clearTriggerButton").addEventListener("click", clearTriggerList);
    applyResponsiveFormatting(actionList, formatTextForMobile, formatTextForDesktop);    
});