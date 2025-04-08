export const youtubeTriggers = {
  Broadcast: {
    BroadcastAdded: {
      name: "Broadcast Added",
      description: "Executes an action when a broadcast is added.",
      parameters: []
    },
    BroadcastEnded: {
      name: "Broadcast Ended",
      description: "Executes an action when a broadcast ends.",
      parameters: []
    },
    BroadcastMonitoringEnded: {
      name: "Broadcast Monitoring Ended",
      description: "Executes an action when broadcast monitoring ends.",
      parameters: []
    },
    BroadcastMonitoringStarted: {
      name: "Broadcast Monitoring Started",
      description: "Executes an action when broadcast monitoring starts.",
      parameters: []
    },
    BroadcastRemoved: {
      name: "Broadcast Removed",
      description: "Executes an action when a broadcast is removed.",
      parameters: []
    },
    BroadcastStarted: {
      name: "Broadcast Started",
      description: "Executes an action when a broadcast starts.",
      parameters: []
    },
    BroadcastUpdated: {
      name: "Broadcast Updated",
      description: "Executes an action when a broadcast is updated.",
      parameters: []
    },
    StatisticsUpdated: {
      name: "Statistics Updated",
      description: "Executes an action when broadcast statistics are updated.",
      parameters: []
    }
  },
  Chat: {
    FirstWords: {
      name: "First Words",
      description: "Executes an action when the first words are sent in the chat.",
      parameters: []
    },
    Message: {
      name: "Message",
      description: "Executes an action when a message is sent in the chat.",
      parameters: []
    },
    SuperChat: {
      name: "Super Chat",
      description: "Executes an action when a Super Chat is sent.",
      parameters: []
    },
    SuperSticker: {
      name: "Super Sticker",
      description: "Executes an action when a Super Sticker is sent.",
      parameters: []
    }
  },
  General: {
    NewSponsor: {
      name: "New Sponsor",
      description: "Executes an action when a new sponsor joins.",
      parameters: []
    },
    NewSubscriber: {
      name: "New Subscriber",
      description: "Executes an action when a new subscriber joins.",
      parameters: []
    },
    PresentViewers: {
      name: "Present Viewers",
      description: "Executes an action when the current viewers are updated.",
      parameters: []
    },
    SponsorOnlyEnded: {
      name: "Sponsor Only Ended",
      description: "Executes an action when sponsor-only mode ends.",
      parameters: []
    },
    SponsorOnlyStarted: {
      name: "Sponsor Only Started",
      description: "Executes an action when sponsor-only mode starts.",
      parameters: []
    },
    UserBanned: {
      name: "User Banned",
      description: "Executes an action when a user is banned.",
      parameters: []
    }
  },
  Membership: {
    GiftMembershipReceived: {
      name: "Gift Membership Received",
      description: "Executes an action when a gift membership is received.",
      parameters: []
    },
    MemberMilestone: {
      name: "Member Milestone",
      description: "Executes an action when a membership milestone is reached.",
      parameters: []
    },
    MembershipGift: {
      name: "Membership Gift",
      description: "Executes an action when a gift membership is sent.",
      parameters: []
    }
  },
  Polls: {
    PollClosed: {
      name: "Poll Closed",
      description: "Executes an action when a poll is closed.",
      parameters: []
    },
    PollStarted: {
      name: "Poll Started",
      description: "Executes an action when a poll starts.",
      parameters: []
    },
    PollUpdated: {
      name: "Poll Updated",
      description: "Executes an action when a poll is updated.",
      parameters: []
    }
  }
};