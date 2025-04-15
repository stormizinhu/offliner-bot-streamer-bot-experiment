import { getParameterValues } from './configUtils.js';
import { createListItem } from './listUtils.js';
import { addDragAndDropEvents } from '../scripts/dragndrop.js';

let varCounter = 1;

export function addItemToList(platform, category, subcategory, data, parametersDiv, listContainer) {
    if (!platform || !category || !subcategory)  {
        return;
    }

    const subcategorySelect = document.getElementById("subcategorySelect");
    if (subcategorySelect && subcategorySelect.style.display !== "none") {
        if (subcategorySelect.value === "" || subcategorySelect.value.toLowerCase() === "select") {
            return;
        }
    }

    let text = `${platform} - ${category}`;
    const config = subcategory
        ? data[platform]?.[category]?.[subcategory]
        : data[platform]?.[category];

    if (subcategory) {
        text += ` - ${subcategory}`;
    }

    const parameters = getParameterValues(config, parametersDiv.querySelectorAll("input, select"))
        .map(value => {
            if (value.trim() === "") {
                return `%Var${varCounter++}`;
            }
            return value;
        });

    if (parameters.length > 0) {
        text += ` (${parameters.join(", ")})`;
    }

    const li = createListItem(text, platform, () => li.remove());

    li.classList.add("adding");
    listContainer.appendChild(li);

    setTimeout(() => {
        li.classList.remove("adding");
    }, 500);

    addDragAndDropEvents(li, listContainer);
}