import koaCors from '@koa/cors';
import Koa, { Middleware } from 'koa';
import Router from 'koa-router';

const cors = () => {
  return koaCors({
    async origin(ctx): Promise<string> {
      if (ctx.request.header.origin && ctx.request.header.origin) {
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

  const controller: Middleware = async (ctx) => {
    console.log('receive');
    ctx.body = {
      message: 'Hello World',
    };
  };

  router.get('/', controller);

  app.use(cors());
  app.use(router.routes());
  app.use(router.allowedMethods());
};
