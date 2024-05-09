import { config } from 'dotenv';
import { z } from 'zod';

import { logger } from '../configLogger';

if (process.env.NODE_ENV === 'test') {
  config({ path: '.env' });
} else {
  config();
}

const envSchema = z.object({
  PORT: z.string().default('3001'),
  NODE_ENV: z
    .enum(['DEV', 'PRODUCTION', 'test', 'LOCAL'])
    .default('PRODUCTION'),

  API_KEY_OPEN_AI: z.string({ required_error: 'Colocar env API_KEY_OPEN_AI' }),
});

const envZod = envSchema.safeParse(process.env);

if (envZod.success === false) {
  logger.fatal(envZod.error.format());
  throw new Error('🛑 Invalid environment variables !');
}

export const env = {
  ...envZod.data,
};
