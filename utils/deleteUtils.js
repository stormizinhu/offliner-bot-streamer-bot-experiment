export function setupDeleteHandlers() {
  // Seleciona as listas de action e trigger
  const actionList = document.getElementById("actionList");
  const triggerList = document.getElementById("triggerList");

  // Configura os eventos para remover itens de actionList
  addRemoveEvent(actionList);

  // Configura os eventos para remover itens de triggerList
  addRemoveEvent(triggerList);

  // Configura os eventos para limpar a lista de actionList
  const actionClearButton = document.getElementById("actionClearButton");
  actionClearButton.addEventListener("click", () => {
      clearListWithAnimation(actionList);
  });

  // Configura os eventos para limpar a lista de triggerList
  const triggerClearButton = document.getElementById("triggerClearButton");
  triggerClearButton.addEventListener("click", () => {
      clearListWithAnimation(triggerList);
  });
}

export function removeItemWithAnimation(item) {
    // Desativa o drag imediatamente
    item.draggable = false;

    // Marca como removido
    item.dataset.toBeDeleted = "true";
    item.classList.add("removing");

    // Remove após a animação
    setTimeout(() => {
        if (item.parentElement) {
            item.remove();
        }
    }, 500);
}


// Função para limpar a lista com animação
function clearListWithAnimation(list) {
  const items = list.querySelectorAll(".item");

  items.forEach((item, index) => {
      item.classList.add("removing");

      setTimeout(() => {
          list.removeChild(item);
      }, 500 * (index + 1));
  });
}

// Função para adicionar o evento de remoção aos botões de "remover"
function addRemoveEvent(list) {
  const removeButtons = list.querySelectorAll('.remove-btn');
  
  removeButtons.forEach(button => {
      button.addEventListener('click', () => {
          const item = button.closest('.item');
          removeItemWithAnimation(item, list);
      });
  });
}
// Função para remover o item da lista
export function onDeleteCallback(item) {
  // Apenas remove o item do DOM
  item.remove();
}
