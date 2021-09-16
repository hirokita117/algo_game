import { injectable } from 'inversify';
import { v4 as uuidv4 } from 'uuid';

@injectable()
export class UuidFactory {
  create(): string {
    return uuidv4();
  }
}
