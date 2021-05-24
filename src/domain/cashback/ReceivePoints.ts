import { CPF } from '../CPF';
import { Cashback } from './cashback';

export interface ReceivePoints {
  handle(cpf: CPF, orderValue: number): Promise<Cashback>;
}
