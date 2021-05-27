import { GetWelcomeMessage } from '../../../domain/welcome/GetWelcomeMessage';
import { bootstrap } from '../../../main';

export async function handler() {
  const app = await bootstrap();
  const getWelcomeService: GetWelcomeMessage = app.get(
    'GetWelcomeMessageService',
  );

  return {
    statusCode: 200,
    body: getWelcomeService.handle(),
  };
}
