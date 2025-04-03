export function populateDropdown(selectElement, options) {
  selectElement.innerHTML = '<option value="">Select...</option>';
  options.forEach(option => {
      const opt = document.createElement("option");
      opt.value = option.value;
      opt.textContent = option.label;
      selectElement.appendChild(opt);
  });
}
