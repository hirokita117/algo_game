import 'reflect-metadata';

import { injectable } from 'inversify';

export type HelloWorld = {
  message: string;
};

@injectable()
export class GetHelloWorldDomain {
  public async invoke(): Promise<HelloWorld> {
    return { message: 'Hello World!' };
  }
}
