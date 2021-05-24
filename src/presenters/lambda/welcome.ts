import { GetWelcomeMessage } from 'src/domain/welcome/GetWelcomeMessage';
import { bootstrap } from 'src/main';

export async function get() {
  const app = await bootstrap();
  const getWelcomeService: GetWelcomeMessage = app.get(
    'GetWelcomeMessageService',
  );

  return {
    statusCode: 200,
    body: getWelcomeService.handle(),
  };
}
