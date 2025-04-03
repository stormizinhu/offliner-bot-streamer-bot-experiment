import { addDragAndDropEvents, clearList } from './dragndrop.js';
// Importando o objeto 'triggers' do global.js
import { triggers } from './global.js';
import { populateDropdown } from '../utils/dropdownUtils.js';
import { createListItem } from '../utils/listUtils.js';
import { formatTextForMobile, formatTextForDesktop } from '../utils/text.Utils.js';
import { getParameterValues } from '../utils/configUtils.js';
import { applyResponsiveFormatting } from '../utils/responsiveUtils.js';

// Elementos DOM para Triggers
const triggerPlatformSelect = document.getElementById("triggerPlatform");
const triggerCategorySelect = document.getElementById("triggerCategory");
const triggerSubcategorySelect = document.getElementById("triggerSubcategory");
const triggerList = document.getElementById("triggerList");

populateDropdown(triggerPlatformSelect, Object.keys(triggers).map(key => ({ value: key, label: key })));

// Função para atualizar as categorias com base na plataforma selecionada
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

// Função para atualizar as subcategorias ou exibir diretamente os triggers
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
        // Caso tenha subcategorias, popula o dropdown normalmente
        triggerSubcategorySelect.style.display = "inline-block";

        populateDropdown(triggerSubcategorySelect, triggerKeys.map(key => ({ value: key, label: triggersInCategory[key].name })));
    }
}

function addTrigger() {
    const platform = triggerPlatformSelect.value;
    const category = triggerCategorySelect.value;
    const subcategory = triggerSubcategorySelect.value;

    if (!platform || !category) return; // Certifica-se de que plataforma e categoria foram selecionadas

    let text = `${platform} - ${category}`;
    const triggerConfig = subcategory
        ? triggers[platform][category][subcategory] // Usa subcategoria se existir
        : triggers[platform][category]; // Usa categoria diretamente se não existir subcategoria

    if (subcategory) {
        text += ` - ${subcategory}`;
    }

    const parameters = getParameterValues(triggerConfig, document.querySelectorAll("input, select")); // Utiliza a função geral
    if (parameters.length > 0) {
        text += ` (${parameters.join(", ")})`;
    }

    const formattedText = formatarTexto(text);

    const li = createListItem(formattedText, platform, () => li.remove()); // Usa função modularizada
    triggerList.appendChild(li);

    addDragAndDropEvents(li, triggerList); // Adiciona eventos de drag-and-drop
}

function clearTriggerList() {
    clearList(triggerList); // Usa a função do arquivo externo
}

function formatarTexto(texto) {
    return texto.split(" - ").join("\n");
}

// Adicionando eventos aos elementos e suporte para media query
document.addEventListener("DOMContentLoaded", () => {
    triggerPlatformSelect.addEventListener("change", updateTriggerCategories);
    triggerCategorySelect.addEventListener("change", updateTriggerSubcategoriesOrParameters);
    document.getElementById("addTriggerButton").addEventListener("click", addTrigger);
    document.getElementById("clearTriggerButton").addEventListener("click", clearTriggerList);
    applyResponsiveFormatting(actionList, formatTextForMobile, formatTextForDesktop);    
});