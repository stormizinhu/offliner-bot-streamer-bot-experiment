export function getParameterValues(config, inputElements) {
  const parameterValues = [];
  if (config && config.parameters) {
      config.parameters.forEach((param, index) => {
          const input = inputElements[index];
          if (input) {
              parameterValues.push(input.value);
          }
      });
  }
  return parameterValues;
}