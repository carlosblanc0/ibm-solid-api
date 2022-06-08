import {CreateUserUseCase, CreateUserUseCase} from './CreateUserUseCase';
import {
  CreateUserController,
  CreateUserController,
} from './CreateUserController';
import {PostgresUsersRepository} from '../../repositories/implementations/PostgresUserRepository';
import {MailtrapProvider} from '../../providers/implementations/MailtrapMailProvider';

const postgressUserRepository = new PostgresUsersRepository();
const mailtrapMailProvider = new MailtrapProvider();
const CreateUserUseCase = new CreateUserUseCase(
  postgressUserRepository,
  mailtrapMailProvider,
);

const CreateUserController = new CreateUserController(CreateUserUseCase);

export {CreateUserUseCase, CreateUserController};
