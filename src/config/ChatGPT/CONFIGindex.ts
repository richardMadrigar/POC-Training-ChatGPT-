import { Configuration, OpenAIApi } from 'openai';

import { env } from '@shared/Util/Env/Env';

const apiKey = env.API_KEY_OPEN_AI;

const configuration = new Configuration({ apiKey });

export const OpenAiConnection = new OpenAIApi(configuration);
