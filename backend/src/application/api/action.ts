import type { DefaultAppContext } from './context';

export interface Action {
  invoke(ctx: DefaultAppContext<any>): Promise<void>;
}
