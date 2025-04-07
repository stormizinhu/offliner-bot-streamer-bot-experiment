export const streamerBotActions = {
    Uncategorized: {
        Delay: {
            name: "Delay",
            description: "Adds a delay before executing an action.",
            parameters: [{ name: "duration", type: "text", placeholder: "Duration in milliseconds" }]
        }
    },
    ActionQueues: {
        ClearActionQueue: {
            name: "Clear Action Queue",
            description: "Clears the action queue.",
            parameters: [{ name: "queueName", type: "text", placeholder: "Queue name" }]
        },
        SetActionQueueBlockingState: {
            name: "Set Action Queue Blocking State",
            description: "Sets the blocking state of the action queue.",
            parameters: [
                { name: "queueName", type: "text", placeholder: "Queue name" },
                { name: "state", type: "dropdown", options: ["Blocked", "Unblocked"] }
            ]
        },
        SetActionQueuePauseState: {
            name: "Set Action Queue Pause State",
            description: "Sets the pause state of the action queue.",
            parameters: [
                { name: "queueName", type: "text", placeholder: "Queue name" },
                { name: "state", type: "dropdown", options: ["Paused", "Active"] }
            ]
        }
    },
    Actions: {
        GetActionGroupState: {
            name: "Get Action Group State",
            description: "Obtains the state of an action group.",
            parameters: [{ name: "groupId", type: "text", placeholder: "Group ID" }]
        },
        GetActionState: {
            name: "Get Action State",
            description: "Obtains the state of a specific action.",
            parameters: [{ name: "actionId", type: "text", placeholder: "Action ID" }]
        },
        RunAction: {
            name: "Run Action",
            description: "Executes a specific action.",
            parameters: [{ name: "actionName", type: "text", placeholder: "Action name" }]
        },
        SetActionGroupState: {
            name: "Set Action Group State",
            description: "Sets the state of an action group.",
            parameters: [
                { name: "groupId", type: "text", placeholder: "Group ID" },
                { name: "state", type: "dropdown", options: ["Enabled", "Disabled"] }
            ]
        },
        SetActionState: {
            name: "Set Action State",
            description: "Sets the state of a specific action.",
            parameters: [
                { name: "actionId", type: "text", placeholder: "Action ID" },
                { name: "state", type: "dropdown", options: ["Enabled", "Disabled"] }
            ]
        },
        SetSubActionState: {
            name: "Set Sub-Action State",
            description: "Sets the state of a sub-action.",
            parameters: [
                { name: "subActionId", type: "text", placeholder: "Sub-action ID" },
                { name: "state", type: "dropdown", options: ["Enabled", "Disabled"] }
            ]
        }
    },
    Arguments: {
        SetArgument: {
            name: "Set Argument",
            description: "Sets the value of an argument.",
            parameters: [
                { name: "argumentName", type: "text", placeholder: "Argument name" },
                { name: "value", type: "text", placeholder: "Argument value" }
            ]
        }
    },
    CSharp: {
        ExecuteCSharpCode: {
            name: "Execute C# Code",
            description: "Executes C# code directly.",
            parameters: [{ name: "code", type: "text", placeholder: "C# code to execute" }]
        },
        ExecuteCSharpMethod: {
            name: "Execute C# Method",
            description: "Executes a C# method.",
            parameters: [
                { name: "methodName", type: "text", placeholder: "Method name" },
                { name: "parameters", type: "text", placeholder: "Method parameters" }
            ]
        }
    },
    Commands: {
        GetCommandGroupState: {
            name: "Get Command Group State",
            description: "Obtains the state of a command group.",
            parameters: [{ name: "groupId", type: "text", placeholder: "Group ID" }]
        },
        GetCommandState: {
            name: "Get Command State",
            description: "Obtains the state of a specific command.",
            parameters: [{ name: "commandId", type: "text", placeholder: "Command ID" }]
        },
        GetCommands: {
            name: "Get Commands",
            description: "Obtains a list of available commands.",
            parameters: []
        },
        SetCommandGroupState: {
            name: "Set Command Group State",
            description: "Sets the state of a command group.",
            parameters: [
                { name: "groupId", type: "text", placeholder: "Group ID" },
                { name: "state", type: "dropdown", options: ["Enabled", "Disabled"] }
            ]
        },
        SetCommandState: {
            name: "Set Command State",
            description: "Sets the state of a specific command.",
            parameters: [
                { name: "commandId", type: "text", placeholder: "Command ID" },
                { name: "state", type: "dropdown", options: ["Enabled", "Disabled"] }
            ]
        }
    },
    FileIO: {
        ReadLinesFromFile: {
            name: "Read Lines From File",
            description: "Reads all lines from a specified file.",
            parameters: [{ name: "filePath", type: "text", placeholder: "File path" }]
        },
        ReadRandomLineFromFile: {
            name: "Read Random Line From File",
            description: "Reads a random line from a specified file.",
            parameters: [{ name: "filePath", type: "text", placeholder: "File path" }]
        },
        ReadSpecificLineFromFile: {
            name: "Read Specific Line From File",
            description: "Reads a specific line from a specified file.",
            parameters: [
                { name: "filePath", type: "text", placeholder: "File path" },
                { name: "linetext", type: "text", placeholder: "Line number" }
            ]
        },
        WriteToFile: {
            name: "Write To File",
            description: "Writes information to a file.",
            parameters: [
                { name: "filePath", type: "text", placeholder: "File path" },
                { name: "content", type: "text", placeholder: "Content to write" }
            ]
        }
    },
    FileTail: {
        SetFileTailState: {
            name: "Set File Tail State",
            description: "Activates or deactivates file monitoring.",
            parameters: [
                { name: "filePath", type: "text", placeholder: "File path" },
                { name: "state", type: "dropdown", options: ["Enabled", "Disabled"] }
            ]
        }
    },
    Globals: {
        ClearNonPersistedGlobals: {
            name: "Clear Non-Persisted Globals",
            description: "Clears all non-persisted global variables.",
            parameters: []
        },
        ClearNonPersistedUserGlobals: {
            name: "Clear Non-Persisted User Globals",
            description: "Clears all non-persisted user global variables.",
            parameters: []
        },
        GlobalGet: {
            name: "Global (Get)",
            description: "Obtains the value of a global variable.",
            parameters: [{ name: "variableName", type: "text", placeholder: "Variable name" }]
        },
        GlobalSet: {
            name: "Global (Set)",
            description: "Sets the value of a global variable.",
            parameters: [
                { name: "variableName", type: "text", placeholder: "Variable name" },
                { name: "value", type: "text", placeholder: "Variable value" }
            ]
        }
    },
    Logic: {
        Break: {
            name: "Break",
            description: "Interrupts the execution of a conditional or repetitive logic.",
            parameters: []
        },
        GetInput: {
            name: "Get Input",
            description: "Obtains a user input value.",
            parameters: [{ name: "prompt", type: "text", placeholder: "Prompt text" }]
        },
        GetRandomtext: {
            name: "Get Random text",
            description: "Generates a random number within a range.",
            parameters: [
                { name: "min", type: "text", placeholder: "Minimum value" },
                { name: "max", type: "text", placeholder: "Maximum value" }
            ]
        },
        IfElse: {
            name: "If/Else",
            description: "Executes actions based on a logical condition.",
            parameters: [{ name: "condition", type: "text", placeholder: "Logical condition" }]
        },
        Switch: {
            name: "Switch",
            description: "Executes different actions based on distinct values.",
            parameters: [{ name: "value", type: "text", placeholder: "Value to evaluate" }]
        }
    },
    MIDI: {
        ControlChange: {
            name: "Control Change",
            description: "Sends a MIDI control change command.",
            parameters: [
                { name: "channel", type: "text", placeholder: "MIDI channel" },
                { name: "control", type: "text", placeholder: "MIDI control" },
                { name: "value", type: "text", placeholder: "MIDI value" }
            ]
        },
        GenericEvent: {
            name: "Generic Event",
            description: "Generates a generic MIDI event.",
            parameters: []
        },
        NoteOn: {
            name: "Note On",
            description: "Activates a MIDI note.",
            parameters: [
                { name: "channel", type: "text", placeholder: "MIDI channel" },
                { name: "note", type: "text", placeholder: "MIDI note" },
                { name: "velocity", type: "text", placeholder: "MIDI velocity" }
            ]
        }
    },
    Misc: {
        Comment: {
            name: "Comment",
            description: "Adds a comment to the action flow.",
            parameters: [{ name: "text", type: "text", placeholder: "Comment text" }]
        },
        Log: {
            name: "Log",
            description: "Adds an entry to the log.",
            parameters: [{ name: "message", type: "text", placeholder: "Log message" }]
        }
    },
    Network: {
        FetchURL: {
            name: "Fetch URL",
            description: "Makes a request to a URL.",
            parameters: [
                { name: "url", type: "text", placeholder: "URL to fetch" },
                { name: "method", type: "dropdown", options: ["GET", "POST"] },
                { name: "body", type: "text", placeholder: "Request body (optional)" }
            ]
        },
        UDPBroadcast: {
            name: "UDP Broadcast",
            description: "Sends a message via UDP.",
            parameters: [
                { name: "ip", type: "text", placeholder: "IP address" },
                { name: "port", type: "text", placeholder: "Port" },
                { name: "message", type: "text", placeholder: "Message to send" }
            ]
        }
    },
    Quotes: {
        AddQuote: {
            name: "Add Quote",
            description: "Adds a quote to the quote list.",
            parameters: [{ name: "quote", type: "text", placeholder: "Quote text" }]
        },
        DeleteQuote: {
            name: "Delete Quote",
            description: "Removes a quote from the list.",
            parameters: [{ name: "quoteId", type: "text", placeholder: "Quote ID" }]
        },
        GetQuote: {
            name: "Get Quote",
            description: "Obtains a specific quote.",
            parameters: [{ name: "quoteId", type: "text", placeholder: "Quote ID" }]
        },
        GetQuoteCount: {
            name: "Get Quote Count",
            description: "Obtains the total number of available quotes.",
            parameters: []
        }
    },
    Signals: {
        SendLocalSignal: {
            name: "Send Local Signal",
            description: "Sends a local signal within StreamerBot.",
            parameters: [{ name: "signalName", type: "text", placeholder: "Signal name" }]
        },
        WaitForLocalSignal: {
            name: "Wait For Local Signal",
            description: "Waits for a local signal to be received.",
            parameters: [
                { name: "signalName", type: "text", placeholder: "Signal name" },
                { name: "timeout", type: "text", placeholder: "Timeout in milliseconds" }
            ]
        }
    },
    Sounds: {
        PlaySound: {
            name: "Play Sound",
            description: "Plays a specified sound.",
            parameters: [{ name: "filePath", type: "text", placeholder: "Sound file path" }]
        },
        PlaySoundFromFolder: {
            name: "Play Sound From Folder",
            description: "Plays a random sound from a specified folder.",
            parameters: [{ name: "folderPath", type: "text", placeholder: "Folder path" }]
        },
        StopAllSoundPlayback: {
            name: "Stop All Sound Playback",
            description: "Stops playback of all sounds.",
            parameters: []
        },
        StopSoundPlayback: {
            name: "Stop Sound Playback",
            description: "Stops playback of a specific sound.",
            parameters: [{ name: "filePath", type: "text", placeholder: "Sound file path" }]
        }
    },
    System: {
        KeyboardPress: {
            name: "Keyboard Press",
            description: "Simulates a key press.",
            parameters: [{ name: "key", type: "text", placeholder: "Key to press" }]
        },
        RunAProgram: {
            name: "Run a Program",
            description: "Executes a program on the system.",
            parameters: [
                { name: "filePath", type: "text", placeholder: "Program path" },
                { name: "arguments", type: "text", placeholder: "Program arguments (optional)" }
            ]
        },
        ToastNotification: {
            name: "Toast Notification",
            description: "Displays a toast notification on the system.",
            parameters: [
                { name: "title", type: "text", placeholder: "Notification title" },
                { name: "message", type: "text", placeholder: "Notification message" }
            ]
        }
    },
    Timers: {
        SetTimerState: {
            name: "Set Timer State",
            description: "Sets the state of a timer.",
            parameters: [
                { name: "timerName", type: "text", placeholder: "Timer name" },
                { name: "state", type: "dropdown", options: ["Start", "Stop"] }
            ]
        }
    },
    Triggers: {
        CustomEventTrigger: {
            name: "Custom Event Trigger",
            description: "Creates a trigger for a custom event.",
            parameters: [{ name: "eventName", type: "text", placeholder: "Event name" }]
        },
        SetTriggerState: {
            name: "Set Trigger State",
            description: "Sets the state of a specific trigger.",
            parameters: [
                { name: "triggerName", type: "text", placeholder: "Trigger name" },
                { name: "state", type: "dropdown", options: ["Enabled", "Disabled"] }
            ]
        }
    },
    Users: {
        ClearUsersFromGroup: {
            name: "Clear Users From Group",
            description: "Removes all users from a specified group.",
            parameters: [{ name: "groupName", type: "text", placeholder: "Group name" }]
        }
    },
    VoiceControl: {
        SetVoiceControlCommand: {
            name: "Set Voice Control Command",
            description: "Sets a command for voice control.",
            parameters: [
                { name: "commandName", type: "text", placeholder: "Command name" },
                { name: "action", type: "text", placeholder: "Action to execute" }
            ]
        },
        SetVoiceControlCommandState: {
            name: "Set Voice Control Command State",
            description: "Sets the state of a voice control command.",
            parameters: [
                { name: "commandName", type: "text", placeholder: "Command name" },
                { name: "state", type: "dropdown", options: ["Enabled", "Disabled"] }
            ]
        }
    }
};