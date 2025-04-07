export const twitchActions   = {
    Ads: {
        GetAdSchedule: {
            name: "Get Ad Schedule",
            description: "Obtains the channel's ad schedule.",
            parameters: []
        },
        GetPreRollFreeTime: {
            name: "Get Pre-roll Free Time",
            description: "Obtains the free pre-roll ad time.",
            parameters: []
        },
        RunCommercial: {
            name: "Run Commercial",
            description: "Runs a commercial on the channel.",
            parameters: [{ name: "duration", type: "text", placeholder: "Duration (in seconds)" }]
        },
        SnoozeAd: {
            name: "Snooze Ad",
            description: "Delays the display of an ad on the channel.",
            parameters: []
        }
    },
    Channel: {
        AddViewerCount: {
            name: "Add Viewer Count",
            description: "Adds a number of views to the channel's counter.",
            parameters: []
        },
        CreateClip: {
            name: "Create Clip",
            description: "Creates a clip for the channel.",
            parameters: []
        },
        CreateStreamMarker: {
            name: "Create Stream Marker",
            description: "Creates a marker during the stream.",
            parameters: []
        },
        SetChannelBrandedContent: {
            name: "Set Channel Branded Content",
            description: "Sets the channel's branded content.",
            parameters: []
        },
        SetChannelGame: {
            name: "Set Channel Game",
            description: "Sets the game being streamed.",
            parameters: [{ name: "gameId", type: "text", placeholder: "Game ID" }]
        },
        SetChannelTitle: {
            name: "Set Channel Title",
            description: "Sets the channel's title.",
            parameters: [{ name: "title", type: "text", placeholder: "Channel title" }]
        }
    },
    Charity: {
        GetLatestCharityCampaign: {
            name: "Get Latest Charity Campaign",
            description: "Obtains information about the latest charity campaign.",
            parameters: []
        }
    },
    Chat: {
        ClearChatMessages: {
            name: "Clear Chat Messages",
            description: "Clears chat messages.",
            parameters: []
        },
        ReplyToMessage: {
            name: "Reply To Message",
            description: "Replies to a message in chat.",
            parameters: [
                { name: "messageId", type: "text", placeholder: "Message ID" },
                { name: "reply", type: "text", placeholder: "Reply message" }
            ]
        },
        SendAnnouncementToChannel: {
            name: "Send Announcement to Channel",
            description: "Sends an announcement to the channel's chat.",
            parameters: [{ name: "message", type: "text", placeholder: "Enter the message" }]
        },
        SendMessageToChannel: {
            name: "Send Message to Channel",
            description: "Sends a message to the channel's chat.",
            parameters: [{ name: "message", type: "text", placeholder: "Enter the message" }]
        }
    },
    Followers: {
        GetFollowAgeInfoForTarget: {
            name: "Get Follow Age Info for Target",
            description: "Obtains how long a user has followed the channel.",
            parameters: [{ name: "userId", type: "text", placeholder: "User ID" }]
        },
        GetFollowerCount: {
            name: "Get Follower Count",
            description: "Obtains the total number of followers for the channel.",
            parameters: []
        },
        GetLatestFollower: {
            name: "Get Latest Follower",
            description: "Obtains information about the most recent follower.",
            parameters: []
        }
    },
    GuestStar: {
        AssignGuestStarSlot: {
            name: "Assign Guest Star Slot",
            description: "Associates a slot with the Guest Star.",
            parameters: []
        },
        CreateGuestStarSession: {
            name: "Create Guest Star Session",
            description: "Creates a Guest Star session.",
            parameters: []
        },
        DeleteGuestStarInvite: {
            name: "Delete Guest Star Invite",
            description: "Deletes a Guest Star invite.",
            parameters: []
        },
        DeleteGuestStarSlot: {
            name: "Delete Guest Star Slot",
            description: "Deletes a Guest Star slot.",
            parameters: []
        },
        EndGuestStarSession: {
            name: "End Guest Star Session",
            description: "Ends a Guest Star session.",
            parameters: []
        },
        GetChannelGuestStarSettings: {
            name: "Get Channel Guest Star Settings",
            description: "Obtains the Guest Star settings for the channel.",
            parameters: []
        },
        GetGuestStarInvites: {
            name: "Get Guest Star Invites",
            description: "Obtains the Guest Star invites.",
            parameters: []
        },
        GetGuestStarSession: {
            name: "Get Guest Star Session",
            description: "Obtains information about the Guest Star session.",
            parameters: []
        },
        SendGuestStarInvite: {
            name: "Send Guest Star Invite",
            description: "Sends a Guest Star invite.",
            parameters: []
        },
        UpdateChannelGuestStarSettings: {
            name: "Update Channel Guest Star Settings",
            description: "Updates the channel's Guest Star settings.",
            parameters: []
        },
        UpdateGuestStarSlot: {
            name: "Update Guest Star Slot",
            description: "Updates a Guest Star slot.",
            parameters: []
        },
        UpdateGuestStarSlotSettings: {
            name: "Update Guest Star Slot Settings",
            description: "Updates Guest Star slot settings.",
            parameters: []
        }
    },
    Moderation: {
        AddModerator: {
            name: "Add Moderator",
            description: "Adds a moderator to the channel.",
            parameters: [{ name: "userId", type: "text", placeholder: "User ID" }]
        },
        AddVIP: {
            name: "Add VIP",
            description: "Adds a user as VIP to the channel.",
            parameters: [{ name: "userId", type: "text", placeholder: "User ID" }]
        },
        BanUser: {
            name: "Ban User",
            description: "Bans a user from the channel.",
            parameters: [{ name: "userId", type: "text", placeholder: "User ID" }]
        },
        RemoveModerator: {
            name: "Remove Moderator",
            description: "Removes a moderator from the channel.",
            parameters: [{ name: "userId", type: "text", placeholder: "User ID" }]
        },
        RemoveVIP: {
            name: "Remove VIP",
            description: "Removes a user from VIP status on the channel.",
            parameters: [{ name: "userId", type: "text", placeholder: "User ID" }]
        },
        SendShoutout: {
            name: "Send Shoutout",
            description: "Sends a shoutout to a user.",
            parameters: [{ name: "userId", type: "text", placeholder: "User ID" }]
        },
        TimeoutUser: {
            name: "Timeout User",
            description: "Puts a user in timeout on the channel.",
            parameters: [
                { name: "userId", type: "text", placeholder: "User ID" },
                { name: "duration", type: "text", placeholder: "Duration (in seconds)" }
            ]
        },
        UnbanUser: {
            name: "Unban User",
            description: "Unbans a user from the channel.",
            parameters: [{ name: "userId", type: "text", placeholder: "User ID" }]
        },
        UnTimeoutUser: {
            name: "UnTimeout User",
            description: "Removes timeout from a user on the channel.",
            parameters: [{ name: "userId", type: "text", placeholder: "User ID" }]
        },
        WarnUser: {
            name: "Warn User",
            description: "Sends a warning to a user on the channel.",
            parameters: [{ name: "userId", type: "text", placeholder: "User ID" }]
        }
    },
    Polls: {
        ArchiveActivePoll: {
            name: "Archive Active Poll",
            description: "Archives the active poll on the channel.",
            parameters: []
        },
        CreatePoll: {
            name: "Create Poll",
            description: "Creates a new poll on the channel.",
            parameters: [
                { name: "title", type: "text", placeholder: "Poll title" },
                { name: "options", type: "text", placeholder: "Poll options separated by commas" },
                { name: "duration", type: "text", placeholder: "Duration (in seconds)" }
            ]
        },
        GetActivePoll: {
            name: "Get Active Poll",
            description: "Obtains information about the active poll.",
            parameters: []
        },
        TerminateActivePoll: {
            name: "Terminate Active Poll",
            description: "Ends the active poll on the channel.",
            parameters: []
        }
    },
    Predictions: {
        CancelActivePrediction: {
            name: "Cancel Active Prediction",
            description: "Cancels the active prediction on the channel.",
            parameters: []
        },
        CreatePrediction: {
            name: "Create Prediction",
            description: "Creates a new prediction on the channel.",
            parameters: [
                { name: "title", type: "text", placeholder: "Prediction title" },
                { name: "outcomes", type: "text", placeholder: "Outcomes separated by commas" },
                { name: "duration", type: "text", placeholder: "Duration (in seconds)" }
            ]
        },
        GetActivePrediction: {
            name: "Get Active Prediction",
            description: "Obtains information about the active prediction.",
            parameters: []
        },
        LockActivePrediction: {
            name: "Lock Active Prediction",
            description: "Locks the active prediction on the channel.",
            parameters: []
        },
        ResolveLastPrediction: {
            name: "Resolve Last Prediction",
            description: "Resolves the last prediction on the channel.",
            parameters: [{ name: "outcomeId", type: "text", placeholder: "Winning outcome ID" }]
        },
        ResolveLastPredictionByTitle: {
            name: "Resolve Last Prediction By Title",
            description: "Resolves the last prediction by title on the channel.",
            parameters: [{ name: "title", type: "text", placeholder: "Prediction title" }]
        }
    },
    Raid: {
        CancelRaid: {
            name: "Cancel Raid",
            description: "Cancels an active raid.",
            parameters: []
        },
        StartRaid: {
            name: "Start Raid",
            description: "Starts a raid to another channel.",
            parameters: [{ name: "channelName", type: "text", placeholder: "Target channel name" }]
        }
    },
    Rewards: {
        ConfigureRewards: {
            name: "Configure Rewards",
            description: "Configures the channel rewards.",
            parameters: [
                { name: "rewardName", type: "text", placeholder: "Reward name" },
                { name: "settings", type: "text", placeholder: "Reward settings" }
            ]
        },
        GetRewardInfo: {
            name: "Get Reward Info",
            description: "Obtains information about rewards.",
            parameters: []
        },
        ResetRewardCounter: {
            name: "Reset Reward Counter",
            description: "Resets the counter for a reward.",
            parameters: []
        },
        ResetRewardUserCounters: {
            name: "Reset Reward User Counters",
            description: "Resets the user counters for a reward.",
            parameters: []
        },
        SetBackgroundColor: {
            name: "Set Background Color",
            description: "Sets the background color of the reward.",
            parameters: [{ name: "color", type: "text", placeholder: "Hex color" }]
        },
        SetCost: {
            name: "Set Cost",
            description: "Sets the cost of the reward.",
            parameters: [{ name: "cost", type: "text", placeholder: "Reward cost" }]
        },
        SetEnabledState: {
            name: "Set Enabled State",
            description: "Enables or disables the reward.",
            parameters: [{ name: "state", type: "dropdown", options: ["Enabled", "Disabled"] }]
        },
        SetGlobalCooldown: {
            name: "Set Global Cooldown",
            description: "Sets the global cooldown time for the reward.",
            parameters: [{ name: "cooldown", type: "text", placeholder: "Cooldown time in seconds" }]
        },
        SetGroupEnabledState: {
            name: "Set Group Enabled State",
            description: "Enables or disables a group of rewards.",
            parameters: [
                { name: "groupId", type: "text", placeholder: "Group ID" },
                { name: "state", type: "dropdown", options: ["Enabled", "Disabled"] }
            ]
        },
        SetGroupPausedState: {
            name: "Set Group Paused State",
            description: "Pauses or resumes a group of rewards.",
            parameters: [
                { name: "groupId", type: "text", placeholder: "Group ID" },
                { name: "state", type: "dropdown", options: ["Paused", "Active"] }
            ]
        },
        SetMaxPerStream: {
            name: "Set Max Per Stream",
            description: "Sets the maximum number per stream for the reward.",
            parameters: [{ name: "maxCount", type: "text", placeholder: "Maximum per stream" }]
        },
        SetPausedState: {
            name: "Set Paused State",
            description: "Activates or pauses the state of a reward.",
            parameters: [{ name: "state", type: "dropdown", options: ["Paused", "Active"] }]
        },
        SetPrompt: {
            name: "Set Prompt",
            description: "Sets the prompt associated with the reward.",
            parameters: [{ name: "prompt", type: "text", placeholder: "Prompt text" }]
        },
        SetTitle: {
            name: "Set Title",
            description: "Sets the title of a reward.",
            parameters: [{ name: "title", type: "text", placeholder: "Reward title" }]
        },
        Update: {
            name: "Update",
            description: "Updates the settings of a reward.",
            parameters: [
                { name: "rewardName", type: "text", placeholder: "Reward name" },
                { name: "settings", type: "text", placeholder: "New reward settings" }
            ]
        },
        UpdateRedemptionStatus: {
            name: "Update Redemption Status",
            description: "Updates the redemption status of a reward.",
            parameters: [
                { name: "status", type: "text", placeholder: "New status (e.g., 'Completed')" },
                { name: "redemptionId", type: "text", placeholder: "Redemption ID" }
            ]
        }
    },
    Subscribers: {
        GetLatestSubscriber: {
            name: "Get Latest Subscriber",
            description: "Obtains information about the latest subscriber on the channel.",
            parameters: []
        },
        GetSubscriberCount: {
            name: "Get Subscriber Count",
            description: "Obtains the total number of subscribers for the channel.",
            parameters: []
        }
    },
    Tags: {
        AddChannelTag: {
            name: "Add Channel Tag",
            description: "Adds a tag to the channel.",
            parameters: [{ name: "tag", type: "text", placeholder: "Tag name" }]
        },
        ClearChannelTags: {
            name: "Clear Channel Tags",
            description: "Removes all tags from the channel.",
            parameters: []
        },
        RemoveChannelTag: {
            name: "Remove Channel Tag",
            description: "Removes a specific tag from the channel.",
            parameters: [{ name: "tag", type: "text", placeholder: "Tag name" }]
        },
        SetChannelTags: {
            name: "Set Channel Tags",
            description: "Sets the tags for the channel.",
            parameters: [{ name: "tags", type: "text", placeholder: "Tags separated by commas" }]
        }
    },
    User: {
        AddBroadcasterInformation: {
            name: "Add Broadcaster Information",
            description: "Adds information about the broadcaster.",
            parameters: [{ name: "info", type: "text", placeholder: "Broadcaster information" }]
        },
        AddPresentUser: {
            name: "Add Present User",
            description: "Adds a present user to the channel.",
            parameters: [{ name: "userId", type: "text", placeholder: "User ID" }]
        },
        AddRandomUsers: {
            name: "Add Random Users",
            description: "Adds random users to the channel.",
            parameters: [{ name: "count", type: "text", placeholder: "Number of users" }]
        },
        GetTeamInfoForTarget: {
            name: "Get Team Info for Target",
            description: "Obtains information about the target's team.",
            parameters: [{ name: "teamId", type: "text", placeholder: "Team ID" }]
        },
        GetUserInfoForTarget: {
            name: "Get User Info for Target",
            description: "Obtains information about the target user.",
            parameters: [{ name: "userId", type: "text", placeholder: "User ID" }]
        }
    },
    UserGroups: {
        AddUserToGroup: {
            name: "Add User To Group",
            description: "Adds a user to a group.",
            parameters: [
                { name: "groupId", type: "text", placeholder: "Group ID" },
                { name: "userId", type: "text", placeholder: "User ID" }
            ]
        },
        RemoveUserFromGroup: {
            name: "Remove User From Group",
            description: "Removes a user from a group.",
            parameters: [
                { name: "groupId", type: "text", placeholder: "Group ID" },
                { name: "userId", type: "text", placeholder: "User ID" }
            ]
        },
        UserInGroup: {
            name: "User In Group",
            description: "Checks if a user is in a group.",
            parameters: []
        },
    }

}