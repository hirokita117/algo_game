import { User } from '../entities/Player/User';

export interface UserRepositoryInterface {
  save(user: User): Promise<void>;
}
