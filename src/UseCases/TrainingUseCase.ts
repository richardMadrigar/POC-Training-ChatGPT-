import { Request, Response } from 'express';

import { training } from 'Repositories/MockListTraining';

export const TrainingUseCase = (req: Request, res: Response) => {
  const { data } = req.body;

  data.map((item: {message: string}) => training.push({ role: 'system', content: item.message }));

  return res.send();
};
