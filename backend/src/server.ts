import Koa, { Middleware } from 'koa';
import Router from 'koa-router';
import koaCors from '@koa/cors';

const PORT = 3001;
const app = new Koa();
const router = new Router();

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

const controller: Middleware = async(ctx) => {
  console.log('receive');
  ctx.body = {
    message: 'Hello World'
  };
};

router.get('/', controller);

app.use(cors());
app.use(router.routes()).use(router.allowedMethods());
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}.`);
});