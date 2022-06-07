import {User} from '../../entities/User';
import {IMailProvider} from '../../providers/IMailProvider';
import {IUsersRepository} from '../../repositories/IUsersRepository';
import {ICreateUserRequestDTO} from './CreateUserDTO';

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider,
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const userExists = await this.usersRepository.findByEmail(data.email);

    if (userExists) {
      throw new Error('User already exists. Reset password instead.');
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: 'IBM@Louisiana',
        email: 'cblanco@ibm.com',
      },
      subject: 'Welcome to IBM',
      body: '<h3>Check out your next onboarding session details.</h3>',
    });
  }
}
