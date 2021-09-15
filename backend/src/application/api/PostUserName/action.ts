import 'reflect-metadata';

import { inject, injectable } from 'inversify';

import { TYPES } from '../../../types/DependencyTypes';
import { Action } from '../action';
import { DefaultAppContext } from '../context';

import { PostUserNameDomain } from './domain';
import { PostUserNameResponder } from './responder';

@injectable()
export class PostUserNameAction implements Action {
  public constructor(
    @inject(TYPES.PostUserNameDomain) private domain: PostUserNameDomain,
    @inject(TYPES.PostUserNameResponder) private responder: PostUserNameResponder,
  ) {}

  public async invoke(ctx: DefaultAppContext<any>): Promise<void> {
    console.log(ctx.request.body);

    await this.responder.emit(ctx, await this.domain.invoke());
  }
}
