import { Injectable } from '@nestjs/common';
import { Cashback } from 'src/domain/cashback/Cashback';
import { CPF } from 'src/domain/CPF';
import { User } from 'src/domain/user/User';
import { UserRepository } from 'src/domain/user/UserRepository';

@Injectable()
export class MemoryUserRepository implements UserRepository {
  async getUserByCPF(cpf: CPF): Promise<User> {
    return new User('Raphael kieling', cpf, new Cashback(0));
  }
}
