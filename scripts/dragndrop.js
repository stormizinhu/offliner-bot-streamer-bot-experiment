export function addDragAndDropEvents(item, list) {
    item.addEventListener("dragstart", e => {
        e.dataTransfer.setData("text/plain", item.innerHTML);
        item.classList.add("dragging");
    });

    item.addEventListener("dragend", () => {
        item.classList.remove("dragging");
    });

    list.addEventListener("dragover", e => {
        e.preventDefault();
        const afterElement = getDragAfterElement(list, e.clientY);
        if (afterElement == null) {
            list.appendChild(item);
        } else {
            list.insertBefore(item, afterElement);
        }
    });

    // For Mobile
    item.addEventListener("touchstart", e => {
        item.classList.add("dragging");
        item.dataset.touchStartY = e.touches[0].clientY;
    });

    item.addEventListener("touchmove", e => {
        const touchY = e.touches[0].clientY;
        const afterElement = getDragAfterElement(list, touchY);
        if (afterElement == null) {
            list.appendChild(item);
        } else {
            list.insertBefore(item, afterElement);
        }
    });

    item.addEventListener("touchend", () => {
        item.classList.remove("dragging");
    });
}

export function clearList(list) {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
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