import {request, response} from 'express';
import {CreateUserUseCase} from './CreateUserUseCase';

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, reponse: Response): Promise<Response> {
    const {name, email, password} = request.body;

    try {
      await this.createUserUseCase.execute({
        name,
        email,
        password,
      });
      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Please, contact the help desk.',
      });
    }
  }
}
