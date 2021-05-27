import { Cashback } from '../../domain/cashback/cashback';
import { CPF } from '../../domain/CPF';
import { UserRepository } from '../../domain/user/UserRepository';
import { ReceivePoints } from '../../domain/cashback/ReceivePoints';
import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../domain/user/user';

@Injectable()
export class ReceivePointsService implements ReceivePoints {
  constructor(
    @Inject('UserRepository') private userRepository: UserRepository,
  ) {}

  async handle(cpf: CPF, orderValue: number): Promise<Cashback> {
    let user: User | null = await this.userRepository.getUserByCPF(cpf);

    const currentReceivedCashback = new Cashback(orderValue);
    if (!user) {
      user = await this.userRepository.createUser(
        new User('', cpf, currentReceivedCashback),
      );
    }

    return currentReceivedCashback;
  }
}
