export const streamerBotTriggers = {
  Uncategorized: {
    StreamerBotStarted: {
      name: "Streamer.bot Started",
      description: "Executes an action when Streamer.bot starts.",
      parameters: []
    },
    Test: {
      name: "Test",
      description: "Triggers a test.",
      parameters: []
    },
    TimedActions: {
      name: "Timed Actions",
      description: "Executes timed actions.",
      parameters: []
    }
  },
  Commands: {
    CommandCooldown: {
      name: "Command Cooldown",
      description: "Executes when a command enters cooldown.",
      parameters: []
    },
    CommandTriggered: {
      name: "Command Triggered",
      description: "Triggers when a command is executed.",
      parameters: []
    }
  },
  FileIO: {
    FileTailChanged: {
      name: "File Tail Changed",
      description: "Triggers when a file is modified.",
      parameters: []
    }
  },
  FileFolderWatcher: {
    Changed: {
      name: "Changed",
      description: "Executes an action when a file/folder is changed.",
      parameters: []
    },
    Created: {
      name: "Created",
      description: "Triggers when a file/folder is created.",
      parameters: []
    },
    Deleted: {
      name: "Deleted",
      description: "Triggers when a file/folder is deleted.",
      parameters: []
    },
    Renamed: {
      name: "Renamed",
      description: "Executes an action when a file/folder is renamed.",
      parameters: []
    }
  },
  GlobalVariables: {
    GlobalVariableUpdated: {
      name: "Global Variable Updated",
      description: "Triggers when a global variable is updated.",
      parameters: []
    },
    UserGlobalVariableUpdated: {
      name: "User Global Variable Updated",
      description: "Triggers when a user global variable is updated.",
      parameters: []
    }
  },
  Groups: {
    Added: {
      name: "Added",
      description: "Executes when something is added to the group.",
      parameters: []
    },
    Cleared: {
      name: "Cleared",
      description: "Executes when a group is cleared.",
      parameters: []
    },
    Removed: {
      name: "Removed",
      description: "Executes when something is removed from the group.",
      parameters: []
    },
    UsersAdded: {
      name: "Users Added",
      description: "Triggers when users are added to the group.",
      parameters: []
    },
    UsersRemoved: {
      name: "Users Removed",
      description: "Triggers when users are removed from the group.",
      parameters: []
    }
  },
  Inputs: {
    KeyPress: {
      name: "Key Press",
      description: "Triggers when a key is pressed. (Docs Needed)",
      parameters: []
    },
    MouseClick: {
      name: "Mouse Click",
      description: "Triggers when the mouse is clicked. (Docs Needed)",
      parameters: []
    }
  },
  MIDI: {
    MIDIMessage: {
      name: "MIDI Message",
      description: "Executes when a MIDI message is received.",
      parameters: []
    }
  },
  Processes: {
    ProcessStarted: {
      name: "Process Started",
      description: "Triggers when a process starts.",
      parameters: []
    },
    ProcessStopped: {
      name: "Process Stopped",
      description: "Triggers when a process stops.",
      parameters: []
    }
  },
  Quotes: {
    QuoteAdded: {
      name: "Quote Added",
      description: "Triggers when a new quote is added.",
      parameters: []
    },
    ShowQuote: {
      name: "Show Quote",
      description: "Executes an action to display a quote.",
      parameters: []
    }
  },
  System: {
    ToastActivation: {
      name: "Toast Activation",
      description: "Executes an action upon toast activation.",
      parameters: []
    }
  },
  VoiceControl: {
    Command: {
      name: "Command",
      description: "Executes commands via voice control.",
      parameters: []
    },
    Dictation: {
      name: "Dictation",
      description: "Executes actions based on voice dictation.",
      parameters: []
    }
  },
  Websocket: {
    Client: {
      name: "Client",
      description: "Executes an action for the WebSocket client.",
      parameters: []
    },
    CustomServer: {
      name: "Custom Server",
      description: "Executes an action for a custom WebSocket server.",
      parameters: []
    }
  }
};