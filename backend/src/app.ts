import Koa from 'koa';

import { AlgoFrontPort } from './config/app';
import { RoutesLoader } from './routes';

export class App {
  readonly PORT = AlgoFrontPort;
  public constructor(private app: Koa) {}

  public async init() {
    const app = new Koa();
    await RoutesLoader(app);
    this.app = app;
  }

  listen = () => {
    this.app.listen(this.PORT, () => {
      console.log(`server is running on port ${this.PORT}.`);
    });
  };

  callError = (error: any) => {
    console.error(error);
  };
}
