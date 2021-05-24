import { Cashback } from '../cashback/cashback';
import { CPF } from '../CPF';

export class User {
  name: string;
  cpf: CPF;
  cashback: Cashback;

  constructor(name: string, cpf: CPF, cashback: Cashback) {
    this.name = name;
    this.cpf = cpf;
    this.cashback = cashback;
  }
}
