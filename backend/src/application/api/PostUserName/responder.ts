import 'reflect-metadata';

import { injectable } from 'inversify';

import { DefaultAppContext } from '../context';
import { Responder } from '../responder';

@injectable()
export class PostUserNameResponder implements Responder {
  public async emit(ctx: DefaultAppContext<any>, params: boolean): Promise<void> {
    ctx.status = params ? 200 : 500;
    return;
  }
}
