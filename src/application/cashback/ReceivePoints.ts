import { Cashback } from '../../domain/cashback/cashback';
import { CPF } from '../../domain/CPF';
import { UserRepository } from '../../domain/user/UserRepository';
import { ReceivePoints } from '../../domain/cashback/ReceivePoints';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ReceivePointsService implements ReceivePoints {
  constructor(
    @Inject('UserRepository') private userRepository: UserRepository,
  ) {}

  async handle(cpf: CPF, orderValue: number): Promise<Cashback> {
    const user = await this.userRepository.getUserByCPF(cpf);

    console.log(user);

    return new Cashback(orderValue);
  }
}
