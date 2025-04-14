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

// Função para remover um item com animação
function removeItemWithAnimation(item, list) {
  item.classList.add("removing");

  setTimeout(() => {
      list.removeChild(item);
  }, 500); // Espera a animação de fade e descida
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
