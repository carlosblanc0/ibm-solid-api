import {User} from '../../entities/User';
import {IUsersRepository} from '../../repositories/IUsersRepository';
import {ICreateUserRequestDTO} from './CreateUserDTO';

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: ICreateUserRequestDTO) {
    const userExists = await this.usersRepository.findByEmail(data.email);

    if (userExists) {
      throw new Error('User already exists. Reset password instead.');
    }

    const user = new User(data);

    await this.usersRepository.save(user);
  }
}
