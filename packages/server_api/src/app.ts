import * as express from 'express';
import type { Application } from 'express';
import * as morgan from 'morgan';

// import { PORT, NODE_ENV } from './config';

class Server {
  public app: Application;
  private prod: boolean;

  constructor() {
    const app: Application = express();
    // const prod = NODE_ENV === 'production';
    const prod = false;
    this.app = app;
    this.prod = prod;
  }

  private set() {
    this.app.set('port', this.prod ? 8000 : 8000);
  }

  private setRoute() {
    // const userRouter = '';
    // this.app.use(userRouter);
    console.log('test');
  }

  private setMiddleware() {
    this.app.use(express.json());
    this.app.use(this.prod ? morgan('combined') : morgan('dev'));
    this.setRoute();
  }

  public listen() {
    this.set();
    this.setMiddleware();
    this.app.listen(8000, () => console.log(`start to server: http://localhost:${8000}/`));
  }
}

const init = () => {
  const server = new Server();
  server.listen();
};

init();
