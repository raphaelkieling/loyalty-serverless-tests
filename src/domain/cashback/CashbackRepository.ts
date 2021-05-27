import { CPF } from '../CPF';
import { Cashback } from './cashback';

export interface CashbackRepository {
  addCashbackForUserByCPF(cpf: CPF, cashback: Cashback): Promise<Cashback>;
}
