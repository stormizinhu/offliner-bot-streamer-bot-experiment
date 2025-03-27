export const youtubeActions = {
    Uncategorized: {
        SendMessageToChannel: {
            name: "Send Message to Channel",
            description: "Envia uma mensagem ao canal do YouTube.",
            parameters: [
                { name: "message", type: "text", placeholder: "Digite a mensagem" }
            ]
        },
        SetDescription: {
            name: "Set Description",
            description: "Define a descrição do vídeo no canal do YouTube.",
            parameters: [
                { name: "description", type: "text", placeholder: "Digite a descrição" }
            ]
        },
        SetTitle: {
            name: "Set Title",
            description: "Define o título do vídeo no canal do YouTube.",
            parameters: [
                { name: "title", type: "text", placeholder: "Digite o título" }
            ]
        },
        SetTitleAndDescription: {
            name: "Set Title and Description",
            description: "Define o título e a descrição do vídeo no canal do YouTube.",
            parameters: [
                { name: "title", type: "text", placeholder: "Digite o título" },
                { name: "description", type: "text", placeholder: "Digite a descrição" }
            ]
        }
    },
    Moderation: {
        BanUser: {
            name: "Ban User",
            description: "Bane um usuário do canal do YouTube.",
            parameters: [
                { name: "userId", type: "text", placeholder: "ID do usuário" }
            ]
        },
        TimeoutUser: {
            name: "Timeout User",
            description: "Coloca um usuário em timeout no canal do YouTube.",
            parameters: [
                { name: "userId", type: "text", placeholder: "ID do usuário" },
                { name: "duration", type: "text", placeholder: "Duração (em segundos)" }
            ]
        }
    },
    UserGroups: {
        AddUserToGroup: {
            name: "Add User To Group",
            description: "Adiciona um usuário a um grupo no canal do YouTube.",
            parameters: [
                { name: "groupId", type: "text", placeholder: "ID do grupo" },
                { name: "userId", type: "text", placeholder: "ID do usuário" }
            ]
        },
        RemoveUserFromGroup: {
            name: "Remove User From Group",
            description: "Remove um usuário de um grupo no canal do YouTube.",
            parameters: [
                { name: "groupId", type: "text", placeholder: "ID do grupo" },
                { name: "userId", type: "text", placeholder: "ID do usuário" }
            ]
        },
        UserInGroup: {
            name: "User In Group",
            description: "Verifica se um usuário está em um grupo no canal do YouTube.",
            parameters: [
                { name: "groupId", type: "text", placeholder: "ID do grupo" },
                { name: "userId", type: "text", placeholder: "ID do usuário" }
            ]
        }
    }
};