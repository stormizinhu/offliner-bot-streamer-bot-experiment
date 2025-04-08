import { getParameterValues } from './configUtils.js';
import { createListItem } from './listUtils.js';
import { addDragAndDropEvents } from '../scripts/dragndrop.js';

export function addItemToList(platform, category, subcategory, data, parametersDiv, listContainer) {
    if (!platform || !category) {
        console.error("Platform or category is missing!");
        return;
    }

    let text = `${platform} - ${category}`;
    const config = subcategory
        ? data[platform]?.[category]?.[subcategory]
        : data[platform]?.[category];

    if (subcategory) {
        text += ` - ${subcategory}`;
    }

    const parameters = getParameterValues(config, parametersDiv.querySelectorAll("input, select"));
    if (parameters.length > 0) {
        text += ` (${parameters.join(", ")})`;
    }

    const li = createListItem(text, platform, () => li.remove());
    listContainer.appendChild(li);

    addDragAndDropEvents(li, listContainer);
}