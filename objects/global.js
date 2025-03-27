// Importando os módulos de ações de cada plataforma
import { obsActions } from './obs.js';
import { streamerBotActions } from './streamerbot.js'; // Nova importação
import { twitchActions } from './twitch.js';
import { youtubeActions } from './youtube.js';

// Definindo o objeto actions com as ações das plataformas
const actions = {
  "OBS": obsActions,
  "StreamerBot": streamerBotActions,
  "Twitch": twitchActions,
  "YouTube": youtubeActions
};

// Exportando o objeto actions
export { actions };