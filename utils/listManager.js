import { getParameterValues } from './configUtils.js';
import { createListItem } from './listUtils.js';
import { addDragAndDropEvents } from '../scripts/dragndrop.js';

let varCounter = 1; // Contador global para gerenciar as variáveis numeradas

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

    // Obtém os valores dos parâmetros e substitui campos vazios por %Var1%, %Var2%, etc.
    const parameters = getParameterValues(config, parametersDiv.querySelectorAll("input, select"))
        .map(value => {
            if (value.trim() === "") {
                return `%Var${varCounter++}`; // Incrementa o contador a cada substituição
            }
            return value;
        });

    if (parameters.length > 0) {
        text += ` (${parameters.join(", ")})`;
    }

    const li = createListItem(text, platform, () => li.remove());
    listContainer.appendChild(li);

    addDragAndDropEvents(li, listContainer);
}