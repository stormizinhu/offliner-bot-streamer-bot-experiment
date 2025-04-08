export function addParameterField(param, containerDiv) {
  if (!containerDiv) {
      console.error("Container for parameters is missing!");
      return;
  }

  const label = document.createElement("label");
  label.textContent = `${param.name}:`;

  let inputElement;

  if (param.type === "dropdown" && param.options) {
      inputElement = document.createElement("select");
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
  }

  containerDiv.appendChild(label);
  containerDiv.appendChild(inputElement);
}