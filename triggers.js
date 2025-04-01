// Importando do global.js
import { addDragAndDropEvents, getDragAfterElement, clearList } from './global.js';

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

  const li = document.createElement("li");
  li.className = "item"; // Mantém a classe padrão para consistência visual
  li.draggable = true;

  li.innerHTML = `
      <span>${text}</span>
      <button class="hamburger-btn mini-button" title="Mover">☰</button>
      <button class="remove-btn mini-button" title="Deletar" onclick="this.parentElement.remove()">❌</button>`;
  
  triggerList.appendChild(li); // Adiciona o item à lista de triggers

  // Adiciona eventos de drag-and-drop para o item de trigger
  addDragAndDropEventsForTriggers(li);
}

function addDragAndDropEventsForTriggers(li) {
  li.addEventListener("dragstart", () => {
      li.classList.add("dragging");
  });

  li.addEventListener("dragend", () => {
      li.classList.remove("dragging");
  });

  li.addEventListener("dragover", (e) => {
      e.preventDefault();
      const afterElement = getDragAfterElement(triggerList, e.clientY);
      const draggingElement = document.querySelector(".dragging");
      if (afterElement == null) {
          triggerList.appendChild(draggingElement);
      } else {
          triggerList.insertBefore(draggingElement, afterElement);
      }
  });
}

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

// Função para limpar todos os triggers da lista
function clearTriggerList() {
    triggerList.innerHTML = "";
}

// Adicionando eventos aos elementos
triggerPlatformSelect.addEventListener("change", updateTriggerCategories);
triggerCategorySelect.addEventListener("change", updateTriggerSubcategoriesOrParameters);
document.getElementById("addTriggerButton").addEventListener("click", addTrigger);
document.getElementById("clearTriggerButton").addEventListener("click", clearTriggerList);