import type { DefaultAppContext } from './context';

export interface Responder {
  emit(ctx: DefaultAppContext<any>, params: unknown): Promise<void>;
}
