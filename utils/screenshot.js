// Função para salvar a lista como PNG
function saveActionListAsPNG() {
    const timestamp = getTimestamp(); // Obtém o timestamp
    const fileName = `action_list_${timestamp}.png`; // Nome do arquivo com timestamp

    const actionList = document.getElementById("child-container"); // Seleciona o elemento da lista

    if (!actionList) {
        console.error("Action list element not found!");
        return;
    }

    // Usa html2canvas para capturar o elemento como imagem
    html2canvas(actionList).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png"); // Converte o canvas para URL de imagem
        link.download = fileName; // Define o nome do arquivo
        link.click(); // Simula o clique para fazer o download

        console.log(`File saved as: ${fileName}`);
    }).catch((error) => {
        console.error("Error generating the PNG:", error);
    });
}

// Função para obter o timestamp no formato "DD-MM-YYYY_HH-MM-SS"
function getTimestamp() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    return `${day}-${month}-${year}_${hours}-${minutes}-${seconds}`;
}

// Exemplo de uso: Adiciona o event listener ao botão de exportação
document.getElementById("exportButton").addEventListener("click", () => {
    saveActionListAsPNG(); // Salva a lista como PNG
});