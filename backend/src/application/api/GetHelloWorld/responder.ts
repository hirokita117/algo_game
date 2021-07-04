import 'reflect-metadata';

import { injectable } from 'inversify';

import { DefaultAppContext } from '../context';
import { Responder } from '../responder';

import { HelloWorld } from './domain';

@injectable()
export class GetHelloWorldResponder implements Responder {
  public async emit(ctx: DefaultAppContext<any>, params: HelloWorld): Promise<void> {
    ctx.body = params;
    return;
  }
}
