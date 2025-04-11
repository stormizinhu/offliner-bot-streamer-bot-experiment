export function addParameterField(param, containerDiv) {
    if (!containerDiv) {
        console.error("Container for parameters is missing!");
        return;
    }

    const wrapper = document.createElement("div"); // Cria um wrapper para cada parâmetro
    const label = document.createElement("label");
    label.textContent = `${param.name}:`;

    let inputElement;
    if (param.type === "dropdown" && param.options) {
        inputElement = document.createElement("select");
        inputElement.id = "selector";
        param.options.forEach(optionText => {
            const option = document.createElement("option");
            option.value = optionText.toLowerCase();
            option.textContent = optionText;
            inputElement.appendChild(option);
        });
    } else {
        inputElement = document.createElement("input");
        inputElement.type = param.type;
        inputElement.placeholder = param.placeholder;
        inputElement.id = "input";
    }

    wrapper.appendChild(label);
    wrapper.appendChild(inputElement);
    containerDiv.appendChild(wrapper); // Adiciona o wrapper ao contêiner principal
}