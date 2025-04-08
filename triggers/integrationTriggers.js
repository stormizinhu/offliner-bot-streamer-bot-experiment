export const integrationTriggers = {
    StreamElements: {
        Connected: {
            name: "Connected",
            description: "Executes an action when the platform is connected.",
            parameters: []
        },
        Disconnected: {
            name: "Disconnected",
            description: "Executes an action when the platform is disconnected.",
            parameters: []
        },
        Merch: {
            name: "Merch",
            description: "Executes an action when a merch-related event occurs.",
            parameters: [
                { name: "item", type: "text", placeholder: "Merch Item" },
                { name: "quantity", type: "number", placeholder: "Quantity Sold" }
            ]
        },
        Tip: {
            name: "Tip",
            description: "Executes an action when a tip is received.",
            parameters: [
                { name: "amount", type: "text", placeholder: "Tip Amount" },
                { name: "currency", type: "dropdown", options: ["USD", "EUR", "BRL"] }
            ]
        }
    }
};