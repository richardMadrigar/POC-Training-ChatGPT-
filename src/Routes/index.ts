import { Router } from 'express';

import { CompletionUseCase } from 'UseCases/CompletionUseCase';
import { ListTrainingUseCase } from 'UseCases/ListTrainingUseCase';
import { TrainingUseCase } from 'UseCases/TrainingUseCase';

const routerIndex = Router();

routerIndex.post('/training', TrainingUseCase);

routerIndex.post('/listTraining', ListTrainingUseCase);

routerIndex.post('/completion', CompletionUseCase);

export { routerIndex };
