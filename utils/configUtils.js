export function getParameterValues(config, inputElements) {
  const parameterValues = [];
  if (config && config.parameters) { // Verifica se a configuração contém parâmetros
      config.parameters.forEach((param, index) => {
          const input = inputElements[index];
          if (input) {
              parameterValues.push(input.value);
          }
      });
  }
  return parameterValues;
}