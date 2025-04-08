export const integrationActions = {
    Discord: {
        BasicWebhook: {
            name: "Basic Webhook",
            description: "Send a Discord Webhook.",
            parameters: [
                { name: "Message", type: "text", placeholder: "Message" },
                { name: "Webhook", type: "text", placeholder: "Webhook" },

            ]
        },
    }
};

