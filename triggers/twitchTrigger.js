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
  }
};