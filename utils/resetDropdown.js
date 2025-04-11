function resetDropdowns(type) {
  const dropdowns = {
      action: {
          primary: ["actionPlatform"],
          secondary: ["actionCategory", "actionSubcategory"],
          parameters: ["actionParameters"]
      },
      trigger: {
          primary: ["triggerPlatform"],
          secondary: ["triggerCategory", "triggerSubcategory"],
          parameters: ["triggerParameters"]
      }
  };

  const { primary, secondary, parameters } = dropdowns[type] || {};

  primary.forEach((id) => {
      const dropdown = document.getElementById(id);
      if (dropdown) {
          dropdown.value = "";
      }
  });

  secondary.forEach((id) => {
      const dropdown = document.getElementById(id);
      if (dropdown) {
          dropdown.innerHTML = '<option value="">Select...</option>';
          dropdown.style.display = "none";
      }
  });

  parameters.forEach((id) => {
      const container = document.getElementById(id);
      if (container) {
          container.innerHTML = "";
      }
  });
}

  // Função para resetar tudo
  export function resetAll() {
    // Reseta dropdowns
    resetDropdowns("action");
    resetDropdowns("trigger");
  
    // Reseta listas
    const actionList = document.getElementById("actionList");
    const triggerList = document.getElementById("triggerList");
  
    if (actionList) actionList.innerHTML = "";
    if (triggerList) triggerList.innerHTML = "";
  
    console.log("All dropdowns and items have been reset!");
  }



document.getElementById("resetAllButton").addEventListener("click", () => resetAll());
document.getElementById("actionResetButton").addEventListener("click", () => resetDropdowns("action"));
document.getElementById("triggerResetButton").addEventListener("click", () => resetDropdowns("trigger"));