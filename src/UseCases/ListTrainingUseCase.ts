import { Request, Response } from 'express';

import { training } from 'Repositories/MockListTraining';

export const ListTrainingUseCase = (req: Request, res: Response) => res.json(training);
