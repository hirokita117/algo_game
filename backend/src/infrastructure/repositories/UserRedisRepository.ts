import { Redis } from 'ioredis';

import { User } from '../../domain/entities/Player/User';
import { UserRepositoryInterface } from '../../domain/repositories/UserRepositoryInterface';

export class UserRedisRepository implements UserRepositoryInterface {
  public constructor(private redis: Redis) {}

  async save(user: User): Promise<void> {
    this.redis.set(user.getId(), user.getName());
  }
}
