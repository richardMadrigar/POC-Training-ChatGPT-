import { ChatCompletionRequestMessageRoleEnum } from 'openai';
import { trainingBase } from 'Repositories/MockListTraining/TrainingBase';

interface ITraining {
  role: ChatCompletionRequestMessageRoleEnum,
  content: string
}

const training: ITraining[] = [];

trainingBase.map((item: {message: string}) => training.push({ role: 'system', content: item.message }));

export { training };
