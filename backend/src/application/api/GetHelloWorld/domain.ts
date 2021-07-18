import 'reflect-metadata';

import { injectable } from 'inversify';
import Redis from 'ioredis';

export type HelloWorld = {
  message: string;
};

@injectable()
export class GetHelloWorldDomain {
  public async invoke(): Promise<HelloWorld> {
    const redis = new Redis(); // ref: https://github.com/luin/ioredis#connect-to-redis
    redis.set('foo', 'bar');
    redis.get('foo', function (err, result) {
      if (err) {
        console.error(err);
      } else {
        console.log(result);
      }
    });
    return { message: 'Hello World!' };
  }
}
