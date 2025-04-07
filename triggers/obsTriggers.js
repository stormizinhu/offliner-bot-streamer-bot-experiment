export const obsTriggers = {
  Uncategorized: {
    Connected: {
      name: "Connected",
      description: "Executes an action when OBS Studio connects.",
      parameters: []
    },
    Disconnected: {
      name: "Disconnected",
      description: "Executes an action when OBS Studio disconnects.",
      parameters: []
    },
    Event: {
      name: "Event",
      description: "Triggers a generic event in OBS Studio.",
      parameters: []
    },
    RecordingStarted: {
      name: "Recording Started",
      description: "Executes an action when recording starts.",
      parameters: []
    },
    RecordingStopped: {
      name: "Recording Stopped",
      description: "Executes an action when recording stops.",
      parameters: []
    },
    SceneChanged: {
      name: "Scene Changed",
      description: "Executes an action when the scene is changed.",
      parameters: []
    },
    StreamingStarted: {
      name: "Streaming Started",
      description: "Executes an action when streaming starts.",
      parameters: []
    },
    StreamingStopped: {
      name: "Streaming Stopped",
      description: "Executes an action when streaming stops.",
      parameters: []
    },
    VendorEvent: {
      name: "Vendor Event",
      description: "Triggers vendor-specific events in OBS Studio.",
      parameters: []
    }
  }
};