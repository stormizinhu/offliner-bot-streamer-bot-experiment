// `global.js`

// Faz o `fetch` de cada arquivo JSON
async function fetchActions() {
  const obs = await fetch('./objects/obs.json').then(res => res.json());
  const streamerbot = await fetch('./objects/streamerbot.json').then(res => res.json());
  const twitch = await fetch('./objects/twitch.json').then(res => res.json());
  const youtube = await fetch('./objects/youtube.json').then(res => res.json());

  // Combina os JSONs em um único objeto
  return {
      OBS: obs,
      StreamerBot: streamerbot,
      Twitch: twitch,
      YouTube: youtube
  };
}

// Exporta a função para carregar as ações dinamicamente
export default fetchActions;