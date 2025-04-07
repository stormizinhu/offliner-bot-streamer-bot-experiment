export function addDragAndDropEvents(li, listContainer) {
    li.addEventListener("dragstart", () => {
        li.classList.add("dragging");
    });

    li.addEventListener("dragend", () => {
        li.classList.remove("dragging");
    });

    li.addEventListener("dragover", (e) => {
        e.preventDefault();
        const afterElement = getDragAfterElement(listContainer, e.clientY);
        const draggingElement = document.querySelector(".dragging");
        if (afterElement == null) {
            listContainer.appendChild(draggingElement);
        } else {
            listContainer.insertBefore(draggingElement, afterElement);
        }
    });
}

export function getDragAfterElement(container, y) {
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

export function clearList(listContainer) {
    listContainer.innerHTML = "";
}