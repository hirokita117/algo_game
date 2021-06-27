import Koa from 'koa';

import { App } from './app';

const app = new App(new Koa());
app
  .init()
  .then(app.listen)
  .catch((e) => app.callError(e));
