import { ReceivePoints } from 'src/domain/cashback/ReceivePoints';
import { CPF } from 'src/domain/CPF';
import { bootstrap } from 'src/main';

export async function receivePoints() {
  const app = await bootstrap();
  const receivePoints: ReceivePoints = app.get('ReceivePointsService');

  const result = await receivePoints.handle(new CPF(''), 1020);

  return {
    statusCode: 200,
    body: result,
  };
}
