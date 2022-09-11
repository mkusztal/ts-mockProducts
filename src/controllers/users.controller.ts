import { User } from '../interfaces/user.interface';
import { UsersRepository } from '../repositories/users-repository.interface';
import BaseController from './base-controller';

class UserController extends BaseController<User> {
  constructor(private usersRepository: UsersRepository) {
    super(usersRepository);
  }

  findUserByFirstName(firstName: string): User {
    return this.usersRepository.findUserByFirstName(firstName);
  }
}
