import { Injectable } from '@nestjs/common';
import { CPF } from '../../domain/CPF';
import { User } from '../../domain/user/User';
import { UserRepository } from '../../domain/user/UserRepository';

@Injectable()
export class MemoryUserRepository implements UserRepository {
  private users: User[] = [];

  async createUser(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async getUserByCPF(cpf: CPF): Promise<User> {
    return this.users.find((item) => item.cpf.value === cpf.value);
  }
}
