import { addDragAndDropEvents, clearList } from './dragndrop.js';
// Importando diretamente o objeto 'actions' do global.js
import { actions } from './global.js';

// Elementos DOM específicos para Ações
const platformSelect = document.getElementById("platform");
const categorySelect = document.getElementById("action");
const subcategorySelect = document.getElementById("subaction");
const parametersDiv = document.getElementById("parameters");
const actionList = document.getElementById("actionList");

// Função para popular os nomes das plataformas no primeiro dropdown
Object.keys(actions).forEach(platform => {
    let option = document.createElement("option");
    option.value = platform;
    option.textContent = platform;
    platformSelect.appendChild(option);
});

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

    Object.keys(actions[platform]).forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });

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

        actionKeys.forEach(subcategory => {
            const subcategoryConfig = actionsInCategory[subcategory];
            const option = document.createElement("option");
            option.value = subcategory;
            option.textContent = subcategoryConfig.name;
            subcategorySelect.appendChild(option);
        });
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

    const parameters = getParameterValues(platform, category, subcategory || category); // Obtém os parâmetros corretamente
    if (parameters.length > 0) {
        text += ` (${parameters.join(", ")})`;
    }

    const li = document.createElement("li");
    li.className = "item";
    li.draggable = true;

    // Adiciona a classe específica para estilos com base na plataforma
    switch (platform) {
        case 'StreamerBot':
            li.classList.add('streamerBot');
            break;
        case 'BASE':
            li.classList.add('base');
            break;
        case 'Twitch':
            li.classList.add('twitch');
            break;
        case 'OBS':
            li.classList.add('obs');
            break;
        case 'YouTube':
            li.classList.add('youtube');
            break;
        default:
            li.classList.add('default');
            break;
    }

    li.innerHTML = `
        <span>${text}</span>
        <button class="hamburger-btn mini-button" title="Mover">☰</button>
        <button class="remove-btn mini-button" title="Deletar" onclick="this.parentElement.remove()">❌</button>`;

    actionList.appendChild(li);

    // Usa a função do arquivo externo para adicionar eventos de drag-and-drop
    addDragAndDropEvents(li, actionList);
}

function getParameterValues(platform, category, subcategory) {
    const actionConfig = subcategory
        ? actions[platform][category][subcategory] // Acessa a subcategoria
        : actions[platform][category]; // Acessa diretamente a categoria

    const parameterValues = [];

    if (actionConfig && actionConfig.parameters) { // Verifica se o objeto existe e contém parâmetros
        actionConfig.parameters.forEach((param, index) => {
            const input = parametersDiv.querySelectorAll("input, select")[index];
            if (input) {
                parameterValues.push(input.value);
            }
        });
    }

    return parameterValues;
}

function clearActionList() {
    clearList(actionList); // Usa a função do arquivo externo
}

document.addEventListener("DOMContentLoaded", () => {
    platformSelect.addEventListener("change", updateCategories);
    categorySelect.addEventListener("change", updateSubcategoriesOrParameters);
    subcategorySelect.addEventListener("change", updateParameters);
    document.getElementById("addButton").addEventListener("click", addAction);
    document.getElementById("clearButton").addEventListener("click", clearActionList);
});