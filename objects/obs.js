export const obsActions = {
    Uncategorized: {
        CreateRecordChapter: {
            name: "Create Record Chapter",
            description: "Cria um capítulo de gravação durante a transmissão.",
            parameters: []
        },
        GetCurrentScene: {
            name: "Get Current Scene",
            description: "Obtém a cena atual que está sendo exibida.",
            parameters: []
        },
        GetStatus: {
            name: "Get Status",
            description: "Obtém o status atual do OBS, incluindo gravação e transmissão.",
            parameters: []
        },
        Raw: {
            name: "Raw",
            description: "Envia um comando bruto ao OBS.",
            parameters: [
                { name: "command", type: "text", placeholder: "Comando raw para enviar" }
            ]
        },
        Recording: {
            name: "Recording",
            description: "Inicia ou para a gravação no OBS.",
            parameters: [
                { name: "action", type: "dropdown", options: ["Iniciar", "Parar"] }
            ]
        },
        SetActiveScene: {
            name: "Set Active Scene",
            description: "Define a cena ativa no OBS.",
            parameters: [
                { name: "sceneName", type: "text", placeholder: "Nome da cena" }
            ]
        },
        Streaming: {
            name: "Streaming",
            description: "Inicia ou para a transmissão ao vivo no OBS.",
            parameters: [
                { name: "action", type: "dropdown", options: ["Iniciar", "Parar"] }
            ]
        },
        TakeScreenshot: {
            name: "Take Screenshot",
            description: "Tira uma captura de tela da cena atual.",
            parameters: [
                { name: "filePath", type: "text", placeholder: "Caminho para salvar a captura" }
            ]
        }
    },
    Filters: {
        SetStateOfARandomFilter: {
            name: "Set State of a Random Filter",
            description: "Ativa ou desativa um filtro aleatório em uma fonte.",
            parameters: [
                { name: "sourceName", type: "text", placeholder: "Nome da fonte" }
            ]
        }
    },
    Groups: {
        SetRandomGroupSourceVisible: {
            name: "Set Random Group Source Visible",
            description: "Define a visibilidade de uma fonte aleatória em um grupo.",
            parameters: [
                { name: "groupName", type: "text", placeholder: "Nome do grupo" }
            ]
        }
    },
    Replay: {
        SetReplayBufferState: {
            name: "Set Replay Buffer State",
            description: "Ativa ou desativa o buffer de replay.",
            parameters: [
                { name: "state", type: "dropdown", options: ["Ativado", "Desativado"] }
            ]
        }
    },
    Scenes: {
        GetSceneItemProperties: {
            name: "Get Scene Item Properties",
            description: "Obtém as propriedades de um item dentro de uma cena.",
            parameters: [
                { name: "sceneName", type: "text", placeholder: "Nome da cena" },
                { name: "itemName", type: "text", placeholder: "Nome do item" }
            ]
        },
        HideScenesSources: {
            name: "Hide Scene's Sources",
            description: "Oculta todas as fontes de uma cena.",
            parameters: [
                { name: "sceneName", type: "text", placeholder: "Nome da cena" }
            ]
        },
        SetRandomSceneSourceVisible: {
            name: "Set Random Scene Source Visible",
            description: "Define a visibilidade de uma fonte aleatória em uma cena.",
            parameters: [
                { name: "sceneName", type: "text", placeholder: "Nome da cena" }
            ]
        },
        SetSceneFilterState: {
            name: "Set Scene Filter State",
            description: "Ativa ou desativa um filtro de uma cena.",
            parameters: [
                { name: "sceneName", type: "text", placeholder: "Nome da cena" },
                { name: "filterName", type: "text", placeholder: "Nome do filtro" }
            ]
        }
    },
    Sources: {
        FlipSource: {
            name: "Flip Source",
            description: "Inverte a orientação de uma fonte (horizontal ou vertical).",
            parameters: [
                { name: "sourceName", type: "text", placeholder: "Nome da fonte" },
                { name: "axis", type: "dropdown", options: ["Horizontal", "Vertical"] }
            ]
        },
        HideGroupsSources: {
            name: "Hide Group's Sources",
            description: "Oculta todas as fontes de um grupo.",
            parameters: [
                { name: "groupName", type: "text", placeholder: "Nome do grupo" }
            ]
        },
        HideSourcesFilters: {
            name: "Hide Source's Filters",
            description: "Oculta todos os filtros de uma fonte.",
            parameters: [
                { name: "sourceName", type: "text", placeholder: "Nome da fonte" }
            ]
        },
        RotateSource: {
            name: "Rotate Source",
            description: "Rotaciona uma fonte em graus especificados.",
            parameters: [
                { name: "sourceName", type: "text", placeholder: "Nome da fonte" },
                { name: "angle", type: "text", placeholder: "Ângulo de rotação em graus" }
            ]
        },
        SetBrowserSourceURL: {
            name: "Set Browser Source URL",
            description: "Define a URL de uma fonte de navegador.",
            parameters: [
                { name: "sourceName", type: "text", placeholder: "Nome da fonte" },
                { name: "url", type: "text", placeholder: "URL da fonte" }
            ]
        },
        SetColorSourceColor: {
            name: "Set Color Source Color",
            description: "Define a cor de uma fonte de cor.",
            parameters: [
                { name: "sourceName", type: "text", placeholder: "Nome da fonte" },
                { name: "color", type: "text", placeholder: "Cor em hexadecimal" }
            ]
        },
        SetGDIText: {
            name: "Set GDI Text",
            description: "Define o texto de uma fonte GDI.",
            parameters: [
                { name: "sourceName", type: "text", placeholder: "Nome da fonte" },
                { name: "text", type: "text", placeholder: "Texto a ser exibido" }
            ]
        },
        SetImageSourceFile: {
            name: "Set Image Source File",
            description: "Define o arquivo de imagem de uma fonte.",
            parameters: [
                { name: "sourceName", type: "text", placeholder: "Nome da fonte" },
                { name: "filePath", type: "text", placeholder: "Caminho do arquivo de imagem" }
            ]
        },
        SetMediaSourceFile: {
            name: "Set Media Source File",
            description: "Define o arquivo de mídia de uma fonte.",
            parameters: [
                { name: "sourceName", type: "text", placeholder: "Nome da fonte" },
                { name: "filePath", type: "text", placeholder: "Caminho do arquivo de mídia" }
            ]
        },
        SetMediaState: {
            name: "Set Media State",
            description: "Define o estado de reprodução de uma fonte de mídia.",
            parameters: [
                { name: "sourceName", type: "text", placeholder: "Nome da fonte" },
                { name: "state", type: "dropdown", options: ["Play", "Pause", "Stop"] }
            ]
        },
        SetSourceAudioTrackState: {
            name: "Set Source Audio Track State",
            description: "Define o estado da trilha de áudio de uma fonte.",
            parameters: [
                { name: "sourceName", type: "text", placeholder: "Nome da fonte" },
                { name: "track", type: "text", placeholder: "Número da trilha de áudio" },
                { name: "state", type: "dropdown", options: ["Ativado", "Desativado"] }
            ]
        },
        SetSourceFilterState: {
            name: "Set Source Filter State",
            description: "Ativa ou desativa um filtro de uma fonte.",
            parameters: [
                { name: "sourceName", type: "text", placeholder: "Nome da fonte" },
                { name: "filterName", type: "text", placeholder: "Nome do filtro" }
            ]
        },
        SetSourceMuteState: {
            name: "Set Source Mute State",
            description: "Define o estado de mudo de uma fonte de áudio.",
            parameters: [
                { name: "sourceName", type: "text", placeholder: "Nome da fonte" },
                { name: "state", type: "dropdown", options: ["Ativado", "Desativado"] }
            ]
        },
        SetSourceVisibilityState: {
            name: "Set Source Visibility State",
            description: "Define a visibilidade de uma fonte.",
            parameters: [
                { name: "sourceName", type: "text", placeholder: "Nome da fonte" },
                { name: "state", type: "dropdown", options: ["Visível", "Oculto"] }
            ]
        }
    }
};