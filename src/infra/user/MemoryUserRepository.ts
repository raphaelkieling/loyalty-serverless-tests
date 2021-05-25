import { Injectable } from '@nestjs/common';
import { Cashback } from '../../domain/cashback/Cashback';
import { CPF } from '../../domain/CPF';
import { User } from '../../domain/user/User';
import { UserRepository } from '../../domain/user/UserRepository';

@Injectable()
export class MemoryUserRepository implements UserRepository {
  async getUserByCPF(cpf: CPF): Promise<User> {
    return new User('Raphael kieling', cpf, new Cashback(0));
  }
}
