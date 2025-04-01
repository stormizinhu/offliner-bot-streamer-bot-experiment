export const streamerBotTriggers = {
  Uncategorized: {
    StreamerBotStarted: {
      name: "Streamer.bot Started",
      description: "Executa uma ação quando o Streamer.bot é iniciado.",
      parameters: []
    },
    Test: {
      name: "Test",
      description: "Dispara um teste.",
      parameters: []
    },
    TimedActions: {
      name: "Timed Actions",
      description: "Executa ações temporizadas.",
      parameters: []
    }
  },
  Commands: {
    CommandCooldown: {
      name: "Command Cooldown",
      description: "Executa quando um comando entra em cooldown.",
      parameters: []
    },
    CommandTriggered: {
      name: "Command Triggered",
      description: "Dispara quando um comando é executado.",
      parameters: []
    }
  },
  FileIO: {
    FileTailChanged: {
      name: "File Tail Changed",
      description: "Dispara quando um arquivo é alterado.",
      parameters: []
    }
  },
  FileFolderWatcher: {
    Changed: {
      name: "Changed",
      description: "Executa uma ação quando um arquivo/pasta é alterado.",
      parameters: []
    },
    Created: {
      name: "Created",
      description: "Dispara quando um arquivo/pasta é criado.",
      parameters: []
    },
    Deleted: {
      name: "Deleted",
      description: "Dispara quando um arquivo/pasta é deletado.",
      parameters: []
    },
    Renamed: {
      name: "Renamed",
      description: "Executa uma ação quando um arquivo/pasta é renomeado.",
      parameters: []
    }
  },
  GlobalVariables: {
    GlobalVariableUpdated: {
      name: "Global Variable Updated",
      description: "Dispara quando uma variável global é atualizada.",
      parameters: []
    },
    UserGlobalVariableUpdated: {
      name: "User Global Variable Updated",
      description: "Dispara quando uma variável global de usuário é atualizada.",
      parameters: []
    }
  },
  Groups: {
    Added: {
      name: "Added",
      description: "Executa quando algo é adicionado ao grupo.",
      parameters: []
    },
    Cleared: {
      name: "Cleared",
      description: "Executa quando um grupo é limpo.",
      parameters: []
    },
    Removed: {
      name: "Removed",
      description: "Executa quando algo é removido do grupo.",
      parameters: []
    },
    UsersAdded: {
      name: "Users Added",
      description: "Dispara quando usuários são adicionados ao grupo.",
      parameters: []
    },
    UsersRemoved: {
      name: "Users Removed",
      description: "Dispara quando usuários são removidos do grupo.",
      parameters: []
    }
  },
  Inputs: {
    KeyPress: {
      name: "Key Press",
      description: "Dispara ao pressionar uma tecla. (Docs Needed)",
      parameters: []
    },
    MouseClick: {
      name: "Mouse Click",
      description: "Dispara ao clicar com o mouse. (Docs Needed)",
      parameters: []
    }
  },
  MIDI: {
    MIDIMessage: {
      name: "MIDI Message",
      description: "Executa quando uma mensagem MIDI é recebida.",
      parameters: []
    }
  },
  Processes: {
    ProcessStarted: {
      name: "Process Started",
      description: "Dispara quando um processo é iniciado.",
      parameters: []
    },
    ProcessStopped: {
      name: "Process Stopped",
      description: "Dispara quando um processo é parado.",
      parameters: []
    }
  },
  Quotes: {
    QuoteAdded: {
      name: "Quote Added",
      description: "Dispara quando uma nova citação é adicionada.",
      parameters: []
    },
    ShowQuote: {
      name: "Show Quote",
      description: "Executa uma ação para exibir uma citação.",
      parameters: []
    }
  },
  System: {
    ToastActivation: {
      name: "Toast Activation",
      description: "Executa uma ação ao ativar um toast.",
      parameters: []
    }
  },
  VoiceControl: {
    Command: {
      name: "Command",
      description: "Executa comandos por controle de voz.",
      parameters: []
    },
    Dictation: {
      name: "Dictation",
      description: "Executa ações a partir da ditado de voz.",
      parameters: []
    }
  },
  Websocket: {
    Client: {
      name: "Client",
      description: "Executa uma ação para WebSocket Client.",
      parameters: []
    },
    CustomServer: {
      name: "Custom Server",
      description: "Executa uma ação para um servidor WebSocket customizado.",
      parameters: []
    }
  }
};