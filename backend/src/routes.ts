import koaCors from '@koa/cors';
import Koa from 'koa';
import Router from 'koa-router';

import { GetHelloWorldAction } from './application/api/GetHelloWorld/action';
import { TYPES } from './types/DependencyTypes';
import { myContainer } from './inversify.config';

const cors = () => {
  return koaCors({
    async origin(ctx): Promise<string> {
      if (ctx.request.header.origin && ctx.request.header.origin === process.env.ALGO_FRONT_URL) {
        return ctx.request.header.origin;
      }

      return ctx.throw('Request from not allowed Origin.');
    },
    credentials: true,
    maxAge: 600,
  });
};

export const RoutesLoader = async (app: Koa) => {
  const router = new Router();

  const GetHelloWorldAction = myContainer.get<GetHelloWorldAction>(TYPES.GetHelloWorldAction);

  router.get('/', (ctx: any) => GetHelloWorldAction.invoke(ctx));

  app.use(cors());
  app.use(router.routes());
  app.use(router.allowedMethods());
};
