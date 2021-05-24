import { CPF } from '../CPF';
import { User } from './user';

export interface UserRepository {
  getUserByCPF(cpf: CPF): Promise<User>;
}
