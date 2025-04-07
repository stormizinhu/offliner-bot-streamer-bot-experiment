export const obsActions = {
    Uncategorized: {
        CreateRecordChapter: {
            name: "Create Record Chapter",
            description: "Creates a recording chapter during the stream.",
            parameters: []
        },
        GetCurrentScene: {
            name: "Get Current Scene",
            description: "Obtains the current scene being displayed.",
            parameters: []
        },
        GetStatus: {
            name: "Get Status",
            description: "Obtains the current OBS status, including recording and streaming.",
            parameters: []
        },
        Raw: {
            name: "Raw",
            description: "Sends a raw command to OBS.",
            parameters: [{ name: "command", type: "text", placeholder: "Raw command to send" }]
        }
    },
    Recording: {
        Recording: {
            name: "Recording",
            description: "Starts or stops recording in OBS.",
            parameters: [{ name: "action", type: "dropdown", options: ["Start", "Stop"] }]
        },
        SetActiveScene: {
            name: "Set Active Scene",
            description: "Sets the active scene in OBS.",
            parameters: [{ name: "sceneName", type: "text", placeholder: "Scene name" }]
        }
    },
    Streaming: {
        Streaming: {
            name: "Streaming",
            description: "Starts or stops live streaming in OBS.",
            parameters: [{ name: "action", type: "dropdown", options: ["Start", "Stop"] }]
        },
        TakeScreenshot: {
            name: "Take Screenshot",
            description: "Takes a screenshot of the current scene.",
            parameters: [{ name: "filePath", type: "text", placeholder: "Path to save the screenshot" }]
        }
    },
    Filters: {
        SetStateOfARandomFilter: {
            name: "Set State of a Random Filter",
            description: "Activates or deactivates a random filter in a source.",
            parameters: [{ name: "sourceName", type: "text", placeholder: "Source name" }]
        }
    },
    Groups: {
        SetRandomGroupSourceVisible: {
            name: "Set Random Group Source Visible",
            description: "Sets the visibility of a random source in a group.",
            parameters: [{ name: "groupName", type: "text", placeholder: "Group name" }]
        }
    },
    Replay: {
        SetReplayBufferState: {
            name: "Set Replay Buffer State",
            description: "Activates or deactivates the replay buffer.",
            parameters: [{ name: "state", type: "dropdown", options: ["Enabled", "Disabled"] }]
        }
    },
    Scenes: {
        GetSceneItemProperties: {
            name: "Get Scene Item Properties",
            description: "Obtains the properties of an item within a scene.",
            parameters: [
                { name: "sceneName", type: "text", placeholder: "Scene name" },
                { name: "itemName", type: "text", placeholder: "Item name" }
            ]
        },
        HideScenesSources: {
            name: "Hide Scene's Sources",
            description: "Hides all sources in a scene.",
            parameters: [{ name: "sceneName", type: "text", placeholder: "Scene name" }]
        },
        SetRandomSceneSourceVisible: {
            name: "Set Random Scene Source Visible",
            description: "Sets the visibility of a random source in a scene.",
            parameters: [{ name: "sceneName", type: "text", placeholder: "Scene name" }]
        },
        SetSceneFilterState: {
            name: "Set Scene Filter State",
            description: "Activates or deactivates a filter in a scene.",
            parameters: [
                { name: "sceneName", type: "text", placeholder: "Scene name" },
                { name: "filterName", type: "text", placeholder: "Filter name" }
            ]
        }
    },
    Sources: {
        FlipSource: {
            name: "Flip Source",
            description: "Flips the orientation of a source (horizontal or vertical).",
            parameters: [
                { name: "sourceName", type: "text", placeholder: "Source name" },
                { name: "axis", type: "dropdown", options: ["Horizontal", "Vertical"] }
            ]
        },
        HideGroupsSources: {
            name: "Hide Group's Sources",
            description: "Hides all sources in a group.",
            parameters: [{ name: "groupName", type: "text", placeholder: "Group name" }]
        },
        HideSourcesFilters: {
            name: "Hide Source's Filters",
            description: "Hides all filters in a source.",
            parameters: [{ name: "sourceName", type: "text", placeholder: "Source name" }]
        },
        RotateSource: {
            name: "Rotate Source",
            description: "Rotates a source by specified degrees.",
            parameters: [
                { name: "sourceName", type: "text", placeholder: "Source name" },
                { name: "angle", type: "text", placeholder: "Rotation angle in degrees" }
            ]
        },
        SetBrowserSourceURL: {
            name: "Set Browser Source URL",
            description: "Sets the URL of a browser source.",
            parameters: [
                { name: "sourceName", type: "text", placeholder: "Source name" },
                { name: "url", type: "text", placeholder: "Source URL" }
            ]
        },
        SetColorSourceColor: {
            name: "Set Color Source Color",
            description: "Sets the color of a color source.",
            parameters: [
                { name: "sourceName", type: "text", placeholder: "Source name" },
                { name: "color", type: "text", placeholder: "Hex color" }
            ]
        },
        SetGDIText: {
            name: "Set GDI Text",
            description: "Sets the text of a GDI source.",
            parameters: [
                { name: "sourceName", type: "text", placeholder: "Source name" },
                { name: "text", type: "text", placeholder: "Text to display" }
            ]
        },
        SetImageSourceFile: {
            name: "Set Image Source File",
            description: "Sets the image file for a source.",
            parameters: [
                { name: "sourceName", type: "text", placeholder: "Source name" },
                { name: "filePath", type: "text", placeholder: "Image file path" }
            ]
        },
        SetMediaSourceFile: {
            name: "Set Media Source File",
            description: "Sets the media file for a source.",
            parameters: [
                { name: "sourceName", type: "text", placeholder: "Source name" },
                { name: "filePath", type: "text", placeholder: "Media file path" }
            ]
        },
        SetMediaState: {
            name: "Set Media State",
            description: "Sets the playback state of a media source.",
            parameters: [
                { name: "sourceName", type: "text", placeholder: "Source name" },
                { name: "state", type: "dropdown", options: ["Play", "Pause", "Stop"] }
            ]
        },
        SetSourceAudioTrackState: {
            name: "Set Source Audio Track State",
            description: "Sets the state of an audio track in a source.",
            parameters: [
                { name: "sourceName", type: "text", placeholder: "Source name" },
                { name: "track", type: "text", placeholder: "Audio track number" },
                { name: "state", type: "dropdown", options: ["Enabled", "Disabled"] }
            ]
        },
        SetSourceFilterState: {
            name: "Set Source Filter State",
            description: "Activates or deactivates a filter in a source.",
            parameters: [
                { name: "sourceName", type: "text", placeholder: "Source name" },
                { name: "filterName", type: "text", placeholder: "Filter name" }
            ]
        },
        SetSourceMuteState: {
            name: "Set Source Mute State",
            description: "Sets the mute state of an audio source.",
            parameters: [
                { name: "sourceName", type: "text", placeholder: "Source name" },
                { name: "state", type: "dropdown", options: ["Enabled", "Disabled"] }
            ]
        },
        SetSourceVisibilityState: {
            name: "Set Source Visibility State",
            description: "Sets the visibility of a source.",
            parameters: [
                { name: "sourceName", type: "text", placeholder: "Source name" },
                { name: "state", type: "dropdown", options: ["Visible", "Hidden"] }
            ]
        }
    }
};