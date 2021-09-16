import { injectable } from 'inversify';
import Redis from 'ioredis';

@injectable()
export class RedisConnection {
  private redis: Redis.Redis;

  public constructor() {
    // ポート番号とかは一旦デフォルトで
    // ref: https://github.com/luin/ioredis#connect-to-redis
    this.redis = new Redis();
  }

  connect(): Redis.Redis {
    return this.redis;
  }
}
