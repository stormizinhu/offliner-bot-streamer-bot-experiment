export function addDragAndDropEvents(item, list) {
    item.addEventListener("dragstart", e => {
        e.dataTransfer.setData("text/plain", item.innerHTML);
        item.classList.add("dragging");
        item.style.transition = "transform 0.2s ease";
        item.style.transform = "scale(1.1) translateY(-10px)";
    });

    item.addEventListener("dragend", () => {
        item.classList.remove("dragging");
        item.style.transform = "scale(1) translateY(0)";
    });

    list.addEventListener("dragover", e => {
        e.preventDefault();
    
        if (!list.contains(item)) return;
    
        const afterElement = getDragAfterElement(list, e.clientY);
        if (afterElement == null) {
            list.appendChild(item);
        } else {
            list.insertBefore(item, afterElement);
        }
    });

    item.addEventListener("touchstart", e => {
        item.classList.add("dragging");
        item.style.transition = "transform 0.2s ease"; 
        item.style.transform = "scale(1.1) translateY(-10px)";
        item.dataset.touchStartY = e.touches[0].clientY;
    });

    item.addEventListener("touchmove", e => {
        if (!list.contains(item)) return;
    
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
        item.style.transform = "scale(1) translateY(0)";
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