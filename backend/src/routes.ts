import koaCors from '@koa/cors';
import Koa from 'koa';
import koaBody from 'koa-body';
import Router from 'koa-router';

import { GetHelloWorldAction } from './application/api/GetHelloWorld/action';
import { PostUserNameAction } from './application/api/PostUserName/action';
import { AlgoGameUrl } from './config/app';
import { TYPES } from './types/DependencyTypes';
import { myContainer } from './inversify.config';

const cors = () => {
  return koaCors({
    async origin(ctx): Promise<string> {
      if (ctx.request.header.origin === AlgoGameUrl) {
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
  const PostUserNameAction = myContainer.get<PostUserNameAction>(TYPES.PostUserNameAction);

  router.get('/', (ctx: any) => GetHelloWorldAction.invoke(ctx));

  router.post('/user', koaBody(), (ctx: any) => PostUserNameAction.invoke(ctx));

  app.use(cors());
  app.use(router.routes());
  app.use(router.allowedMethods());
};
