import { addDragAndDropEvents, clearList } from './dragndrop.js';
import { exportListAsScreenshot } from './screenshot.js';

// Importando o objeto 'triggers' do global.js
import { triggers } from './global.js';

// Elementos DOM para Triggers
const triggerPlatformSelect = document.getElementById("triggerPlatform");
const triggerCategorySelect = document.getElementById("triggerCategory");
const triggerSubcategorySelect = document.getElementById("triggerSubcategory");
const triggerList = document.getElementById("triggerList");

// Função para popular as plataformas no primeiro dropdown de triggers
Object.keys(triggers).forEach(platform => {
    const option = document.createElement("option");
    option.value = platform;
    option.textContent = platform;
    triggerPlatformSelect.appendChild(option);
});

// Função para atualizar as categorias com base na plataforma selecionada
function updateTriggerCategories() {
    triggerCategorySelect.innerHTML = '<option value="">Category...</option>';
    triggerSubcategorySelect.innerHTML = '<option value="">Subcategory...</option>';

    const platform = triggerPlatformSelect.value;
    if (!platform) {
        triggerCategorySelect.style.display = "none";
        return;
    }

    Object.keys(triggers[platform]).forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        triggerCategorySelect.appendChild(option);
    });

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

        triggerKeys.forEach(subcategory => {
            const subcategoryConfig = triggersInCategory[subcategory];
            const option = document.createElement("option");
            option.value = subcategory;
            option.textContent = subcategoryConfig.name;
            triggerSubcategorySelect.appendChild(option);
        });
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

  const parameters = getTriggerParameterValues(platform, category, subcategory || category); // Obtém os parâmetros corretamente
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

  triggerList.appendChild(li);

  // Usa a função do arquivo externo para adicionar eventos de drag-and-drop
  addDragAndDropEvents(li, triggerList);
}

function getTriggerParameterValues(platform, category, subcategory) {
  const triggerConfig = subcategory
      ? triggers[platform][category][subcategory]
      : triggers[platform][category];

  const parameterValues = [];

  if (triggerConfig && triggerConfig.parameters) { // Verifica se o objeto existe e contém parâmetros
      triggerConfig.parameters.forEach((param, index) => {
          const input = triggerParametersDiv.querySelectorAll("input, select")[index];
          if (input) {
              parameterValues.push(input.value);
          }
      });
  }

  return parameterValues;
}

function clearTriggerList() {
  clearList(triggerList); // Usa a função do arquivo externo
}


// Adicionando eventos aos elementos
triggerPlatformSelect.addEventListener("change", updateTriggerCategories);
triggerCategorySelect.addEventListener("change", updateTriggerSubcategoriesOrParameters);
document.getElementById("addTriggerButton").addEventListener("click", addTrigger);
document.getElementById("clearTriggerButton").addEventListener("click", clearTriggerList);