import type { DefaultContext, DefaultState, ParameterizedContext } from 'koa';

export type DefaultAppContext<T> = ParameterizedContext<DefaultState, DefaultContext, T>;
