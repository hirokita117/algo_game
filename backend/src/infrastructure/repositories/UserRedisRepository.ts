import { inject, injectable } from 'inversify';

import { User } from '../../domain/entities/Player/User';
import { UserRepositoryInterface } from '../../domain/repositories/UserRepositoryInterface';
import { TYPES } from '../../types/DependencyTypes';
import { RedisConnection } from '../DataSource/RedisConnection';

@injectable()
export class UserRedisRepository implements UserRepositoryInterface {
  public constructor(@inject(TYPES.RedisConnection) private redisConnection: RedisConnection) {}

  async save(user: User): Promise<void> {
    const redis = this.redisConnection.connect();
    redis.set(user.getId(), user.getName());
  }
}
