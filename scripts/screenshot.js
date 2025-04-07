function exportListAsScreenshot(listDivId, fileName = 'lista_de_acoes.png') {
    const listDiv = document.querySelector(`#${listDivId}`);
    if (listDiv) {
        html2canvas(listDiv).then(function (canvas) {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = fileName;
            link.click();
        }).catch(function (error) {
            console.error('Erro ao capturar a screenshot:', error);
        });
    } else {
        console.error(`Elemento com ID '${listDivId}' não encontrado no DOM.`);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const exportButton = document.getElementById("exportButton");

    if (exportButton) {
        exportButton.addEventListener("click", () => {
            exportListAsScreenshot('child-container', 'lista_exportada.png');
        });
    } else {
        console.error("Botão de exportação com ID 'exportButton' não encontrado no DOM.");
    }
});