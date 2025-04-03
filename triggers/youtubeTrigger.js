export const youtubeTriggers = {
  Broadcast: {
    BroadcastAdded: {
      name: "Broadcast Added",
      description: "Executa uma ação quando uma transmissão é adicionada.",
      parameters: []
    },
    BroadcastEnded: {
      name: "Broadcast Ended",
      description: "Executa uma ação quando uma transmissão termina.",
      parameters: []
    },
    BroadcastMonitoringEnded: {
      name: "Broadcast Monitoring Ended",
      description: "Executa uma ação quando o monitoramento de transmissão termina.",
      parameters: []
    },
    BroadcastMonitoringStarted: {
      name: "Broadcast Monitoring Started",
      description: "Executa uma ação quando o monitoramento de transmissão começa.",
      parameters: []
    },
    BroadcastRemoved: {
      name: "Broadcast Removed",
      description: "Executa uma ação quando uma transmissão é removida.",
      parameters: []
    },
    BroadcastStarted: {
      name: "Broadcast Started",
      description: "Executa uma ação quando uma transmissão começa.",
      parameters: []
    },
    BroadcastUpdated: {
      name: "Broadcast Updated",
      description: "Executa uma ação quando uma transmissão é atualizada.",
      parameters: []
    },
    StatisticsUpdated: {
      name: "Statistics Updated",
      description: "Executa uma ação quando as estatísticas de transmissão são atualizadas.",
      parameters: []
    }
  },
  Chat: {
    FirstWords: {
      name: "First Words",
      description: "Executa uma ação quando as primeiras palavras são enviadas no chat.",
      parameters: []
    },
    Message: {
      name: "Message",
      description: "Executa uma ação quando uma mensagem é enviada no chat.",
      parameters: []
    },
    SuperChat: {
      name: "Super Chat",
      description: "Executa uma ação quando um Super Chat é enviado.",
      parameters: []
    },
    SuperSticker: {
      name: "Super Sticker",
      description: "Executa uma ação quando um Super Sticker é enviado.",
      parameters: []
    }
  },
  General: {
    NewSponsor: {
      name: "New Sponsor",
      description: "Executa uma ação quando há um novo patrocinador.",
      parameters: []
    },
    NewSubscriber: {
      name: "New Subscriber",
      description: "Executa uma ação quando há um novo inscrito.",
      parameters: []
    },
    PresentViewers: {
      name: "Present Viewers",
      description: "Executa uma ação quando os espectadores atuais são atualizados.",
      parameters: []
    },
    SponsorOnlyEnded: {
      name: "Sponsor Only Ended",
      description: "Executa uma ação quando o modo só para patrocinadores termina.",
      parameters: []
    },
    SponsorOnlyStarted: {
      name: "Sponsor Only Started",
      description: "Executa uma ação quando o modo só para patrocinadores começa.",
      parameters: []
    },
    UserBanned: {
      name: "User Banned",
      description: "Executa uma ação quando um usuário é banido.",
      parameters: []
    }
  },
  Membership: {
    GiftMembershipReceived: {
      name: "Gift Membership Received",
      description: "Executa uma ação quando uma assinatura presente é recebida.",
      parameters: []
    },
    MemberMilestone: {
      name: "Member Milestone",
      description: "Executa uma ação quando um marco de assinatura é alcançado.",
      parameters: []
    },
    MembershipGift: {
      name: "Membership Gift",
      description: "Executa uma ação quando uma assinatura presente é enviada.",
      parameters: []
    }
  },
  Polls: {
    PollClosed: {
      name: "Poll Closed",
      description: "Executa uma ação quando uma enquete é encerrada.",
      parameters: []
    },
    PollStarted: {
      name: "Poll Started",
      description: "Executa uma ação quando uma enquete é iniciada.",
      parameters: []
    },
    PollUpdated: {
      name: "Poll Updated",
      description: "Executa uma ação quando uma enquete é atualizada.",
      parameters: []
    }
  }
};