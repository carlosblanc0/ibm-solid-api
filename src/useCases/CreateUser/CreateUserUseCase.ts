import {IUsersRepository} from '../../repositories/IUsersRepository';

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute() {
    const userExists = await this.usersRepository.findByEmail();
  }
}
