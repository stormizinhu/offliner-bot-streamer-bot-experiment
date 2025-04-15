export function setupDeleteHandlers() {
  const actionList = document.getElementById("actionList");
  const triggerList = document.getElementById("triggerList");

  const actionClearButton = document.getElementById("actionClearButton");
  actionClearButton.addEventListener("click", () => {
      clearListWithAnimation(actionList);
  });

  const triggerClearButton = document.getElementById("triggerClearButton");
  triggerClearButton.addEventListener("click", () => {
      clearListWithAnimation(triggerList);
  });
}

function clearListWithAnimation(list) {
  const items = list.querySelectorAll(".item");

  items.forEach((item) => {
      item.classList.add("removing");

      item.addEventListener("animationend", () => {
          item.remove();
      });
  });
}