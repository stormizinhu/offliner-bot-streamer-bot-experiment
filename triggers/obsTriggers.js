export const obsTriggers = {
  Uncategorized: {
    Connected: {
      name: "Connected",
      description: "Executa uma ação quando o OBS Studio se conecta.",
      parameters: []
    },
    Disconnected: {
      name: "Disconnected",
      description: "Executa uma ação quando o OBS Studio se desconecta.",
      parameters: []
    },
    Event: {
      name: "Event",
      description: "Dispara um evento genérico no OBS Studio.",
      parameters: []
    },
    RecordingStarted: {
      name: "Recording Started",
      description: "Executa uma ação quando a gravação é iniciada.",
      parameters: []
    },
    RecordingStopped: {
      name: "Recording Stopped",
      description: "Executa uma ação quando a gravação é interrompida.",
      parameters: []
    },
    SceneChanged: {
      name: "Scene Changed",
      description: "Executa uma ação quando a cena é alterada.",
      parameters: []
    },
    StreamingStarted: {
      name: "Streaming Started",
      description: "Executa uma ação quando a transmissão é iniciada.",
      parameters: []
    },
    StreamingStopped: {
      name: "Streaming Stopped",
      description: "Executa uma ação quando a transmissão é encerrada.",
      parameters: []
    },
    VendorEvent: {
      name: "Vendor Event",
      description: "Dispara eventos específicos de fornecedor no OBS Studio.",
      parameters: []
    }
  }
};