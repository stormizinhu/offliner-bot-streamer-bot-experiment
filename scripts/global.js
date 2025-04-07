import { obsActions } from '../actions/obsActions.js';
import { streamerBotActions } from '../actions/streamerbotActions.js';
import { twitchActions } from '../actions/twitchActions.js';
import { youtubeActions } from '../actions/youtubeActions.js';

import { streamerBotTriggers } from "../triggers/streamerBotTriggers.js"
import { obsTriggers } from "../triggers/obsTriggers.js"
import { youtubeTriggers } from "../triggers/youtubeTrigger.js"
import { twitchTriggers } from '../triggers/twitchTrigger.js';

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