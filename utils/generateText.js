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

    function generatePlainTextWithDetails(triggerList, actionList) {
        const triggerText = [
            "Trigger", // Título
            ...triggerList.map((item) => item.textContent.trim()),"" ].join("\n");

        const actionText = [
            "Action List", // Título
            ...actionList.map((item) => item.textContent.trim()), "" ].join("\n");

        return `${triggerText}\n${actionText}`;
    }

    function removeMiniButtons(listElement) {
        const miniButtons = listElement.querySelectorAll(".mini-button");
        miniButtons.forEach(button => button.remove());
    }

    document.getElementById("exportButton").addEventListener("click", () => {
        const triggerListElement = document.getElementById("triggerList");
        const actionListElement = document.getElementById("actionList");

        if (!triggerListElement || !actionListElement) {
            console.error("Missing list elements in the DOM!");
            return;
        }

        removeMiniButtons(triggerListElement);
        removeMiniButtons(actionListElement);

        const triggerList = [...triggerListElement.querySelectorAll(".item")];

        const actionList = [...actionListElement.querySelectorAll(".item")];

        const plainText = generatePlainTextWithDetails(triggerList, actionList);

        const timestamp = getTimestamp();
        const fileName = `trigger_action_list_${timestamp}.txt`;
        const blob = new Blob([plainText], { type: "text/plain" });
        const link = document.createElement("a");

        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        link.click();

        console.log(`File saved as: ${fileName}`);
    });