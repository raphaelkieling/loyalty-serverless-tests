import { ReceivePoints } from '../../../domain/cashback/ReceivePoints';
import { CPF } from '../../../domain/CPF';
import { bootstrap } from '../../../main';

export async function receivePoints() {
  const app = await bootstrap();
  const receivePoints: ReceivePoints = app.get('ReceivePointsService');

  const result = await receivePoints.handle(new CPF(''), 1020);

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
}
