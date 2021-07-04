import 'reflect-metadata';

import { inject, injectable } from 'inversify';

import { TYPES } from '../../../types/DependencyTypes';
import { Action } from '../action';
import { DefaultAppContext } from '../context';

import { GetHelloWorldDomain } from './domain';
import { GetHelloWorldResponder } from './responder';

@injectable()
export class GetHelloWorldAction implements Action {
  public constructor(
    @inject(TYPES.GetHelloWorldDomain) private domain: GetHelloWorldDomain,
    @inject(TYPES.GetHelloWorldResponder) private responder: GetHelloWorldResponder,
  ) {}

  public async invoke(ctx: DefaultAppContext<any>): Promise<void> {
    await this.responder.emit(ctx, await this.domain.invoke());
  }
}
