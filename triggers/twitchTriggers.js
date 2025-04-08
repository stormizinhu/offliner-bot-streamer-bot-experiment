export const twitchTriggers = {
  Ads: {
    AdRun: {
      name: "Ad Run",
      description: "Executa uma ação quando um anúncio é iniciado.",
      parameters: []
    },
    UpcomingAd: {
      name: "Upcoming Ad",
      description: "Executa uma ação quando um anúncio está próximo de começar.",
      parameters: []
    }
  },
  Channel: {
    Follow: {
      name: "Follow",
      description: "Executa uma ação quando alguém segue o canal.",
      parameters: []
    },
    StreamOffline: {
      name: "Stream Offline",
      description: "Executa uma ação quando a stream fica offline.",
      parameters: []
    },
    StreamOnline: {
      name: "Stream Online",
      description: "Executa uma ação quando a stream fica online.",
      parameters: []
    },
    ViewerCountUpdate: {
      name: "Viewer Count Update",
      description: "Executa uma ação quando o contador de espectadores é atualizado.",
      parameters: []
    }
  },
  ChannelGoal: {
    GoalBegin: {
      name: "Goal Begin",
      description: "Executa uma ação quando um objetivo começa.",
      parameters: []
    },
    GoalEnd: {
      name: "Goal End",
      description: "Executa uma ação quando um objetivo termina.",
      parameters: []
    },
    GoalProgress: {
      name: "Goal Progress",
      description: "Executa uma ação quando há progresso em um objetivo.",
      parameters: []
    }
  },
  ChannelReward: {
    AutomaticRewardRedemption: {
      name: "Automatic Reward Redemption",
      description: "Executa uma ação quando uma recompensa automática é resgatada.",
      parameters: []
    },
    RewardRedemption: {
      name: "Reward Redemption",
      description: "Executa uma ação quando uma recompensa é resgatada.",
      parameters: []
    },
    RewardRedemptionUpdated: {
      name: "Reward Redemption Updated",
      description: "Executa uma ação quando uma recompensa resgatada é atualizada.",
      parameters: []
    }
  },
  Charity: {
    CharityCompleted: {
      name: "Charity Completed",
      description: "Executa uma ação quando uma campanha de caridade é concluída.",
      parameters: []
    },
    CharityDonation: {
      name: "Charity Donation",
      description: "Executa uma ação quando uma doação de caridade é recebida.",
      parameters: []
    },
    CharityProgress: {
      name: "Charity Progress",
      description: "Executa uma ação quando há progresso em uma campanha de caridade.",
      parameters: []
    },
    CharityStarted: {
      name: "Charity Started",
      description: "Executa uma ação quando uma campanha de caridade é iniciada.",
      parameters: []
    }
  },
  Chat: {
    BitsBadgeTier: {
      name: "Bits Badge Tier",
      description: "Executa uma ação quando um usuário atinge um novo nível de badge de Bits.",
      parameters: []
    },
    BotWhispers: {
      name: "Bot Whispers",
      description: "Executa uma ação quando o bot envia ou recebe um sussurro.",
      parameters: []
    },
    ChatMessage: {
      name: "Chat Message",
      description: "Executa uma ação quando uma mensagem é enviada no chat.",
      parameters: []
    },
    Cheer: {
      name: "Cheer",
      description: "Executa uma ação quando alguém envia cheers.",
      parameters: []
    },
    Whispers: {
      name: "Whispers",
      description: "Executa uma ação quando ocorre um sussurro.",
      parameters: []
    },
    WatchStreak: {
      name: "Watch Streak",
      description: "Executa uma ação quando há uma sequência de visualizações.",
      parameters: []
    }
  },
  CommunityGoal: {
    CommunityGoalContribution: {
      name: "Community Goal Contribution",
      description: "Executa uma ação quando há uma contribuição para um objetivo comunitário.",
      parameters: []
    },
    CommunityGoalEnded: {
      name: "Community Goal Ended",
      description: "Executa uma ação quando um objetivo comunitário termina.",
      parameters: []
    }
  },
  Connections: {
    BotChatConnected: {
      name: "Bot Chat Connected",
      description: "Executa uma ação quando o chat do bot se conecta.",
      parameters: []
    },
    BotChatDisconnected: {
      name: "Bot Chat Disconnected",
      description: "Executa uma ação quando o chat do bot se desconecta.",
      parameters: []
    },
    BroadcasterAuthenticated: {
      name: "Broadcaster Authenticated",
      description: "Executa uma ação quando o streamer é autenticado.",
      parameters: []
    },
    BroadcasterChatConnected: {
      name: "Broadcaster Chat Connected",
      description: "Executa uma ação quando o chat do streamer se conecta.",
      parameters: []
    },
    BroadcasterChatDisconnected: {
      name: "Broadcaster Chat Disconnected",
      description: "Executa uma ação quando o chat do streamer se desconecta.",
      parameters: []
    },
    BroadcasterEventSubConnected: {
      name: "Broadcaster EventSub Connected",
      description: "Executa uma ação quando o EventSub do streamer se conecta.",
      parameters: []
    },
    BroadcasterEventSubDisconnected: {
      name: "Broadcaster EventSub Disconnected",
      description: "Executa uma ação quando o EventSub do streamer se desconecta.",
      parameters: []
    }
  },
  Emotes: {
    BetterTTVEmoteAdded: {
      name: "BetterTTV Emote Added",
      description: "Executa uma ação quando um emote BetterTTV é adicionado.",
      parameters: []
    },
    BetterTTVEmoteRemoved: {
      name: "BetterTTV Emote Removed",
      description: "Executa uma ação quando um emote BetterTTV é removido.",
      parameters: []
    },
    SevenTVEmoteAdded: {
      name: "SevenTV Emote Added",
      description: "Executa uma ação quando um emote SevenTV é adicionado.",
      parameters: []
    },
    SevenTVEmoteRemoved: {
      name: "SevenTV Emote Removed",
      description: "Executa uma ação quando um emote SevenTV é removido.",
      parameters: []
    }
  },
  General: {
    Announcement: {
      name: "Announcement",
      description: "Executa uma ação quando há um anúncio no canal.",
      parameters: []
    },
    FirstWords: {
      name: "First Words",
      description: "Executa uma ação quando as primeiras palavras são enviadas no chat.",
      parameters: []
    },
    PresentViewers: {
      name: "Present Viewers",
      description: "Executa uma ação quando o número de espectadores é atualizado.",
      parameters: []
    },
    ShoutoutReceived: {
      name: "Shoutout Received",
      description: "Executa uma ação quando um shoutout é recebido.",
      parameters: []
    },
    StreamUpdate: {
      name: "Stream Update",
      description: "Executa uma ação quando há uma atualização na stream.",
      parameters: []
    }
  },
  GuestStar: {
    GuestStarGuestUpdate: {
      name: "Guest Star Guest Update",
      description: "Executa uma ação quando há uma atualização do convidado no Guest Star.",
      parameters: []
    },
    GuestStarSessionBegin: {
      name: "Guest Star Session Begin",
      description: "Executa uma ação quando uma sessão Guest Star começa.",
      parameters: []
    },
    GuestStarSessionEnd: {
      name: "Guest Star Session End",
      description: "Executa uma ação quando uma sessão Guest Star termina.",
      parameters: []
    },
    GuestStarSettingsUpdate: {
      name: "Guest Star Settings Update",
      description: "Executa uma ação quando as configurações do Guest Star são atualizadas.",
      parameters: []
    }
  },
  HypeTrain: {
    HypeTrainEnd: {
      name: "Hype Train End",
      description: "Executa uma ação quando o Hype Train termina.",
      parameters: []
    },
    HypeTrainLevelUp: {
      name: "Hype Train Level Up",
      description: "Executa uma ação quando o Hype Train sobe de nível.",
      parameters: []
    },
    HypeTrainStart: {
      name: "Hype Train Start",
      description: "Executa uma ação quando o Hype Train começa.",
      parameters: []
    },
    HypeTrainUpdate: {
      name: "Hype Train Update",
      description: "Executa uma ação quando há uma atualização no Hype Train.",
      parameters: []
    }
  },
  Moderation: {
    AutoModMessageHeld: {
      name: "AutoMod Message Held",
      description: "Executes an action when an AutoMod message is held.",
      parameters: []
    },
    AutoModMessageUpdated: {
      name: "AutoMod Message Updated",
      description: "Executes an action when an AutoMod message is updated.",
      parameters: []
    },
    BlockedTermsAdded: {
      name: "Blocked Terms Added",
      description: "Executes an action when blocked terms are added.",
      parameters: []
    },
    BlockedTermsDeleted: {
      name: "Blocked Terms Deleted",
      description: "Executes an action when blocked terms are deleted.",
      parameters: []
    },
    ChatCleared: {
      name: "Chat Cleared",
      description: "Executes an action when the chat is cleared.",
      parameters: []
    },
    ChatMessageDeleted: {
      name: "Chat Message Deleted",
      description: "Executes an action when a chat message is deleted.",
      parameters: []
    },
    ModeratorAdded: {
      name: "Moderator Added",
      description: "Executes an action when a moderator is added.",
      parameters: []
    },
    ModeratorRemoved: {
      name: "Moderator Removed",
      description: "Executes an action when a moderator is removed.",
      parameters: []
    },
    PermittedTermsAdded: {
      name: "Permitted Terms Added",
      description: "Executes an action when permitted terms are added.",
      parameters: []
    },
    PermittedTermsDeleted: {
      name: "Permitted Terms Deleted",
      description: "Executes an action when permitted terms are deleted.",
      parameters: []
    },
    ShieldModeBegin: {
      name: "Shield Mode Begin",
      description: "Executes an action when shield mode begins.",
      parameters: []
    },
    ShieldModeEnd: {
      name: "Shield Mode End",
      description: "Executes an action when shield mode ends.",
      parameters: []
    },
    ShoutoutCreated: {
      name: "Shoutout Created",
      description: "Executes an action when a shoutout is created.",
      parameters: []
    },
    SuspiciousUserUpdate: {
      name: "Suspicious User Update",
      description: "Executes an action when a suspicious user is updated.",
      parameters: []
    },
    UnbanRequestApproved: {
      name: "Unban Request Approved",
      description: "Executes an action when an unban request is approved.",
      parameters: []
    },
    UnbanRequestCreated: {
      name: "Unban Request Created",
      description: "Executes an action when an unban request is created.",
      parameters: []
    },
    UnbanRequestDenied: {
      name: "Unban Request Denied",
      description: "Executes an action when an unban request is denied.",
      parameters: []
    },
    UserBanned: {
      name: "User Banned",
      description: "Executes an action when a user is banned.",
      parameters: []
    },
    UserTimedOut: {
      name: "User Timed Out",
      description: "Executes an action when a user is timed out.",
      parameters: []
    },
    UserUnbanned: {
      name: "User Unbanned",
      description: "Executes an action when a user is unbanned.",
      parameters: []
    },
    UserUntimedOut: {
      name: "User Untimed Out",
      description: "Executes an action when a user's timeout is removed.",
      parameters: []
    },
    VIPAdded: {
      name: "VIP Added",
      description: "Executes an action when a VIP is added.",
      parameters: []
    },
    VIPRemoved: {
      name: "VIP Removed",
      description: "Executes an action when a VIP is removed.",
      parameters: []
    },
    WarnedUser: {
      name: "Warned User",
      description: "Executes an action when a user is warned.",
      parameters: []
    },
    WarningAcknowledged: {
      name: "Warning Acknowledged",
      description: "Executes an action when a warning is acknowledged.",
      parameters: []
    }
  },
  Polls: {
    PollArchived: {
      name: "Poll Archived",
      description: "Executes an action when a poll is archived.",
      parameters: []
    },
    PollCompleted: {
      name: "Poll Completed",
      description: "Executes an action when a poll is completed.",
      parameters: []
    },
    PollCreated: {
      name: "Poll Created",
      description: "Executes an action when a poll is created.",
      parameters: []
    },
    PollTerminated: {
      name: "Poll Terminated",
      description: "Executes an action when a poll is terminated.",
      parameters: []
    },
    PollUpdated: {
      name: "Poll Updated",
      description: "Executes an action when a poll is updated.",
      parameters: []
    }
  },
  Predictions: {
    PredictionCanceled: {
      name: "Prediction Canceled",
      description: "Executes an action when a prediction is canceled.",
      parameters: []
    },
    PredictionCompleted: {
      name: "Prediction Completed",
      description: "Executes an action when a prediction is completed.",
      parameters: []
    },
    PredictionCreated: {
      name: "Prediction Created",
      description: "Executes an action when a prediction is created.",
      parameters: []
    },
    PredictionLocked: {
      name: "Prediction Locked",
      description: "Executes an action when a prediction is locked.",
      parameters: []
    },
    PredictionUpdated: {
      name: "Prediction Updated",
      description: "Executes an action when a prediction is updated.",
      parameters: []
    }
  },
  Pyramid: {
    PyramidBroken: {
      name: "Pyramid Broken",
      description: "Executes an action when a pyramid is broken.",
      parameters: []
    },
    PyramidSuccess: {
      name: "Pyramid Success",
      description: "Executes an action when a pyramid is successful.",
      parameters: []
    }
  },
  Raid: {
    Raid: {
      name: "Raid",
      description: "Executes an action when a raid occurs.",
      parameters: []
    },
    RaidCancelled: {
      name: "Raid Cancelled",
      description: "Executes an action when a raid is cancelled.",
      parameters: []
    },
    RaidSend: {
      name: "Raid Send",
      description: "Executes an action when a raid is sent.",
      parameters: []
    },
    RaidStart: {
      name: "Raid Start",
      description: "Executes an action when a raid starts.",
      parameters: []
    }
  },
  SharedChat: {
    SharedChatAnnouncement: {
      name: "Shared Chat Announcement",
      description: "Executes an action when there is a shared chat announcement.",
      parameters: []
    },
    SharedChatCommunitySubGift: {
      name: "Shared Chat Community Sub Gift",
      description: "Executes an action when a shared chat community sub gift occurs.",
      parameters: []
    },
    SharedChatGiftPaidUpgrade: {
      name: "Shared Chat Gift Paid Upgrade",
      description: "Executes an action when a shared chat gift upgrade is paid.",
      parameters: []
    },
    SharedChatMessageDeleted: {
      name: "Shared Chat Message Deleted",
      description: "Executes an action when a shared chat message is deleted.",
      parameters: []
    },
    SharedChatPayItForward: {
      name: "Shared Chat Pay It Forward",
      description: "Executes an action when a shared chat pay it forward occurs.",
      parameters: []
    },
    SharedChatPrimePaidUpgrade: {
      name: "Shared Chat Prime Paid Upgrade",
      description: "Executes an action when a shared chat prime upgrade is paid.",
      parameters: []
    },
    SharedChatRaid: {
      name: "Shared Chat Raid",
      description: "Executes an action when a shared chat raid occurs.",
      parameters: []
    },
    SharedChatResub: {
      name: "Shared Chat Resub",
      description: "Executes an action when a shared chat resubscription occurs.",
      parameters: []
    },
    SharedChatSessionBegin: {
      name: "Shared Chat Session Begin",
      description: "Executes an action when a shared chat session begins.",
      parameters: []
    },
    SharedChatSessionEnd: {
      name: "Shared Chat Session End",
      description: "Executes an action when a shared chat session ends.",
      parameters: []
    },
    SharedChatSessionUpdate: {
      name: "Shared Chat Session Update",
      description: "Executes an action when a shared chat session is updated.",
      parameters: []
    },
    SharedChatSub: {
      name: "Shared Chat Sub",
      description: "Executes an action when a shared chat subscription occurs.",
      parameters: []
    },
    SharedChatSubGift: {
      name: "Shared Chat Sub Gift",
      description: "Executes an action when a shared chat subscription gift occurs.",
      parameters: []
    },
    SharedChatUserBanned: {
      name: "Shared Chat User Banned",
      description: "Executes an action when a shared chat user is banned.",
      parameters: []
    },
    SharedChatUserTimedOut: {
      name: "Shared Chat User Timed Out",
      description: "Executes an action when a shared chat user is timed out.",
      parameters: []
    },
    SharedChatUserUnbanned: {
      name: "Shared Chat User Unbanned",
      description: "Executes an action when a shared chat user is unbanned.",
      parameters: []
    },
    SharedChatUserUntimedOut: {
      name: "Shared Chat User Untimed Out",
      description: "Executes an action when a shared chat user's timeout is removed.",
      parameters: []
    }
  },
  Subscriptions: {
    GiftBomb: {
      name: "Gift Bomb",
      description: "Executes an action when a subscription gift bomb occurs.",
      parameters: []
    },
    GiftPaidUpgrade: {
      name: "Gift Paid Upgrade",
      description: "Executes an action when a gift subscription is upgraded to a paid subscription.",
      parameters: []
    },
    GiftSubscription: {
      name: "Gift Subscription",
      description: "Executes an action when a subscription gift is given.",
      parameters: []
    },
    PayItForward: {
      name: "Pay It Forward",
      description: "Executes an action when a subscriber pays it forward.",
      parameters: []
    },
    PrimePaidUpgrade: {
      name: "Prime Paid Upgrade",
      description: "Executes an action when a Prime subscription is upgraded to a paid subscription.",
      parameters: []
    },
    Resubscription: {
      name: "Resubscription",
      description: "Executes an action when a user resubscribes.",
      parameters: []
    },
    SubCounterRollover: {
      name: "Sub Counter Rollover",
      description: "Executes an action when the subscription counter rolls over.",
      parameters: []
    },
    Subscription: {
      name: "Subscription",
      description: "Executes an action when a user subscribes to the channel.",
      parameters: [
        { name: "amount", type: "text", placeholder: "Amount" },
        { name: "state", type: "dropdown", options: ["Visible", "Hidden"] }
      ]
    }
  }
};