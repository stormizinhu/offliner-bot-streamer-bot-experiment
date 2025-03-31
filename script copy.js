// Importando a função fetchActions do global.js
import fetchActions from './objects/global copy.js';

// Elementos DOM
const platformSelect = document.getElementById("platform");
const categorySelect = document.getElementById("action");
const subcategorySelect = document.getElementById("subaction");
const parametersDiv = document.getElementById("parameters");
const actionList = document.getElementById("actionList");

// Função principal que carrega e inicializa os dados
fetchActions().then(actions => {
    // Popula o primeiro dropdown com os nomes das plataformas
    populatePlatformDropdown(actions);

    // Eventos do DOM
    platformSelect.addEventListener("change", () => updateCategories(actions));
    categorySelect.addEventListener("change", () => updateSubcategoriesOrParameters(actions));
    subcategorySelect.addEventListener("change", () => updateParameters(actions));
    document.getElementById("addButton").addEventListener("click", () => addAction(actions));
    document.getElementById("clearButton").addEventListener("click", clearList);
    document.getElementById("exportButton").addEventListener("click", exportListAsScreenshot);
});

// Popula o primeiro dropdown com os nomes das plataformas
function populatePlatformDropdown(actions) {
    platformSelect.innerHTML = '<option value="">Selecione uma plataforma...</option>';
    Object.keys(actions).forEach(platform => {
        const option = document.createElement("option");
        option.value = platform;
        option.textContent = platform; // Nome da plataforma
        platformSelect.appendChild(option);
    });
}

// Atualiza as categorias no segundo dropdown com base na plataforma selecionada
function updateCategories(actions) {
    categorySelect.innerHTML = '<option value="">Categoria...</option>';
    subcategorySelect.innerHTML = '<option value="">Subcategoria...</option>';
    parametersDiv.innerHTML = "";
    subcategorySelect.style.display = "none"; // Esconde o dropdown de subcategoria por padrão

    const platform = platformSelect.value; // Plataforma selecionada
    if (!platform) return; // Se nenhuma plataforma for selecionada, não faz nada

    // Popula o segundo dropdown com as categorias da plataforma selecionada
    Object.keys(actions[platform]).forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });

    categorySelect.style.display = "inline-block"; // Exibe o segundo dropdown
}

// Atualiza as subcategorias no terceiro dropdown ou exibe os parâmetros diretamente
function updateSubcategoriesOrParameters(actions) {
    subcategorySelect.innerHTML = '<option value="">Subcategoria...</option>';
    parametersDiv.innerHTML = "";

    const platform = platformSelect.value;
    const category = categorySelect.value;
    if (!platform || !category) return; // Se plataforma ou categoria não forem selecionadas, não faz nada

    const actionsInCategory = actions[platform][category];
    const actionKeys = Object.keys(actionsInCategory);

    // Verifica se existem subcategorias válidas
    if (actionKeys.some(key => typeof actionsInCategory[key].parameters === "undefined")) {
        // Exibe o terceiro dropdown com as subcategorias
        subcategorySelect.style.display = "inline-block";
        actionKeys.forEach(subcategory => {
            const subcategoryConfig = actionsInCategory[subcategory];
            const option = document.createElement("option");
            option.value = subcategory;
            option.textContent = subcategoryConfig.name;
            subcategorySelect.appendChild(option);
        });
    } else {
        // Se não houver subcategorias, exibe os parâmetros diretamente
        if (actionsInCategory.parameters) {
            actionsInCategory.parameters.forEach(param => addParameterField(param));
        }
        subcategorySelect.style.display = "none"; // Oculta o terceiro dropdown
    }
}

// Atualiza os parâmetros com base na seleção de subcategoria ou categoria
function updateParameters(actions) {
    parametersDiv.innerHTML = "";

    const platform = platformSelect.value;
    const category = categorySelect.value;
    const subcategory = subcategorySelect.value;

    const actionConfig = subcategory
        ? actions[platform][category][subcategory] // Acessa subcategoria
        : actions[platform][category]; // Acessa diretamente a categoria

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

// Adiciona uma ação à lista
function addAction(actions) {
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

    const parameters = getParameterValues(actions, platform, category, subcategory || category); // Obtém os parâmetros corretamente
    if (parameters.length > 0) {
        text += ` (${parameters.join(", ")})`;
    }

    const li = document.createElement("li");
    li.className = "item";
    li.draggable = true;

    li.innerHTML = `
        <span>${text}</span>
        <button class="hamburger-btn" title="Mover">☰</button>
        <button class="remove-btn" title="Deletar" onclick="this.parentElement.remove()">❌</button>`;
    
    actionList.appendChild(li);
    addDragAndDropEvents(li); // Adiciona eventos de drag-and-drop
}

// Obtém os valores dos parâmetros
function getParameterValues(actions, platform, category, subcategory) {
    const actionConfig = subcategory
        ? actions[platform][category][subcategory] // Acessa subcategoria
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

// Adiciona eventos de drag-and-drop
function addDragAndDropEvents(li) {
    li.addEventListener("dragstart", (e) => {
        li.classList.add("dragging");
    });

    li.addEventListener("dragend", (e) => {
        li.classList.remove("dragging");
    });

    li.addEventListener("dragover", (e) => {
        e.preventDefault();
        const afterElement = getDragAfterElement(actionList, e.clientY);
        const draggingElement = document.querySelector(".dragging");
        if (afterElement == null) {
            actionList.appendChild(draggingElement);
        } else {
            actionList.insertBefore(draggingElement, afterElement);
        }
    });
}

// Determina onde inserir o elemento sendo arrastado
function getDragAfterElement(container, y) {
	const draggableElements = [...container.querySelectorAll(".item:not(.dragging)")];

	return draggableElements.reduce((closest, child) => {
			const box = child.getBoundingClientRect();
			const offset = y - box.top - box.height / 2;
			if (offset < 0 && offset > closest.offset) {
					return { offset: offset, element: child };
			} else {
					return closest;
			}
	}, { offset: Number.NEGATIVE_INFINITY }).element;
}

// Função para limpar todas as ações da lista
function clearList() {
	actionList.innerHTML = "";
}

// Função para exportar a lista como imagem
function exportListAsScreenshot() {
	const listDiv = document.querySelector(".list-container");
	if (listDiv) {
			html2canvas(listDiv).then(function (canvas) {
					const link = document.createElement('a');
					link.href = canvas.toDataURL('image/png');
					link.download = 'lista_de_acoes.png';
					link.click();
			}).catch(function (error) {
					console.error('Erro ao capturar a screenshot:', error);
			});
	}
}	