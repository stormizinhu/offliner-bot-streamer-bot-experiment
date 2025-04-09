import { getTimestamp } from './getTimestamp.js';

function saveActionListAsPNG() {
    const timestamp = getTimestamp();
    const fileName = `action_list_${timestamp}.png`;

    const actionList = document.getElementById("child-container");

    if (!actionList) {
        console.error("Action list element not found!");
        return;
    }

    html2canvas(actionList).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = fileName;
        link.click();

        console.log(`File saved as: ${fileName}`);
    }).catch((error) => {
        console.error("Error generating the PNG:", error);
    });
}

document.getElementById("exportPNGButton").addEventListener("click", () => {
    saveActionListAsPNG();
});