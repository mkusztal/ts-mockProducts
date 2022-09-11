import { User } from '../interfaces/user.interface';
import { UsersRepository } from './users-repository.interface';
import shortid = require('shortid');

export class UsersMockRepository implements UsersRepository {
  private users: Array<User> = [];

  findUserByFirstName(firstName: string): User {
    return this.users.find((i) => i.firstName === firstName);
  }
  addItem(item: User): User {
    item.id = shortid.generate();
    item.role = item.role;
    this.users.push(item);
    return item;
  }
  deleteItem(id: string): boolean {
    this.users = this.users.filter((i) => i.id !== id);
    return true;
  }

  updateItem(id: string, item: User): User {
    this.users = this.users.map((i) => {
      if (i.id === id) {
        return {
          ...item,
          id: i.id,
          role: i.role,
          updatedAt: new Date(),
        };
      }
      return i;
    });
    return this.getItemById(id);
  }

  getItemById(id: string): User {
    return this.users.find((i) => i.id === id);
  }
  getAllItems(): User[] {
    return this.users;
  }
}
