export const twitchActions = {
    Ads: {
        GetAdSchedule: {
            name: "Get Ad Schedule",
            description: "Obtém a programação de anúncios do canal.",
            parameters: []
        },
        GetPreRollFreeTime: {
            name: "Get Pre-roll Free Time",
            description: "Obtém o tempo livre de anúncios pré-rolagem.",
            parameters: []
        },
        RunCommercial: {
            name: "Run Commercial",
            description: "Roda um comercial no canal.",
            parameters: [
                { name: "duration", type: "text", placeholder: "Duração (em segundos)" }
            ]
        },
        SnoozeAd: {
            name: "Snooze Ad",
            description: "Adia a exibição de um anúncio no canal.",
            parameters: []
        }
    },
    Channel: {
        AddViewerCount: {
            name: "Add Viewer Count",
            description: "Adiciona um número de visualizações ao contador do canal.",
            parameters: []
        },
        CreateClip: {
            name: "Create Clip",
            description: "Cria um clipe para o canal.",
            parameters: []
        },
        CreateStreamMarker: {
            name: "Create Stream Marker",
            description: "Cria um marcador durante a transmissão.",
            parameters: []
        },
        SetChannelBrandedContent: {
            name: "Set Channel Branded Content",
            description: "Define o conteúdo de marca do canal.",
            parameters: []
        },
        SetChannelGame: {
            name: "Set Channel Game",
            description: "Define o jogo que está sendo transmitido.",
            parameters: [
                { name: "gameId", type: "text", placeholder: "ID do jogo" }
            ]
        },
        SetChannelTitle: {
            name: "Set Channel Title",
            description: "Define o título do canal.",
            parameters: [
                { name: "title", type: "text", placeholder: "Título do canal" }
            ]
        }
    },
    Charity: {
        GetLatestCharityCampaign: {
            name: "Get Latest Charity Campaign",
            description: "Obtém informações sobre a campanha de caridade mais recente.",
            parameters: []
        }
    },
    Chat: {
        ClearChatMessages: {
            name: "Clear Chat Messages",
            description: "Limpa as mensagens do chat.",
            parameters: []
        },
        ReplyToMessage: {
            name: "Reply To Message",
            description: "Responde a uma mensagem no chat.",
            parameters: [
                { name: "messageId", type: "text", placeholder: "ID da mensagem" },
                { name: "reply", type: "text", placeholder: "Mensagem de resposta" }
            ]
        },
        SendAnnouncementToChannel: {
            name: "Send Announcement to Channel",
            description: "Envia um anúncio para o chat do canal.",
            parameters: [
                { name: "message", type: "text", placeholder: "Digite a mensagem" }
            ]
        },
        SendMessageToChannel: {
            name: "Send Message to Channel",
            description: "Envia uma mensagem ao chat do canal.",
            parameters: [
                { name: "message", type: "text", placeholder: "Digite a mensagem" }
            ]
        }
    },
    Followers: {
        GetFollowAgeInfoForTarget: {
            name: "Get Follow Age Info for Target",
            description: "Obtém a duração em que o usuário segue o canal.",
            parameters: [
                { name: "userId", type: "text", placeholder: "ID do usuário" }
            ]
        },
        GetFollowerCount: {
            name: "Get Follower Count",
            description: "Obtém o número total de seguidores do canal.",
            parameters: []
        },
        GetLatestFollower: {
            name: "Get Latest Follower",
            description: "Obtém informações sobre o seguidor mais recente.",
            parameters: []
        }
    },
    GuestStar: {
        AssignGuestStarSlot: {
            name: "Assign Guest Star Slot",
            description: "Associa um slot ao Guest Star.",
            parameters: []
        },
        CreateGuestStarSession: {
            name: "Create Guest Star Session",
            description: "Cria uma sessão de Guest Star.",
            parameters: []
        },
        DeleteGuestStarInvite: {
            name: "Delete Guest Star Invite",
            description: "Exclui um convite do Guest Star.",
            parameters: []
        },
        DeleteGuestStarSlot: {
            name: "Delete Guest Star Slot",
            description: "Exclui um slot do Guest Star.",
            parameters: []
        },
        EndGuestStarSession: {
            name: "End Guest Star Session",
            description: "Encerra uma sessão do Guest Star.",
            parameters: []
        },
        GetChannelGuestStarSettings: {
            name: "Get Channel Guest Star Settings",
            description: "Obtém as configurações de Guest Star do canal.",
            parameters: []
        },
        GetGuestStarInvites: {
            name: "Get Guest Star Invites",
            description: "Obtém os convites de Guest Star.",
            parameters: []
        },
        GetGuestStarSession: {
            name: "Get Guest Star Session",
            description: "Obtém informações sobre a sessão de Guest Star.",
            parameters: []
        },
        SendGuestStarInvite: {
            name: "Send Guest Star Invite",
            description: "Envia um convite de Guest Star.",
            parameters: []
        },
        UpdateChannelGuestStarSettings: {
            name: "Update Channel Guest Star Settings",
            description: "Atualiza as configurações de Guest Star do canal.",
            parameters: []
        },
        UpdateGuestStarSlot: {
            name: "Update Guest Star Slot",
            description: "Atualiza um slot do Guest Star.",
            parameters: []
        },
        UpdateGuestStarSlotSettings: {
            name: "Update Guest Star Slot Settings",
            description: "Atualiza as configurações de slot do Guest Star.",
            parameters: []
        },
    },
    Moderation: {
        AddModerator: {
            name: "Add Moderator",
            description: "Adiciona um moderador ao canal.",
            parameters: [
                { name: "userId", type: "text", placeholder: "ID do usuário" }
            ]
        },
        AddVIP: {
            name: "Add VIP",
            description: "Adiciona um usuário como VIP no canal.",
            parameters: [
                { name: "userId", type: "text", placeholder: "ID do usuário" }
            ]
        },
        BanUser: {
            name: "Ban User",
            description: "Bane um usuário do canal.",
            parameters: [
                { name: "userId", type: "text", placeholder: "ID do usuário" }
            ]
        },
        RemoveModerator: {
            name: "Remove Moderator",
            description: "Remove um moderador do canal.",
            parameters: [
                { name: "userId", type: "text", placeholder: "ID do usuário" }
            ]
        },
        RemoveVIP: {
            name: "Remove VIP",
            description: "Remove um usuário VIP do canal.",
            parameters: [
                { name: "userId", type: "text", placeholder: "ID do usuário" }
            ]
        },
        SendShoutout: {
            name: "Send Shoutout",
            description: "Envia um shoutout para um usuário.",
            parameters: [
                { name: "userId", type: "text", placeholder: "ID do usuário" }
            ]
        },
        TimeoutUser: {
            name: "Timeout User",
            description: "Coloca um usuário em timeout no canal.",
            parameters: [
                { name: "userId", type: "text", placeholder: "ID do usuário" },
                { name: "duration", type: "text", placeholder: "Duração (em segundos)" }
            ]
        },
        UnbanUser: {
            name: "Unban User",
            description: "Desbane um usuário do canal.",
            parameters: [
                { name: "userId", type: "text", placeholder: "ID do usuário" }
            ]
        },
        UnTimeoutUser: {
            name: "UnTimeout User",
            description: "Remove o timeout de um usuário no canal.",
            parameters: [
                { name: "userId", type: "text", placeholder: "ID do usuário" }
            ]
        },
        WarnUser: {
            name: "Warn User",
            description: "Envia um aviso para um usuário no canal.",
            parameters: [
                { name: "userId", type: "text", placeholder: "ID do usuário" }
            ]
        }
    },
    Polls: {
        ArchiveActivePoll: {
            name: "Archive Active Poll",
            description: "Arquiva a enquete ativa no canal.",
            parameters: []
        },
        CreatePoll: {
            name: "Create Poll",
            description: "Cria uma nova enquete no canal.",
            parameters: [
                { name: "title", type: "text", placeholder: "Título da enquete" },
                { name: "options", type: "text", placeholder: "Opções da enquete separadas por vírgula" },
                { name: "duration", type: "text", placeholder: "Duração (em segundos)" }
            ]
        },
        GetActivePoll: {
            name: "Get Active Poll",
            description: "Obtém informações sobre a enquete ativa.",
            parameters: []
        },
        TerminateActivePoll: {
            name: "Terminate Active Poll",
            description: "Encerra a enquete ativa no canal.",
            parameters: []
        }
    },
    Predictions: {
        CancelActivePrediction: {
            name: "Cancel Active Prediction",
            description: "Cancela a previsão ativa no canal.",
            parameters: []
        },
        CreatePrediction: {
            name: "Create Prediction",
            description: "Cria uma nova previsão no canal.",
            parameters: [
                { name: "title", type: "text", placeholder: "Título da previsão" },
                { name: "outcomes", type: "text", placeholder: "Resultados separados por vírgula" },
                { name: "duration", type: "text", placeholder: "Duração (em segundos)" }
            ]
        },
        GetActivePrediction: {
            name: "Get Active Prediction",
            description: "Obtém informações sobre a previsão ativa.",
            parameters: []
        },
        LockActivePrediction: {
            name: "Lock Active Prediction",
            description: "Trava a previsão ativa no canal.",
            parameters: []
        },
        ResolveLastPrediction: {
            name: "Resolve Last Prediction",
            description: "Resolve a última previsão no canal.",
            parameters: [
                { name: "outcomeId", type: "text", placeholder: "ID do resultado vencedor" }
            ]
        },
        ResolveLastPredictionByTitle: {
            name: "Resolve Last Prediction By Title",
            description: "Resolve a última previsão por título no canal.",
            parameters: [
                { name: "title", type: "text", placeholder: "Título da previsão" }
            ]
        }
    },
    Raid: {
        CancelRaid: {
            name: "Cancel Raid",
            description: "Cancela um raid ativo.",
            parameters: []
        },
        StartRaid: {
            name: "Start Raid",
            description: "Inicia um raid para outro canal.",
            parameters: [
                { name: "channelName", type: "text", placeholder: "Nome do canal de destino" }
            ]
        }
    },
    Rewards: {
        ConfigureRewards: {
            name: "Configure Rewards",
            description: "Configura as recompensas do canal.",
            parameters: [
                { name: "rewardName", type: "text", placeholder: "Nome da recompensa" },
                { name: "settings", type: "text", placeholder: "Configurações da recompensa" }
            ]
        },
        GetRewardInfo: {
            name: "Get Reward Info",
            description: "Obtém informações sobre recompensas.",
            parameters: []
        },
        ResetRewardCounter: {
            name: "Reset Reward Counter",
            description: "Reseta o contador de uma recompensa.",
            parameters: []
        },
        ResetRewardUserCounters: {
            name: "Reset Reward User Counters",
            description: "Reseta os contadores dos usuários para uma recompensa.",
            parameters: []
        },
        SetBackgroundColor: {
            name: "Set Background Color",
            description: "Define a cor de fundo da recompensa.",
            parameters: [
                { name: "color", type: "text", placeholder: "Cor hexadecimal" }
            ]
        },
        SetCost: {
            name: "Set Cost",
            description: "Define o custo da recompensa.",
            parameters: [
                { name: "cost", type: "text", placeholder: "Custo da recompensa" }
            ]
        },
        SetEnabledState: {
            name: "Set Enabled State",
            description: "Ativa ou desativa a recompensa.",
            parameters: [
                { name: "state", type: "dropdown", options: ["Ativado", "Desativado"] }
            ]
        },
        SetGlobalCooldown: {
            name: "Set Global Cooldown",
            description: "Define o tempo de espera global para a recompensa.",
            parameters: [
                { name: "cooldown", type: "text", placeholder: "Tempo em segundos" }
            ]
        },
        SetGroupEnabledState: {
            name: "Set Group Enabled State",
            description: "Ativa ou desativa um grupo de recompensas.",
            parameters: [
                { name: "groupId", type: "text", placeholder: "ID do grupo" },
                { name: "state", type: "dropdown", options: ["Ativado", "Desativado"] }
            ]
        },
        SetGroupPausedState: {
            name: "Set Group Paused State",
            description: "Pausa ou retoma um grupo de recompensas.",
            parameters: [
                { name: "groupId", type: "text", placeholder: "ID do grupo" },
                { name: "state", type: "dropdown", options: ["Pausado", "Ativado"] }
            ]
        },
        SetMaxPerStream: {
            name: "Set Max Per Stream",
            description: "Define o máximo de vezes por stream para a recompensa.",
            parameters: [
                { name: "maxCount", type: "text", placeholder: "Máximo por stream" }
            ]
        },
        SetPausedState: {
            name: "Set Paused State",
            description: "Ativa ou pausa o estado de uma recompensa.",
            parameters: [
                { name: "state", type: "dropdown", options: ["Pausado", "Ativado"] }
            ]
        },
        SetPrompt: {
            name: "Set Prompt",
            description: "Define o prompt associado à recompensa.",
            parameters: [
                { name: "prompt", type: "text", placeholder: "Texto do prompt" }
            ]
        },
        SetTitle: {
            name: "Set Title",
            description: "Define o título de uma recompensa.",
            parameters: [
                { name: "title", type: "text", placeholder: "Título da recompensa" }
            ]
        },
        Update: {
            name: "Update",
            description: "Atualiza as configurações de uma recompensa.",
            parameters: [
                { name: "rewardName", type: "text", placeholder: "Nome da recompensa" },
                { name: "settings", type: "text", placeholder: "Novas configurações da recompensa" }
            ]
        },
        UpdateRedemptionStatus: {
            name: "Update Redemption Status",
            description: "Atualiza o status de resgate de uma recompensa.",
            parameters: [
                { name: "status", type: "text", placeholder: "Novo status (ex.: 'Concluído')" },
                { name: "redemptionId", type: "text", placeholder: "ID do resgate" }
            ]
        }
    },
    Subscribers: {
        GetLatestSubscriber: {
            name: "Get Latest Subscriber",
            description: "Obtém informações sobre o último inscrito no canal.",
            parameters: []
        },
        GetSubscriberCount: {
            name: "Get Subscriber Count",
            description: "Obtém o número total de inscritos do canal.",
            parameters: []
        }
    },
    Tags: {
        AddChannelTag: {
            name: "Add Channel Tag",
            description: "Adiciona uma tag ao canal.",
            parameters: [
                { name: "tag", type: "text", placeholder: "Nome da tag" }
            ]
        },
        ClearChannelTags: {
            name: "Clear Channel Tags",
            description: "Remove todas as tags do canal.",
            parameters: []
        },
        RemoveChannelTag: {
            name: "Remove Channel Tag",
            description: "Remove uma tag específica do canal.",
            parameters: [
                { name: "tag", type: "text", placeholder: "Nome da tag" }
            ]
        },
        SetChannelTags: {
            name: "Set Channel Tags",
            description: "Define as tags do canal.",
            parameters: [
                { name: "tags", type: "text", placeholder: "Lista de tags separadas por vírgula" }
            ]
        },
    },
    User: {
        AddBroadcasterInformation: {
            name: "Add Broadcaster Information",
            description: "Adiciona informações sobre o broadcaster.",
            parameters: [
                { name: "info", type: "text", placeholder: "Informações do broadcaster" }
            ]
        },
        AddPresentUser: {
            name: "Add Present User",
            description: "Adiciona um usuário presente ao canal.",
            parameters: [
                { name: "userId", type: "text", placeholder: "ID do usuário" }
            ]
        },
        AddRandomUsers: {
            name: "Add Random Users",
            description: "Adiciona usuários aleatórios ao canal.",
            parameters: [
                { name: "count", type: "text", placeholder: "Número de usuários" }
            ]
        },
        GetTeamInfoForTarget: {
            name: "Get Team Info for Target",
            description: "Obtém informações da equipe do alvo.",
            parameters: [
                { name: "teamId", type: "text", placeholder: "ID da equipe" }
            ]
        },
        GetUserInfoForTarget: {
            name: "Get User Info for Target",
            description: "Obtém informações do usuário alvo.",
            parameters: [
                { name: "userId", type: "text", placeholder: "ID do usuário" }
            ]
        },
        UserGroups: {
            AddUserToGroup: {
                name: "Add User To Group",
                description: "Adiciona um usuário a um grupo.",
                parameters: [
                    { name: "groupId", type: "text", placeholder: "ID do grupo" },
                    { name: "userId", type: "text", placeholder: "ID do usuário" }
                ]
            },
            RemoveUserFromGroup: {
                name: "Remove User From Group",
                description: "Remove um usuário de um grupo.",
                parameters: [
                    { name: "groupId", type: "text", placeholder: "ID do grupo" },
                    { name: "userId", type: "text", placeholder: "ID do usuário" }
                ]
            },
            UserInGroup: {
                name: "User In Group",
                description: "Verifica se um usuário está em um grupo.",
                parameters: [
                    { name: "groupId", type: "text", placeholder: "ID do grupo" },
                    { name: "userId", type: "text", placeholder: "ID do usuário" }
                ]
            }
        }
    }
};