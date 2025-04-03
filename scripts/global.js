// Importando os módulos de ações de cada plataforma
import { obsActions } from '../objects/obs.js';
import { streamerBotActions } from '../objects/streamerbot.js';
import { twitchActions } from '../objects/twitch.js';
import { youtubeActions } from '../objects/youtube.js';

import { streamerBotTriggers } from "../triggers/streamerBotTriggers.js"
import { obsTriggers } from "../triggers/obsTriggers.js"
import { youtubeTriggers } from "../triggers/youtubeTrigger.js"
import { twitchTriggers } from '../triggers/twitchTrigger.js';

// Definindo o objeto actions com as ações das plataformas
export const actions = {
  OBS: obsActions,
  StreamerBot: streamerBotActions,
  Twitch: twitchActions,
  YouTube: youtubeActions
};

export const triggers = { 
  OBS: obsTriggers,
  StreamerBot: streamerBotTriggers,
  YouTube: youtubeTriggers,
  Twitch: twitchTriggers,
}