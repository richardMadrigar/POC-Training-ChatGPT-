import { Request, Response } from 'express';

import { completion } from '@config/ChatGPT/createChatCompletion';
import { training } from 'Repositories/MockListTraining';

export const CompletionUseCase = async (req: Request, res: Response) => {
  const { message } = req.body;

  training.push({ role: 'user', content: message });

  const response = (await completion(training)) || 'Não entendi...';
  training.push({ role: 'assistant', content: response });

  const returnResponse = training.filter((item) => item.role !== 'system');

  return res.json(returnResponse);
};
