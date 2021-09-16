import { inject, injectable } from 'inversify';

import { User, UserInitialProps } from '../../domain/entities/Player/User';
import { UserRepositoryInterface } from '../../domain/repositories/UserRepositoryInterface';
import { TYPES } from '../../types/DependencyTypes';
import { RedisConnection } from '../DataSource/RedisConnection';

@injectable()
export class UserRedisRepository implements UserRepositoryInterface {
  public constructor(@inject(TYPES.RedisConnection) private redisConnection: RedisConnection) {}

  async save(props: UserInitialProps): Promise<User> {
    const redis = this.redisConnection.connect();
    redis.set(props.id, props.name);

    return new User({
      id: props.id,
      name: props.name,
    });
  }
}
