import { ChatCompletionRequestMessage } from 'openai';

import { OpenAiConnection } from './CONFIGindex';

export const completion = async (messages: ChatCompletionRequestMessage[])
: Promise<string | undefined> => {
  const completion = await OpenAiConnection
    .createChatCompletion({
      model: 'gpt-3.5-turbo',
      temperature: 0.5,
      max_tokens: 256,
      messages,
    });

  return completion.data.choices[0].message?.content;
};
