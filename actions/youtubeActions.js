export const youtubeActions = {
    Uncategorized: {
        SendMessageToChannel: {
            name: "Send message to channel",
            description: "Sends a message to the YouTube channel.",
            parameters: [{ name: "message", type: "text", placeholder: "Enter the message" }]
        },
        SetDescription: {
            name: "Set description",
            description: "Sets the video description on the YouTube channel.",
            parameters: [{ name: "description", type: "text", placeholder: "Enter the description" }]
        },
        SetTitle: {
            name: "Set title",
            description: "Sets the video title on the YouTube channel.",
            parameters: [{ name: "title", type: "text", placeholder: "Enter the title" }]
        },
        SetTitleAndDescription: {
            name: "Set title and description",
            description: "Sets the video title and description on the YouTube channel.",
            parameters: [
                { name: "title", type: "text", placeholder: "Enter the title" },
                { name: "description", type: "text", placeholder: "Enter the description" }
            ]
        }
    },
    Moderation: {
        BanUser: {
            name: "Ban user",
            description: "Bans a user from the YouTube channel.",
            parameters: [{ name: "userId", type: "text", placeholder: "User ID" }]
        },
        TimeoutUser: {
            name: "Timeout user",
            description: "Puts a user in timeout on the YouTube channel.",
            parameters: [
                { name: "userId", type: "text", placeholder: "User ID" },
                { name: "duration", type: "text", placeholder: "Duration (in seconds)" }
            ]
        }
    },
    UserGroups: {
        AddUserToGroup: {
            name: "Add user to group",
            description: "Adds a user to a group on the YouTube channel.",
            parameters: [
                { name: "groupId", type: "text", placeholder: "Group ID" },
                { name: "userId", type: "text", placeholder: "User ID" }
            ]
        },
        RemoveUserFromGroup: {
            name: "Remove user from group",
            description: "Removes a user from a group on the YouTube channel.",
            parameters: [
                { name: "groupId", type: "text", placeholder: "Group ID" },
                { name: "userId", type: "text", placeholder: "User ID" }
            ]
        },
        UserInGroup: {
            name: "User in group",
            description: "Checks if a user is in a group on the YouTube channel.",
            parameters: [
                { name: "groupId", type: "text", placeholder: "Group ID" },
                { name: "userId", type: "text", placeholder: "User ID" }
            ]
        }
    }
};