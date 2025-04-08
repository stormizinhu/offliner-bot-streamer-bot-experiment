import { obsActions } from '../actions/obsActions.js';
import { streamerBotActions } from '../actions/streamerbotActions.js';
import { twitchActions } from '../actions/twitchActions.js';
import { youtubeActions } from '../actions/youtubeActions.js';
import { integrationActions } from '../actions/integrationActions.js';

import { streamerBotTriggers } from "../triggers/streamerBotTriggers.js";
import { obsTriggers } from "../triggers/obsTriggers.js";
import { youtubeTriggers } from "../triggers/youtubeTriggers.js";
import { twitchTriggers } from '../triggers/twitchTriggers.js';
import { integrationTriggers } from '../triggers/integrationTriggers.js';

export const actions = {
  OBS: obsActions,
  StreamerBot: streamerBotActions,
  Twitch: twitchActions,
  YouTube: youtubeActions,
  Integration: integrationActions,
};

export const triggers = {
  OBS: obsTriggers,
  StreamerBot: streamerBotTriggers,
  YouTube: youtubeTriggers,
  Twitch: twitchTriggers,
  Integration: integrationTriggers,
};