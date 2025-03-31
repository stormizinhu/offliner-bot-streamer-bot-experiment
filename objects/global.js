// Importando os módulos de ações de cada plataforma
import { obsActions } from './obs.js';
import { streamerBotActions } from './streamerbot.js';
import { twitchActions } from './twitch.js';
import { youtubeActions } from './youtube.js';

// Definindo o objeto actions com as ações das plataformas
export const actions = {
  OBS: obsActions,
  StreamerBot: streamerBotActions,
  Twitch: twitchActions,
  YouTube: youtubeActions
};