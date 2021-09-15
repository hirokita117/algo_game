import 'reflect-metadata';

import { injectable } from 'inversify';

@injectable()
export class PostUserNameDomain {
  public async invoke(): Promise<boolean> {
    return true;
  }
}
