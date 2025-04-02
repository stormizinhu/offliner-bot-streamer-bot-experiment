// Função para exportar a lista como imagem
function exportListAsScreenshot(listDivId, fileName = 'lista_de_acoes.png') {
    // Captura o elemento pelo ID fornecido
    const listDiv = document.querySelector(`#${listDivId}`);
    if (listDiv) {
        html2canvas(listDiv).then(function (canvas) {
            // Cria um link para download
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png'); // Usa o canvas como fonte para o link
            link.download = fileName; // Define o nome do arquivo
            link.click(); // Aciona o download do arquivo
        }).catch(function (error) {
            console.error('Erro ao capturar a screenshot:', error); // Loga erros no console
        });
    } else {
        console.error(`Elemento com ID '${listDivId}' não encontrado no DOM.`);
    }
}

// Configuração do evento no botão de exportação
document.addEventListener("DOMContentLoaded", () => {
    const exportButton = document.getElementById("exportButton");

    if (exportButton) {
        exportButton.addEventListener("click", () => {
            exportListAsScreenshot('child-container', 'lista_exportada.png'); // ID e nome do arquivo como exemplo
        });
    } else {
        console.error("Botão de exportação com ID 'exportButton' não encontrado no DOM.");
    }
});