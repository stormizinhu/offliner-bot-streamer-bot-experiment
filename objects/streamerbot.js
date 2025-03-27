export const streamerBotActions = {
    Uncategorized: {
        Delay: {
            name: "Delay",
            description: "Adiciona um atraso antes de executar uma ação.",
            parameters: [
                { name: "duration", type: "text", placeholder: "Duração em milissegundos" }
            ]
        }
    },
    ActionQueues: {
        ClearActionQueue: {
            name: "Clear Action Queue",
            description: "Limpa a fila de ações.",
            parameters: [
                { name: "queueName", type: "text", placeholder: "Nome da fila" }
            ]
        },
        SetActionQueueBlockingState: {
            name: "Set Action Queue Blocking State",
            description: "Define o estado de bloqueio da fila de ações.",
            parameters: [
                { name: "queueName", type: "text", placeholder: "Nome da fila" },
                { name: "state", type: "dropdown", options: ["Bloqueado", "Desbloqueado"] }
            ]
        },
        SetActionQueuePauseState: {
            name: "Set Action Queue Pause State",
            description: "Define o estado de pausa da fila de ações.",
            parameters: [
                { name: "queueName", type: "text", placeholder: "Nome da fila" },
                { name: "state", type: "dropdown", options: ["Pausado", "Ativado"] }
            ]
        }
    },
    Actions: {
        GetActionGroupState: {
            name: "Get Action Group State",
            description: "Obtém o estado de um grupo de ações.",
            parameters: [
                { name: "groupId", type: "text", placeholder: "ID do grupo" }
            ]
        },
        GetActionState: {
            name: "Get Action State",
            description: "Obtém o estado de uma ação específica.",
            parameters: [
                { name: "actionId", type: "text", placeholder: "ID da ação" }
            ]
        },
        RunAction: {
            name: "Run Action",
            description: "Executa uma ação específica.",
            parameters: [
                { name: "actionName", type: "text", placeholder: "Nome da ação" }
            ]
        },
        SetActionGroupState: {
            name: "Set Action Group State",
            description: "Define o estado de um grupo de ações.",
            parameters: [
                { name: "groupId", type: "text", placeholder: "ID do grupo" },
                { name: "state", type: "dropdown", options: ["Ativado", "Desativado"] }
            ]
        },
        SetActionState: {
            name: "Set Action State",
            description: "Define o estado de uma ação específica.",
            parameters: [
                { name: "actionId", type: "text", placeholder: "ID da ação" },
                { name: "state", type: "dropdown", options: ["Ativado", "Desativado"] }
            ]
        },
        SetSubActionState: {
            name: "Set Sub-Action State",
            description: "Define o estado de uma sub-ação.",
            parameters: [
                { name: "subActionId", type: "text", placeholder: "ID da sub-ação" },
                { name: "state", type: "dropdown", options: ["Ativado", "Desativado"] }
            ]
        }
    },
    Arguments: {
        SetArgument: {
            name: "Set Argument",
            description: "Define o valor de um argumento.",
            parameters: [
                { name: "argumentName", type: "text", placeholder: "Nome do argumento" },
                { name: "value", type: "text", placeholder: "Valor do argumento" }
            ]
        }
    },
    CSharp: {
        ExecuteCSharpCode: {
            name: "Execute C# Code",
            description: "Executa um código C# diretamente.",
            parameters: [
                { name: "code", type: "text", placeholder: "Código C# para executar" }
            ]
        },
        ExecuteCSharpMethod: {
            name: "Execute C# Method",
            description: "Executa um método C#.",
            parameters: [
                { name: "methodName", type: "text", placeholder: "Nome do método" },
                { name: "parameters", type: "text", placeholder: "Parâmetros para o método" }
            ]
        }
    },
    Commands: {
        GetCommandGroupState: {
            name: "Get Command Group State",
            description: "Obtém o estado de um grupo de comandos.",
            parameters: [
                { name: "groupId", type: "text", placeholder: "ID do grupo" }
            ]
        },
        GetCommandState: {
            name: "Get Command State",
            description: "Obtém o estado de um comando específico.",
            parameters: [
                { name: "commandId", type: "text", placeholder: "ID do comando" }
            ]
        },
        GetCommands: {
            name: "Get Commands",
            description: "Obtém uma lista de comandos disponíveis.",
            parameters: []
        },
        SetCommandGroupState: {
            name: "Set Command Group State",
            description: "Define o estado de um grupo de comandos.",
            parameters: [
                { name: "groupId", type: "text", placeholder: "ID do grupo" },
                { name: "state", type: "dropdown", options: ["Ativado", "Desativado"] }
            ]
        },
        SetCommandState: {
            name: "Set Command State",
            description: "Define o estado de um comando específico.",
            parameters: [
                { name: "commandId", type: "text", placeholder: "ID do comando" },
                { name: "state", type: "dropdown", options: ["Ativado", "Desativado"] }
            ]
        }
    },
    FileIO: {
        ReadLinesFromFile: {
            name: "Read Lines From File",
            description: "Lê todas as linhas de um arquivo especificado.",
            parameters: [
                { name: "filePath", type: "text", placeholder: "Caminho para o arquivo" }
            ]
        },
        ReadRandomLineFromFile: {
            name: "Read Random Line From File",
            description: "Lê uma linha aleatória de um arquivo especificado.",
            parameters: [
                { name: "filePath", type: "text", placeholder: "Caminho para o arquivo" }
            ]
        },
        ReadSpecificLineFromFile: {
            name: "Read Specific Line From File",
            description: "Lê uma linha específica de um arquivo especificado.",
            parameters: [
                { name: "filePath", type: "text", placeholder: "Caminho para o arquivo" },
                { name: "linetext", type: "text", placeholder: "Número da linha" }
            ]
        },
        WriteToFile: {
            name: "Write To File",
            description: "Escreve informações em um arquivo.",
            parameters: [
                { name: "filePath", type: "text", placeholder: "Caminho para o arquivo" },
                { name: "content", type: "text", placeholder: "Conteúdo para escrever" }
            ]
        }
    },
    FileTail: {
        SetFileTailState: {
            name: "Set File Tail State",
            description: "Ativa ou desativa o monitoramento de alterações em um arquivo.",
            parameters: [
                { name: "filePath", type: "text", placeholder: "Caminho para o arquivo" },
                { name: "state", type: "dropdown", options: ["Ativado", "Desativado"] }
            ]
        }
    },
    Globals: {
        ClearNonPersistedGlobals: {
            name: "Clear Non-Persisted Globals",
            description: "Limpa todas as variáveis globais não persistentes.",
            parameters: []
        },
        ClearNonPersistedUserGlobals: {
            name: "Clear Non-Persisted User Globals",
            description: "Limpa todas as variáveis globais de usuário não persistentes.",
            parameters: []
        },
        GlobalGet: {
            name: "Global (Get)",
            description: "Obtém o valor de uma variável global.",
            parameters: [
                { name: "variableName", type: "text", placeholder: "Nome da variável" }
            ]
        },
        GlobalSet: {
            name: "Global (Set)",
            description: "Define o valor de uma variável global.",
            parameters: [
                { name: "variableName", type: "text", placeholder: "Nome da variável" },
                { name: "value", type: "text", placeholder: "Valor da variável" }
            ]
        }
    },
    Logic: {
        Break: {
            name: "Break",
            description: "Interrompe a execução de uma lógica condicional ou repetitiva.",
            parameters: []
        },
        GetInput: {
            name: "Get Input",
            description: "Obtém um valor de entrada do usuário.",
            parameters: [
                { name: "prompt", type: "text", placeholder: "Texto do prompt" }
            ]
        },
        GetRandomtext: {
            name: "Get Random text",
            description: "Gera um número aleatório dentro de um intervalo.",
            parameters: [
                { name: "min", type: "text", placeholder: "Valor mínimo" },
                { name: "max", type: "text", placeholder: "Valor máximo" }
            ]
        },
        IfElse: {
            name: "If/Else",
            description: "Executa ações com base em uma condição lógica.",
            parameters: [
                { name: "condition", type: "text", placeholder: "Condição lógica" }
            ]
        },
        Switch: {
            name: "Switch",
            description: "Executa diferentes ações com base em valores distintos.",
            parameters: [
                { name: "value", type: "text", placeholder: "Valor para avaliar" }
            ]
        }
    },
    MIDI: {
        ControlChange: {
            name: "Control Change",
            description: "Envia um comando de mudança de controle MIDI.",
            parameters: [
                { name: "channel", type: "text", placeholder: "Canal MIDI" },
                { name: "control", type: "text", placeholder: "Controle MIDI" },
                { name: "value", type: "text", placeholder: "Valor MIDI" }
            ]
        },
        GenericEvent: {
            name: "Generic Event",
            description: "Gera um evento MIDI genérico.",
            parameters: []
        },
        NoteOn: {
            name: "Note On",
            description: "Ativa uma nota MIDI.",
            parameters: [
                { name: "channel", type: "text", placeholder: "Canal MIDI" },
                { name: "note", type: "text", placeholder: "Nota MIDI" },
                { name: "velocity", type: "text", placeholder: "Velocidade MIDI" }
            ]
        }
    },
    Misc: {
        Comment: {
            name: "Comment",
            description: "Adiciona um comentário ao fluxo de ações.",
            parameters: [
                { name: "text", type: "text", placeholder: "Texto do comentário" }
            ]
        },
        Log: {
            name: "Log",
            description: "Adiciona uma entrada ao log.",
            parameters: [
                { name: "message", type: "text", placeholder: "Mensagem do log" }
            ]
        }
    },
    Network: {
        FetchURL: {
            name: "Fetch URL",
            description: "Realiza uma requisição para um URL.",
            parameters: [
                { name: "url", type: "text", placeholder: "URL para buscar" },
                { name: "method", type: "dropdown", options: ["GET", "POST"] },
                { name: "body", type: "text", placeholder: "Corpo da requisição (opcional)" }
            ]
        },
        UDPBroadcast: {
            name: "UDP Broadcast",
            description: "Envia uma mensagem por UDP.",
            parameters: [
                { name: "ip", type: "text", placeholder: "Endereço IP" },
                { name: "port", type: "text", placeholder: "Porta" },
                { name: "message", type: "text", placeholder: "Mensagem a ser enviada" }
            ]
        }
    },
    Quotes: {
        AddQuote: {
            name: "Add Quote",
            description: "Adiciona uma citação à lista de citações.",
            parameters: [
                { name: "quote", type: "text", placeholder: "Texto da citação" }
            ]
        },
        DeleteQuote: {
            name: "Delete Quote",
            description: "Remove uma citação da lista.",
            parameters: [
                { name: "quoteId", type: "text", placeholder: "ID da citação" }
            ]
        },
        GetQuote: {
            name: "Get Quote",
            description: "Obtém uma citação específica.",
            parameters: [
                { name: "quoteId", type: "text", placeholder: "ID da citação" }
            ]
        },
        GetQuoteCount: {
            name: "Get Quote Count",
            description: "Obtém o número total de citações disponíveis.",
            parameters: []
        }
    },
    Signals: {
        SendLocalSignal: {
            name: "Send Local Signal",
            description: "Envia um sinal local dentro do StreamerBot.",
            parameters: [
                { name: "signalName", type: "text", placeholder: "Nome do sinal" }
            ]
        },
        WaitForLocalSignal: {
            name: "Wait For Local Signal",
            description: "Aguarda um sinal local ser recebido.",
            parameters: [
                { name: "signalName", type: "text", placeholder: "Nome do sinal" },
                { name: "timeout", type: "text", placeholder: "Tempo limite em milissegundos" }
            ]
        }
    },
    Sounds: {
        PlaySound: {
            name: "Play Sound",
            description: "Reproduz um som especificado.",
            parameters: [
                { name: "filePath", type: "text", placeholder: "Caminho do arquivo de som" }
            ]
        },
        PlaySoundFromFolder: {
            name: "Play Sound From Folder",
            description: "Reproduz um som aleatório de uma pasta especificada.",
            parameters: [
                { name: "folderPath", type: "text", placeholder: "Caminho da pasta" }
            ]
        },
        StopAllSoundPlayback: {
            name: "Stop All Sound Playback",
            description: "Interrompe a reprodução de todos os sons.",
            parameters: []
        },
        StopSoundPlayback: {
            name: "Stop Sound Playback",
            description: "Interrompe a reprodução de um som específico.",
            parameters: [
                { name: "filePath", type: "text", placeholder: "Caminho do arquivo de som" }
            ]
        }
    },
    System: {
        KeyboardPress: {
            name: "Keyboard Press",
            description: "Simula o pressionamento de uma tecla.",
            parameters: [
                { name: "key", type: "text", placeholder: "Tecla para pressionar" }
            ]
        },
        RunAProgram: {
            name: "Run a Program",
            description: "Executa um programa no sistema.",
            parameters: [
                { name: "filePath", type: "text", placeholder: "Caminho do programa" },
                { name: "arguments", type: "text", placeholder: "Argumentos para o programa (opcional)" }
            ]
        },
        ToastNotification: {
            name: "Toast Notification",
            description: "Exibe uma notificação de toast no sistema.",
            parameters: [
                { name: "title", type: "text", placeholder: "Título da notificação" },
                { name: "message", type: "text", placeholder: "Mensagem da notificação" }
            ]
        }
    },
    Timers: {
        SetTimerState: {
            name: "Set Timer State",
            description: "Define o estado de um temporizador.",
            parameters: [
                { name: "timerName", type: "text", placeholder: "Nome do temporizador" },
                { name: "state", type: "dropdown", options: ["Iniciar", "Parar"] }
            ]
        }
    },
    Triggers: {
        CustomEventTrigger: {
            name: "Custom Event Trigger",
            description: "Cria um gatilho para um evento personalizado.",
            parameters: [
                { name: "eventName", type: "text", placeholder: "Nome do evento" }
            ]
        },
        SetTriggerState: {
            name: "Set Trigger State",
            description: "Define o estado de um gatilho específico.",
            parameters: [
                { name: "triggerName", type: "text", placeholder: "Nome do gatilho" },
                { name: "state", type: "dropdown", options: ["Ativado", "Desativado"] }
            ]
        }
    },
    Users: {
        ClearUsersFromGroup: {
            name: "Clear Users From Group",
            description: "Remove todos os usuários de um grupo especificado.",
            parameters: [
                { name: "groupName", type: "text", placeholder: "Nome do grupo" }
            ]
        }
    },
    VoiceControl: {
        SetVoiceControlCommand: {
            name: "Set Voice Control Command",
            description: "Define um comando para controle por voz.",
            parameters: [
                { name: "commandName", type: "text", placeholder: "Nome do comando" },
                { name: "action", type: "text", placeholder: "Ação a ser executada" }
            ]
        },
        SetVoiceControlCommandState: {
            name: "Set Voice Control Command State",
            description: "Define o estado de um comando de controle por voz.",
            parameters: [
                { name: "commandName", type: "text", placeholder: "Nome do comando" },
                { name: "state", type: "dropdown", options: ["Ativado", "Desativado"] }
            ]
        }
    }
};