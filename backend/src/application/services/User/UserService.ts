import { inject, injectable } from 'inversify';

import { User } from '../../../domain/entities/Player/User';
import { UserRepositoryInterface } from '../../../domain/repositories/UserRepositoryInterface';
import { TYPES } from '../../../types/DependencyTypes';

import { UuidFactory } from './UuidFactory';

@injectable()
export class UserService {
  public constructor(
    @inject(TYPES.UuidFactory) private uuidFactory: UuidFactory,
    @inject(TYPES.UserRepository) private userRepository: UserRepositoryInterface,
  ) {}

  async createUser(name: string): Promise<User> {
    const user = await this.userRepository.save({
      id: this.uuidFactory.create(),
      name,
    });

    return user;
  }
}
