import { addDragAndDropEvents, getDragAfterElement, clearList } from './dragndrop.js';

// Importando os módulos de ações de cada plataforma
import { obsActions } from './objects/obs.js';
import { streamerBotActions } from './objects/streamerbot.js';
import { twitchActions } from './objects/twitch.js';
import { youtubeActions } from './objects/youtube.js';

import { streamerBotTriggers } from './triggers/streamerBotTriggers.js';

// Definindo o objeto actions com as ações das plataformas
export const actions = {
  OBS: obsActions,
  StreamerBot: streamerBotActions,
  Twitch: twitchActions,
  YouTube: youtubeActions
};

export const triggers = {
  StreamerBot: streamerBotTriggers,
}

export { addDragAndDropEvents, getDragAfterElement, clearList };
