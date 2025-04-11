function saveActionListAsPNG() {
    const fileName = prompt("Digite um nome para o arquivo .png:");
    if (!fileName) return;

    const actionList = document.getElementById("child-container");

    if (!actionList) {
        console.error("Action list element not found!");
        return;
    }

    html2canvas(actionList).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = `${fileName}.png`;
        link.click();

        console.log(`File saved as: ${fileName}.png`);
    }).catch((error) => {
        console.error("Error generating the PNG:", error);
    });
}

document.getElementById("exportPNGButton").addEventListener("click", saveActionListAsPNG);
